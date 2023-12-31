import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MouseMove from "./components/MouseMove";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minh Duc",
  description: "Minh Duc portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: "relative" }}>
        <MouseMove></MouseMove>
        {children}
      </body>
    </html>
  );
}
