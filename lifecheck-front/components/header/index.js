"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const menuItems = {
  Evaluación: {
    href: "#",
    subcategories: [],
  },
  Licencias: {
    href: "",
    subcategories: [],
  },
  Recursos: {
    href: "#",
    subcategories: [],
  },
  Cuenta: {
    href: "/Cuenta",
    subcategories: [],
  },
};

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible); // Cambia la visibilidad del componente de búsqueda
  };
  return (
    <div
      className={`${
        scrolling ? "bg-[#0C1B2A]" : "bg-white from-black/50"
      } fixed top-0 z-30 w-full duration-500 transition-all`}
    >
      <header
        className={`relative w-full uppercase text-[15px] ${
          scrolling ? "bg-[#F3F2F1] text-[#0C1B2A]" : "text-white"
        } transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" passHref>
            <div className="text-left text-black">Brain</div>
          </Link>

          <div className="items-center space-x-24 py-3 hidden uppercase md:flex">
            {Object.keys(menuItems).map((category) => (
              <Menu
                as="div"
                className="text-l text-black font-normal uppercase"
                key={category}
              >
                <Menu.Button>{category}</Menu.Button>
              </Menu>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href={"/create"}></Link>
          </div>
        </div>
      </header>
    </div>
  );
}
