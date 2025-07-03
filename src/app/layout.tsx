import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Cowork",
  description:
    "Welcome to Cowork – where innovation meets collaboration in the heart of productivity! Unleash your potential in our thoughtfully designed coworking spaces, tailored to inspire creativity and foster connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mediumDesktop:w-[90vw] ultraDesktop:w-[70vw] ultraLargDesktop:w-[60vw] mx-auto flex min-h-screen w-full max-w-[1600px] flex-col overflow-x-hidden px-4 py-2 lg:px-10 lg:py-4 2xl:px-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
