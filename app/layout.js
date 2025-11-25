import { Inter } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | CANE-3",
    default: "Finance App"
  },
  description: "Wealthness monitoring app",
}

export default function RootLayout({ children }) {
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen flex flex-col px-8`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
