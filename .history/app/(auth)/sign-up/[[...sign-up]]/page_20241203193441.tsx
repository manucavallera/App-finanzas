import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='min-h-screen grid lg:grid-cols-1'>
      <div className='h-full lg:flex-col items-center justify-center px-4'>
        <SignUp path='/sign-up' />
      </div>
    </div>
  );
}
