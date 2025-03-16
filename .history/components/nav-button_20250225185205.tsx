import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  href: string;
  label: string;
  isActive: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      variant='outline'
      size={"sm"}
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20",
        isActive ? "" : ""
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
