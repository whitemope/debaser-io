"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Nav from "@/components/Nav";
import { EASE } from "@/lib/animation";

// ── Shared helpers ────────────────────────────────────────────────────────

function DemoShell({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`force-light bg-white rounded-2xl border border-black/[0.07] overflow-hidden ${className}`}
      style={{ boxShadow: "0 0 0 1px rgba(16, 21, 133,0.05), 0 32px 64px rgba(16, 21, 133,0.10)" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.05] bg-black/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.07]" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.07]" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.07]" />
        </div>
        <span className="text-ink-tertiary text-[10px] font-mono ml-2">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ── Demo 1: Statement Ingestion ───────────────────────────────────────────

const FILES = [
  { name: "spotify_export_q2_2024.csv", rows: "2,847 rows", badge: "CSV", dur: 1.1, delay: 0.2 },
  { name: "mcps_statement_june.pdf",     rows: "412 rows",   badge: "PDF", dur: 1.4, delay: 0.5 },
  { name: "apple_music_q2_2024.xlsx",   rows: "1,204 rows", badge: "XLS", dur: 1.0, delay: 0.8 },
];

const NORM_ROWS = [
  { isrc: "GB-A1B-24-00001", src: "Spotify",    amt: "£324.50", ok: true },
  { isrc: "GB-LMN-24-00029", src: "MCPS",       amt: "£89.20",  ok: true },
  { isrc: "US-Z03-24-00418", src: "Apple Music", amt: "£211.80", ok: false },
  { isrc: "GB-A1B-24-00043", src: "Spotify",    amt: "£156.30", ok: true },
];

function IngestionDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <DemoShell title="Statement Ingestion · Q2 2024">
      <div ref={ref} className="space-y-2 mb-4">
        {FILES.map((f, i) => {
          const done = f.delay + f.dur;
          return (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: f.delay, duration: 0.4, ease: EASE }}
              className="bg-canvas-card border border-black/[0.05] rounded-lg px-3 py-2.5 flex items-center gap-3"
            >
              <span className="text-[9px] font-mono font-bold text-acid bg-acid/10 rounded px-1.5 py-0.5 flex-shrink-0">
                {f.badge}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-ink text-[11px] truncate mb-1.5">{f.name}</p>
                <div className="h-[3px] bg-black/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-acid rounded-full"
                    initial={{ width: "0%" }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ delay: f.delay + 0.2, duration: f.dur, ease: "easeInOut" }}
                  />
                </div>
              </div>
              <motion.span
                className="text-ink-tertiary text-[10px] font-mono flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: done + 0.05 }}
              >
                {f.rows}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: done + 0.1, type: "spring", stiffness: 500, damping: 20 }}
                className="w-4 h-4 rounded-full bg-acid/20 flex items-center justify-center flex-shrink-0"
              >
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3l2 2 4-4" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.5, duration: 0.5, ease: EASE }}
        className="border border-acid/[0.15] rounded-xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-black/[0.05] bg-canvas-card">
          <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
          <span className="text-acid text-[10px] font-mono">4,463 rows normalised → unified schema</span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {NORM_ROWS.map((r, i) => (
            <motion.div
              key={r.isrc}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 2.7 + i * 0.07 }}
              className="grid grid-cols-4 text-[10px] font-mono px-3 py-1.5"
            >
              <span className="text-ink-secondary">{r.isrc}</span>
              <span className="text-ink-tertiary">{r.src}</span>
              <span className="text-ink">{r.amt}</span>
              <span className={r.ok ? "text-acid" : "text-amber-400"}>
                {r.ok ? "Matched" : "Unmatched"}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DemoShell>
  );
}

// ── Demo 2: Catalogue Matching ────────────────────────────────────────────

const MATCH_ROWS = [
  { isrc: "GB-A1B-24-00001", title: "Midnight Still",     artist: "Verne & Co.",   conf: 98, status: "matched",   delay: 0.2 },
  { isrc: "GB-LMN-24-00029", title: "Coastal Blue",       artist: "The September", conf: 93, status: "matched",   delay: 0.45 },
  { isrc: "US-Z03-24-00418", title: "—",                  artist: "Unknown",       conf: 0,  status: "unmatched", delay: 0.7 },
  { isrc: "GB-A1B-24-00043", title: "Retrograde",         artist: "Lunar Phase",   conf: 71, status: "partial",   delay: 0.95 },
  { isrc: "GB-XYZ-24-00891", title: "Glass Morning",      artist: "Aiko",          conf: 99, status: "matched",   delay: 1.2 },
];

