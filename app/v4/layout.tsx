import type { Metadata } from "next";
import "./v4.css";

export const metadata: Metadata = {
  title: "Debaser — Run your catalogue's back office from your phone.",
  description:
    "Statements, contracts, splits and claims, end to end. Debaser is the operating layer for modern catalogue owners.",
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return <div className="v4">{children}</div>;
}
