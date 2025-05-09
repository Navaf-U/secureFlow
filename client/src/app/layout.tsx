import Navbar from "@/components/Header/Navbar";
import { ThemeProvider } from "@/components/themes/theme-provider";
import "./globals.css";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "SecureFlow",
  description: "SecureFlow",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
