"use client";
import "./globals.css";
import { S } from "../components";

import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>Movie app</title>
      </head>
      <body className="antialiased flex min-h-screen flex-col items-center justify-between md:p-24">
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme
            baseColor="#fdfdfd"
            highlightColor="#430461"
            borderRadius={80}
          >
            <S.Navbar />
            {children}
          </SkeletonTheme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
