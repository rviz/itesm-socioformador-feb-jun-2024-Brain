"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

import { Package2, Search, CircleUser } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/src/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const { user } = useUser();

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
    <div
      className={`${
        scrolling ? "bg-white" : "bg-white from-black/50"
      } fixed top-0 z-30 border w-full duration-500 transition-all`}
    >
      <header
        className={`relative w-full uppercase text-[15px] ${
          scrolling ? "bg-white text-[#0C1B2A]" : "text-white"
        } transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-left text-black cursor-pointer">
            Brain
          </Link>

          <div className="items-center space-x-24 py-3 hidden uppercase md:flex">
            <Menu
              as="div"
              className="text-l text-black font-medium uppercase hover:text-[#23A28B]"
              key="Evaluación"
            >
              <Menu.Button as={Link} href="/evaluation">
                Evaluación
              </Menu.Button>
            </Menu>
            <Menu
              as="div"
              className="text-l text-black font-medium uppercase hover:text-[#23A28B]"
              key="Licencias"
            >
              <Menu.Button as={Link} href="/licenses">
                Empresas
              </Menu.Button>
            </Menu>
            <Menu
              as="div"
              className="text-l text-black font-medium uppercase hover:text-[#23A28B]"
              key="Recursos"
            >
              <Menu.Button as={Link} href="/resources">
                Recursos
              </Menu.Button>
            </Menu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white hover:text-[#23A28B]"
              >
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                {user ? (
                  <Link href="/account">My Account</Link>
                ) : (
                  <a href="/api/auth/login">Login</a>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/api/auth/logout">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
