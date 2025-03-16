"use client";

import { useMedia } from "react-use";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { useRouter } from "next/router";
import { NavButton } from "./nav-button";

import { Button } from "./ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            size='sm'
            className='font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
            variant='outline'
          ></Button>
        </SheetTrigger>
      </Sheet>
    );
  }

  return (
    <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
