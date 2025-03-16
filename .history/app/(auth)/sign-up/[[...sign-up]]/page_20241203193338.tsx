import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='min-h-screen grid lg:grid-cols-1'>
      <SignUp path='/sign-up' />
    </div>
  );
}
