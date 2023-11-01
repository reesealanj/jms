import type { Metadata } from "next";

import "./globals.css";
import "react-modern-drawer/dist/index.css";

import { Inter } from "next/font/google";

import { GlobalSearchProvider } from "@/context/global-search";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarLayout } from "@/components/layout";
import { ReactQueryProvider } from "@/context/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnson Marine",
  description:
    "One stop shop for service and maintenance at Johnson Marine in Ontario, CA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <GlobalSearchProvider>
          <TooltipProvider>
            <body className={inter.className}>
              <SidebarLayout>{children}</SidebarLayout>
              <ReactQueryDevtools initialIsOpen={false} />
            </body>
          </TooltipProvider>
        </GlobalSearchProvider>
      </ReactQueryProvider>
    </html>
  );
}
