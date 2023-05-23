import { StrictMode } from "react";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Time Tracking",
  description: "Project to explore Typescript and Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StrictMode>
        <body className={` ${rubik.className} h-screen bg-backgroundColor `}>
          {children}
        </body>
      </StrictMode>
    </html>
  );
}
