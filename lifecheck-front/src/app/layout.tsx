import { Inter } from "next/font/google";
import "../css/style.css";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { cn } from "../lib/utils/cn";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LifeCheck",
  description: "Quality of life assessment tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <UserProvider>
          <Header2 />
          <div className="pt-20">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
