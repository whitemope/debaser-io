import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const GITHUB_API = "https://api.github.com";

function setAtPath(obj: unknown, segments: string[], value: string) {
  let cur = obj as Record<string, unknown>;
  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    const key: string | number = /^\d+$/.test(seg) ? Number(seg) : seg;
    const next = (cur as Record<string, unknown>)[key as string];
    if (next === undefined) throw new Error(`Invalid content path segment: ${seg}`);
    cur = next as Record<string, unknown>;
  }
  const lastSeg = segments[segments.length - 1];
  const lastKey: string | number = /^\d+$/.test(lastSeg) ? Number(lastSeg) : lastSeg;
  (cur as Record<string | number, unknown>)[lastKey] = value;
}

async function saveViaFilesystem(fileName: string, segments: string[], value: string) {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(raw);
  setAtPath(data, segments, value);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

async function saveViaGitHubCommit(fileName: string, segments: string[], value: string) {
  const owner = process.env.VERCEL_GIT_REPO_OWNER;
  const repo = process.env.VERCEL_GIT_REPO_SLUG;
  const branch = process.env.VERCEL_GIT_COMMIT_REF;
  const token = process.env.GITHUB_TOKEN;

  if (!owner || !repo || !branch || !token) {
    throw new Error(
      "Missing GitHub commit configuration — set GITHUB_TOKEN in Vercel project settings."
    );
  }

  const apiUrl = `${GITHUB_API}/repos/${owner}/${repo}/contents/content/${fileName}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  for (let attempt = 0; attempt < 2; attempt++) {
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, { headers, cache: "no-store" });
    if (!getRes.ok) {
      throw new Error(`Failed to read ${fileName} from GitHub (${getRes.status}).`);
    }
    const file = await getRes.json();
    const data = JSON.parse(Buffer.from(file.content, "base64").toString("utf-8"));

    setAtPath(data, segments, value);

    const newContent = Buffer.from(JSON.stringify(data, null, 2) + "\n", "utf-8").toString(
      "base64"
    );

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: `Edit copy: ${fileName} (${segments.join(".")})`,
        content: newContent,
        sha: file.sha,
        branch,
      }),
    });

    if (putRes.ok) return;
    if (putRes.status === 409 && attempt === 0) continue;

    const errBody = await putRes.text();
    throw new Error(`Failed to commit ${fileName} to GitHub (${putRes.status}): ${errBody}`);
  }

  throw new Error(`Failed to commit ${fileName} — someone else edited it at the same time.`);
}

export async function POST(request: Request) {
  if (process.env.VERCEL_ENV === "production") {
    return NextResponse.json(
      { error: "Editing is disabled on the production deployment." },
      { status: 403 }
    );
  }

  const { variant, path: fieldPath, value } = await request.json();

  if (
    (variant !== "v1" && variant !== "v2") ||
    typeof fieldPath !== "string" ||
    typeof value !== "string"
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fileName = `homepage.${variant}.json`;
  const segments = fieldPath.split(".");
  const onVercel = process.env.VERCEL === "1";

  try {
    if (onVercel) {
      await saveViaGitHubCommit(fileName, segments, value);
      return NextResponse.json({ ok: true, mode: "commit" });
    }

    await saveViaFilesystem(fileName, segments, value);
    return NextResponse.json({ ok: true, mode: "fs" });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to save." },
      { status: 500 }
    );
  }
}