const STATUS_STYLES: Record<string, string> = {
  matched: "text-acid",
  partial: "text-amber-400",
  unmatched: "text-red-400",
};
const STATUS_LABELS: Record<string, string> = {
  matched: "Matched",
  partial: "Partial",
  unmatched: "No match",
};

function MatchingDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <DemoShell title="Catalogue Matching · Atlantic Records UK">
      <div ref={ref}>
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_1fr_60px_80px] text-[9px] font-mono text-ink-tertiary tracking-wide pb-2 mb-1 border-b border-black/[0.04] px-1">
          <span>ISRC</span>
          <span>Work / Artist</span>
          <span className="text-center">Conf.</span>
          <span className="text-right">Status</span>
        </div>

        <div className="space-y-1">
          {MATCH_ROWS.map((row, i) => (
            <motion.div
              key={row.isrc}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: row.delay, duration: 0.35, ease: EASE }}
              className="grid grid-cols-[1fr_1fr_60px_80px] items-center px-2 py-2.5 rounded-lg hover:bg-canvas-card transition-colors"
            >
              <span className="text-ink-secondary text-[10px] font-mono">{row.isrc}</span>
              <div>
                <p className="text-ink text-[11px] font-medium leading-tight">{row.title}</p>
                <p className="text-ink-tertiary text-[9px]">{row.artist}</p>
              </div>
              <div className="flex items-center justify-center">
                {row.conf > 0 ? (
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-1 bg-black/[0.07] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${row.status === "matched" ? "bg-acid" : "bg-amber-400"}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${row.conf}%` } : {}}
                        transition={{ delay: row.delay + 0.3, duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <motion.span
                      className="text-[9px] font-mono text-ink-tertiary"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: row.delay + 0.5 }}
                    >
                      {row.conf}%
                    </motion.span>
                  </div>
                ) : (
                  <span className="text-[9px] font-mono text-ink-tertiary">—</span>
                )}
              </div>
              <motion.span
                className={`text-[10px] font-mono text-right ${STATUS_STYLES[row.status]}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: row.delay + 0.4 }}
              >
                {STATUS_LABELS[row.status]}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2.0 }}
          className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between text-[10px] font-mono"
        >
          <span className="text-ink-tertiary">5 recordings processed</span>
          <div className="flex gap-4">
            <span className="text-acid">3 matched</span>
            <span className="text-amber-400">1 partial</span>
            <span className="text-red-400">1 unmatched</span>
          </div>
        </motion.div>
      </div>
    </DemoShell>
  );
}

// ── Demo 3: Contract Intelligence ─────────────────────────────────────────

const CONTRACT_TEXT = `This Agreement is entered into between Stellar Records Ltd ("Label") and the Artist. The royalty rate shall be eighteen percent (18%) of net receipts from all digital exploitation. Territory: Worldwide, excluding Japan and South Korea. Recoupment shall be cross-collateralised across all releases under this Agreement. Producer deductions of three percent (3%) shall apply post-recoupment only.`;

const EXTRACTIONS = [
  { label: "Royalty rate",    value: "18% of net receipts",       color: "text-acid",    highlightStart: 117, highlightEnd: 151, delay: 0.6 },
  { label: "Territory",      value: "Worldwide excl. Japan & KR", color: "text-blue-400", highlightStart: 154, highlightEnd: 193, delay: 1.2 },
  { label: "Recoupment",     value: "Cross-collateralised",        color: "text-purple-400", highlightStart: 194, highlightEnd: 251, delay: 1.8 },
  { label: "Producer deduct",value: "3% post-recoupment",          color: "text-amber-400", highlightStart: 252, highlightEnd: 310, delay: 2.4 },
];

function ContractDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const HIGHLIGHTS = [
    { start: 0, end: 55, colorClass: "" },
    { start: 55, end: 151, text: "The royalty rate shall be eighteen percent (18%) of net receipts from all digital exploitation.", colorClass: "bg-acid/15 text-ink rounded" },
    { start: 151, end: 153, colorClass: "" },
    { start: 153, end: 193, text: " Territory: Worldwide, excluding Japan and South Korea.", colorClass: "bg-blue-400/15 text-ink rounded" },
    { start: 193, end: 195, colorClass: "" },
    { start: 195, end: 259, text: " Recoupment shall be cross-collateralised across all releases under this Agreement.", colorClass: "bg-purple-400/15 text-ink rounded" },
    { start: 259, end: 261, colorClass: "" },
    { start: 261, end: 338, text: " Producer deductions of three percent (3%) shall apply post-recoupment only.", colorClass: "bg-amber-400/15 text-ink rounded" },
  ];

  return (
    <DemoShell title="Contract Intelligence · License Agreement">
      <div ref={ref} className="grid grid-cols-[1fr_auto] gap-4">
        {/* Contract text */}
        <div className="bg-canvas-subtle/60 border border-black/[0.04] rounded-xl p-4">
          <p className="text-ink-secondary text-[11px] leading-relaxed font-mono">
            {HIGHLIGHTS.map((seg, i) => {
              const visible = inView && seg.colorClass;
              const segDelay = i === 1 ? 0.6 : i === 3 ? 1.2 : i === 5 ? 1.8 : i === 7 ? 2.4 : 0;
              if (!seg.colorClass) {
                return <span key={i}>{CONTRACT_TEXT.slice(seg.start, seg.end)}</span>;
              }
              return (
                <motion.span
                  key={i}
                  className={`transition-all ${seg.colorClass}`}
                  initial={{ backgroundColor: "transparent" }}
                  animate={inView ? {} : {}}
                  style={{ padding: "1px 2px" }}
                >
                  <motion.span
                    initial={{ opacity: 0.4 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0.4 }}
                    transition={{ delay: segDelay, duration: 0.3 }}
                  >
                    {seg.text}
                  </motion.span>
                </motion.span>
              );
            })}
          </p>
        </div>

        {/* Extracted fields */}
        <div className="w-44 space-y-2 flex-shrink-0">
          {EXTRACTIONS.map((ex, i) => (
            <motion.div
              key={ex.label}
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: ex.delay, duration: 0.4, ease: EASE }}
              className="bg-canvas-card border border-black/[0.05] rounded-lg p-2.5"
            >
              <p className="text-ink-tertiary text-[9px] font-mono tracking-wide mb-1">{ex.label}</p>
              <p className={`text-[11px] font-semibold ${ex.color}`}>{ex.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

// ── Demo 4: Anomaly Detection ─────────────────────────────────────────────

const ROYALTY_ROWS = [
  { territory: "UK", source: "Spotify",     prev: "£4,120", curr: "£4,389", change: "+6.5%",  ok: true,  warn: "" },
  { territory: "DE", source: "Apple Music", prev: "£1,870", curr: "£1,231", change: "−34.2%", ok: false, warn: "Unexplained drop" },
  { territory: "US", source: "YouTube",     prev: "£892",   curr: "£1,104", change: "+23.8%", ok: true,  warn: "" },
  { territory: "FR", source: "SACEM",       prev: "£2,240", curr: "£2,240", change: "±0.0%",  ok: false, warn: "Duplicate detected" },
];

const ALERTS = [
  { msg: "DE Apple Music: 34.2% drop vs prior period", sev: "high" },
  { msg: "FR SACEM: exact duplicate of Q1 statement", sev: "critical" },
  { msg: "Producer deduction applied before recoupment threshold", sev: "high" },
];

function AnomalyDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <DemoShell title="Anomaly Detection · Q2 2024 Royalty Run">
      <div ref={ref}>
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Total income", value: "£8,964", note: "across 4 territories" },
            { label: "Statements",   value: "4",      note: "processed" },
            { label: "Anomalies",    value: "3",      note: "flagged", red: true },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: EASE }}
              className={`border rounded-lg p-2.5 ${m.red ? "border-red-500/20 bg-red-500/[0.04]" : "border-black/[0.05] bg-canvas-card"}`}
            >
              <p className={`text-base font-bold ${m.red ? "text-red-400" : "text-ink"}`}>{m.value}</p>
              <p className="text-ink-tertiary text-[9px] font-mono">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <div className="space-y-1 mb-4">
          {ROYALTY_ROWS.map((row, i) => (
            <motion.div
              key={`${row.territory}-${row.source}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.12 }}
              className={`grid grid-cols-[32px_1fr_64px_64px_64px_auto] items-center gap-2 px-2 py-2 rounded-lg text-[10px] font-mono
                ${!row.ok ? "bg-canvas-card border border-black/[0.04]" : ""}`}
            >
              <span className="text-ink-tertiary">{row.territory}</span>
              <span className="text-ink-secondary">{row.source}</span>
              <span className="text-ink-tertiary">{row.prev}</span>
              <span className="text-ink">{row.curr}</span>
              <span className={row.ok ? "text-acid" : "text-red-400"}>{row.change}</span>
              <span>
                {!row.ok && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 400 }}
                    className="inline-flex items-center gap-1 text-[9px] text-red-400 bg-red-400/10 border border-red-400/20 rounded px-1.5 py-0.5"
                  >
                    ⚠ {row.warn}
                  </motion.span>
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Alert list */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.5, ease: EASE }}
          className="border border-red-500/20 bg-red-500/[0.03] rounded-xl p-3"
        >
          <p className="text-red-400 text-[10px] font-mono tracking-wide mb-2">3 anomalies require review</p>
          <div className="space-y-1.5">
            {ALERTS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 + i * 0.1 }}
                className="flex items-start gap-2 text-[10px]"
              >
                <span className={`flex-shrink-0 font-mono ${a.sev === "critical" ? "text-red-400" : "text-amber-400"}`}>
                  {a.sev === "critical" ? "Crit" : "High"}
                </span>
                <span className="text-ink-secondary">{a.msg}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DemoShell>
  );
}

// ── Demo 5: Explainability ────────────────────────────────────────────────

const EXPLANATION_LINES = [
  { text: "Your Spotify UK income dropped from £4,389 in Q1 to £3,102 in Q2 — a 29.3% decrease.", delay: 1.2 },
  { text: "This is primarily driven by 3 recordings that were active in Q1 but appear on zero streams in Q2:", delay: 1.6 },
  { text: "• GB-A1B-24-00001 (Midnight Still) — 0 streams Q2 vs 48,201 Q1", delay: 2.0 },
  { text: "• GB-A1B-24-00043 (Retrograde) — 0 streams Q2 vs 31,004 Q1", delay: 2.2 },
  { text: "These tracks may have been delisted or experienced metadata issues. No contract conflict detected.", delay: 2.5 },
];

const SOURCES = [
  { label: "Spotify Export Q2 2024.csv", rows: "rows 2,841–2,847" },
  { label: "Spotify Export Q1 2024.csv", rows: "rows 1,201–1,207" },
  { label: "Catalogue: Midnight Still",  rows: "ISRC GB-A1B-24-00001" },
];

function ExplainDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <DemoShell title="Explainability · Royalty Q&A">
      <div ref={ref} className="space-y-3">
        {/* User question */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
          className="flex justify-end"
        >
          <div className="bg-canvas-elevated border border-black/[0.06] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
            <p className="text-ink text-[12px]">
              Why did Spotify UK income drop this quarter?
            </p>
          </div>
        </motion.div>

        {/* AI response */}
        <div className="bg-canvas-card border border-black/[0.05] rounded-2xl rounded-tl-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 bg-acid/15 border border-acid/30 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-acid" />
            </div>
            <span className="text-ink-tertiary text-[10px] font-mono">Debaser AI · analysing statement data</span>
          </div>

          <div className="space-y-2">
            {EXPLANATION_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: line.delay, duration: 0.5 }}
                className={`text-[12px] leading-relaxed ${
                  line.text.startsWith("•") ? "text-ink-secondary pl-2 font-mono text-[11px]" : "text-ink-secondary"
                }`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.9, duration: 0.4, ease: EASE }}
            className="mt-4 pt-3 border-t border-black/[0.05]"
          >
            <p className="text-ink-tertiary text-[9px] font-mono tracking-wide mb-2">Sources</p>
            <div className="space-y-1">
              {SOURCES.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                  <span className="text-ink-secondary text-[10px]">{s.label}</span>
                  <span className="text-ink-tertiary text-[9px] font-mono">{s.rows}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DemoShell>
  );
}

// ── Demo 6: Missing Income ────────────────────────────────────────────────

const INCOME_ROWS = [
  { right: "Neighbouring rights · UK",  src: "PPL",       expected: "£3,200", received: "£0",     gap: "£3,200", sev: "critical" },
  { right: "Mechanical · EU digital",   src: "MCPS/BIEM", expected: "£1,840", received: "£1,120", gap: "£720",   sev: "high" },
  { right: "Sync residuals · Q1",       src: "Direct",    expected: "£650",   received: "£650",   gap: "—",      sev: "ok" },
  { right: "Performance · streaming",   src: "PRS",       expected: "£2,100", received: "£1,950", gap: "£150",   sev: "low" },
  { right: "Neighbouring rights · DE",  src: "GVL",       expected: "£890",   received: "£0",     gap: "£890",   sev: "critical" },
];

const SEV_COLORS: Record<string, string> = {
  critical: "text-red-400",
  high: "text-amber-400",
  low: "text-yellow-400/70",
  ok: "text-acid",
};

function MissingIncomeDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <DemoShell title="Missing Income Detection · All Rights · Q2 2024">
      <div ref={ref}>
        {/* Table header */}
        <div className="grid grid-cols-[1fr_64px_72px_72px_72px] gap-2 text-[9px] font-mono text-ink-tertiary tracking-wide pb-2 mb-1 border-b border-black/[0.04] px-1">
          <span>Right / Source</span>
          <span>Source</span>
          <span className="text-right">Expected</span>
          <span className="text-right">Received</span>
          <span className="text-right">Gap</span>
        </div>

        <div className="space-y-0.5 mb-4">
          {INCOME_ROWS.map((row, i) => (
            <motion.div
              key={row.right}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`grid grid-cols-[1fr_64px_72px_72px_72px] gap-2 items-center px-1 py-2 rounded text-[10px] font-mono
                ${row.sev === "critical" ? "bg-red-500/[0.04]" : row.sev === "high" ? "bg-amber-500/[0.03]" : ""}`}
            >
              <span className="text-ink-secondary truncate">{row.right}</span>
              <span className="text-ink-tertiary">{row.src}</span>
              <span className="text-ink text-right">{row.expected}</span>
              <span className="text-ink text-right">{row.received}</span>
              <motion.span
                className={`text-right font-bold ${SEV_COLORS[row.sev]}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                {row.gap}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5, ease: EASE }}
          className="border-t border-black/[0.08] pt-3 flex items-center justify-between"
        >
          <div>
            <p className="text-ink-tertiary text-[10px] font-mono tracking-wide">Total missing income</p>
            <p className="text-red-400 text-xl font-bold tabular-nums mt-0.5">£4,960</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1.5 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-1.5">
              <span className="text-red-400 text-[10px] font-mono">2 critical · 1 high · 1 low</span>
            </div>
            <p className="text-ink-tertiary text-[9px] font-mono mt-1.5">Claim packs ready to export</p>
          </div>
        </motion.div>
      </div>
    </DemoShell>
  );
}

// ── Feature section layout ────────────────────────────────────────────────

interface FeatureProps {
  number: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  demo: React.ReactNode;
  reversed?: boolean;
}

function Feature({ number, tag, title, description, bullets, demo, reversed }: FeatureProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-20 border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Text */}
          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-ink-tertiary text-[10px] font-mono">{number}</span>
                <div className="w-1 h-1 rounded-full bg-black/20" />
                <span className="text-acid text-[10px] font-mono tracking-wide">{tag}</span>
              </div>
              <h2 className="text-ink text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5 text-balance">
                {title}
              </h2>
              <p className="text-ink-secondary text-base leading-relaxed mb-8">{description}</p>
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: EASE }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-4 h-4 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1 h-1 rounded-full bg-acid" />
                    </div>
                    <span className="text-ink-secondary text-sm">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Demo */}
          <motion.div
            className={reversed ? "lg:[direction:ltr]" : ""}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          >
            {demo}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Features data ─────────────────────────────────────────────────────────

