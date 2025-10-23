import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

// Removed next/font/google (Geist) to avoid network fetch during build in restricted environments.

export const metadata = {
  title: "Rohit Ashva – Data Engineer",
  description: "Portfolio of Rohit Ashva, Data Engineer. ETL/ELT, Azure, Databricks, Search & Indexing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
