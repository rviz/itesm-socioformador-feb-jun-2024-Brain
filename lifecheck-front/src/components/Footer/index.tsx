import * as React from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils/cn"; // assuming you have a classnames utility
// import github icon
import { Github } from "lucide-react";

const Footer = () => (
  <footer className={cn("text-black text-center self-center items-center p-4")}>
    <div className="container mx-auto mt-2">
      <p className="text-sm">© {new Date().getFullYear()} Brain.</p>
      <div className="mt-2 flex justify-center items-center">
        <Link href="/privacy" className="text-black hover:underline px-2">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-black hover:underline px-2">
          Terms of Service
        </Link>
        <Link
          href="https://github.com/wizelineacademy/itesm-socioformador-feb-jun-2024-Brain"
          className="text-black hover:underline px-2"
        >
          <Github className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
