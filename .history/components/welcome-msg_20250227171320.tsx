"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user } = useUser();
  return <div className='text-lg font-bold'>Welcome, {user?.firstName}</div>;
};
