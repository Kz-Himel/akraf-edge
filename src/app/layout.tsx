import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARKAF Edge — Creating an Edge for Brands That Matter",
  description:
    "ARKAF Edge helps businesses build stronger brands through strategic thinking, creative execution, and purposeful marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}