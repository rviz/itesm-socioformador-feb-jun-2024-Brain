"use client";
import { Menu } from "@headlessui/react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Package2, Search, CircleUser, Home } from "lucide-react";
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

export default function Header2() {
  const { user } = useUser();

  return (
    <div className="bg-[#0C1B2A] fixed top-0 z-30 w-full duration-500 transition-all">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Home className="h-6 w-6" />
            <span className="sr-only">Brain</span>
          </Link>
          <Link
            href="/evaluation"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Evaluación
          </Link>
          <Link
            href="/business"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Empresas
          </Link>
          <Link
            href="/resources"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Recursos
          </Link>
        </nav>
        <div className="flex items-center justify-end w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
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
