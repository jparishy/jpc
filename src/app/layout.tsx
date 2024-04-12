import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jp",
  description: "julius parishy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
