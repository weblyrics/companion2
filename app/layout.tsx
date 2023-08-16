import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "./lib/utils";
import { Toaster } from "./components/ui/toaster";
import ProModal from "./components/pro-modal";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sass companion",
  description: "An ai companion application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(" bg-secondary", font.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ProModal />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
