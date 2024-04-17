"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolling ? "bg-[#0C1B2A]" : "bg-white from-black/50"} fixed top-0 z-30 w-full duration-500 transition-all`}>
      <header className={`relative w-full uppercase text-[15px] ${scrolling ? "bg-[#F3F2F1] text-[#0C1B2A]" : "text-white"} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-left text-black cursor-pointer">Brain</Link>

          <div className="items-center space-x-24 py-3 hidden uppercase md:flex">
            <Menu as="div" className="text-l text-black font-normal uppercase" key="Evaluación">
              <Menu.Button as={Link} href="/evaluation">
                Evaluación
              </Menu.Button>
            </Menu>
            <Menu as="div" className="text-l text-black font-normal uppercase" key="Licencias">
              <Menu.Button as={Link} href="/licenses">
                Licencias
              </Menu.Button>
            </Menu>
            <Menu as="div" className="text-l text-black font-normal uppercase" key="Recursos">
              <Menu.Button as={Link} href="/resources">
                Recursos
              </Menu.Button>
            </Menu>
            <Menu as="div" className="text-l text-black font-normal uppercase" key="Cuenta">
              <Menu.Button as={Link} href="/account">
                Cuenta
              </Menu.Button>
            </Menu>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/create" className="cursor-pointer">
              Link Placeholder
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