const FEATURES: FeatureProps[] = [
  {
    number: "01",
    tag: "Ingestion",
    title: "Any statement format. One clean schema.",
    description:
      "Debaser ingests royalty statements from every DSP, CMO, distributor and collecting society — regardless of format, structure or encoding — and normalises them into a unified data model your team can actually work with.",
    bullets: [
      "CSV, PDF, XLSX, API — all handled automatically",
      "Vendor-specific quirks mapped and normalised",
      "Duplicate detection across sources",
      "Full ingestion audit trail retained",
    ],
    demo: <IngestionDemo />,
    reversed: false,
  },
  {
    number: "02",
    tag: "Matching",
    title: "Connect income to every recording and right it belongs to.",
    description:
      "Every income row is matched to the correct ISRC, ISWC, work, recording, artist, writer and rights-holder. Partial matches are flagged with confidence scores. Unmatched income never falls through the cracks.",
    bullets: [
      "ISRC and ISWC matching across your full catalogue",
      "Confidence scoring on every match",
      "Partial and no-match queues for human review",
      "Matching history and decision audit trail",
    ],
    demo: <MatchingDemo />,
    reversed: true,
  },
  {
    number: "03",
    tag: "Contract Intelligence",
    title: "Read the contract. Understand the payment.",
    description:
      "Debaser extracts payable terms from contract PDFs — rates, territories, recoupment structures, deductions, exclusions — and uses them to validate every payment and detect breaches automatically.",
    bullets: [
      "Extracts rates, splits, recoupment thresholds",
      "Supports complex cross-collateralisation",
      "Territory exclusions and window restrictions",
      "Contract breach detection on every run",
    ],
    demo: <ContractDemo />,
    reversed: false,
  },
  {
    number: "04",
    tag: "Anomaly Detection",
    title: "Find what's broken before it breaks a relationship.",
    description:
      "Every royalty run is screened against prior periods, contract terms, and statistical baselines. Drops, duplicates, impossible values, early deductions — all surfaced before the money moves.",
    bullets: [
      "Period-over-period variance detection",
      "Duplicate statement identification",
      "Deduction timing and threshold validation",
      "Prioritised anomaly queue with severity scoring",
    ],
    demo: <AnomalyDemo />,
    reversed: true,
  },
  {
    number: "05",
    tag: "Explainability",
    title: "Every number should be able to defend itself.",
    description:
      "Any income figure, deduction or variance can be interrogated in plain English. Debaser cites the specific statement rows, contract clauses and catalogue records behind every answer — so you can stand behind them too.",
    bullets: [
      "Natural language Q&A over your royalty data",
      "Source-level citations on every response",
      "Explainable to artists, managers and lawyers",
      "Full reasoning trace available for audit",
    ],
    demo: <ExplainDemo />,
    reversed: false,
  },
  {
    number: "06",
    tag: "Missing Income",
    title: "Find the money that never arrived.",
    description:
      "Debaser compares expected income across every right, territory and source against what was actually received. Gaps are quantified, claim packs assembled and the evidence handed to your team — ready to file.",
    bullets: [
      "Cross-territory income gap analysis",
      "Unregistered works and recordings flagged",
      "Claim-ready evidence packs per territory",
      "Historical backfill analysis available",
    ],
    demo: <MissingIncomeDemo />,
    reversed: true,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden border-b border-black/[0.04]">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-acid text-[10px] font-mono tracking-wide mb-6 border border-acid/20 bg-acid/[0.06] rounded-full px-3.5 py-1.5">
              <div className="w-1 h-1 rounded-full bg-acid" />
              Product
            </div>
            <h1 className="text-ink text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06] mb-6 text-balance">
              Every module you need to run royalties properly.
            </h1>
            <p className="text-ink-secondary text-lg leading-relaxed max-w-2xl">
              Six interconnected capabilities — from ingestion to missing income detection — built as a single AI-native system. No stitching spreadsheets. No guessing where the money went.
            </p>
          </motion.div>

          {/* Feature nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {FEATURES.map((f) => (
              <span
                key={f.number}
                className="text-[11px] font-mono text-ink-secondary border border-black/[0.07] bg-canvas-card rounded-full px-3 py-1.5 hover:border-black/[0.14] hover:text-ink transition-colors cursor-default"
              >
                <span className="text-ink-tertiary mr-1.5">{f.number}</span>
                {f.tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature sections */}
      {FEATURES.map((f) => (
        <Feature key={f.number} {...f} />
      ))}

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="text-ink text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance max-w-2xl mx-auto">
              Ready to see it on your catalogue?
            </h2>
            <p className="text-ink-secondary text-lg mb-10 max-w-xl mx-auto">
              Send us last quarter&apos;s royalty mess. We&apos;ll show you what&apos;s wrong.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#access"
                className="bg-btn-primary text-btn-primary-fg text-sm font-medium px-7 py-3 rounded-xl hover:bg-btn-primary/90 transition-all"
              >
                Request early access
              </a>
              <a
                href="/"
                className="border border-black/[0.1] text-ink-secondary text-sm px-7 py-3 rounded-xl hover:border-black/[0.2] hover:text-ink transition-all"
              >
                Back to overview
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
