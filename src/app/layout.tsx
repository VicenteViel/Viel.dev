import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vicente Viel, full-stack developer",
  description:
    "Full-stack developer in Chile with 3 years of experience building web and mobile apps with TypeScript, React, Next.js and React Native. Open to remote roles.",
  openGraph: {
    title: "Vicente Viel, full-stack developer",
    description:
      "Web and mobile apps with TypeScript, React, Next.js and React Native. Open to remote roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1522" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
