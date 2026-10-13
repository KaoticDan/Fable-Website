import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fable — Unicorns are found by design",
  description: "Private, curated rooms connecting serious founders, active investors, and partners at global technology conferences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
