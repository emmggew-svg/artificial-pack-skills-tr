import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Türkçe yapay zekâ beceri paketi: toplantı, Next.js, KVKK, akademik, e-fatura ve daha fazlası.",
  title: "Türkçe Beceri Paketi"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
