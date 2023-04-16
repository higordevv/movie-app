"use client";
import "./globals.css";
import { S } from "../components";

import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { MovieContextProvider, MovieContext } from "../contexts/HomeContext";

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
      <body className="relative antialiased flex min-h-screen flex-col items-center overflow-x-hidden bg-black">
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme
            baseColor="#fdfdfd"
            highlightColor="#430461"
            borderRadius={80}
          >
            <header className="p-4 md:p-5 z-20">
              <S.Navbar />
            </header>
            <MovieContextProvider>{children}</MovieContextProvider>
            <footer className="mt-auto z-20">
              <S.Footer />
            </footer>
          </SkeletonTheme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
