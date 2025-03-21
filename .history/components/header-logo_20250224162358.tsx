import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href='/'>
      <div className='items-center hidden lg:flex'>Logo</div>
    </Link>
  );
};
