import Link from "next/link";
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
        "w-full lg:w-auto justify-between font-normal font-normal hover:bg-white/80",
        isActive ? "" : ""
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
