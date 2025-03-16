"use client";

import { usePathname } from "next/navigation";

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
  return (
    <nav className='hidden lg:items-center gap-x-2 overflow-x-auto'>
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={usePathname() === route.href}
        />
      ))}
    </nav>
  );
};
