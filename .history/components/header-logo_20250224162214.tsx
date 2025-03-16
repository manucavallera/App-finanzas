import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='Logo' width={100} height={100} />
    </Link>
  );
};
