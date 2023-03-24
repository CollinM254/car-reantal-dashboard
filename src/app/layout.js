import { Inter } from "@next/font/google";
import MenuNavigation from "@/components/MenuNavigation/MenuNavigation";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <main className="main">
          <MenuNavigation />
          {children}
        </main>
      </body>
    </html>
  );
}
