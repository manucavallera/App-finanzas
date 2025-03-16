import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  href: string;
  label: string;
  isActive: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button asChild variant='outline' className='text-sm' className={}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
