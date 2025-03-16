import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Dashboard page </h1>
      <UserButton />
    </div>
  );
}
