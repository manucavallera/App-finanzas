import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      <div className='h-full lg:flex flex-col items-center justify-center px-4'>
        <div className='text-center space-y-4 pt-16'>
          <h1 className='font-bold text-3xl text-[#2E2A47]'>
            Bienvenido de nuevo!
          </h1>
          <p className='text-base text-[#7EBCA0]'>
            Log in o create una cuenta para volver al dashboard
          </p>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <ClerkLoaded>
            <SignIn path='/sign-in' />;
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin' />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
