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
          <Button variant='outline'>size='icon'</Button>
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
