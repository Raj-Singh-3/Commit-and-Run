import { UserButton } from "@clerk/clerk-react";

export default function Project() {
  return (
    <div>
      <header>
        <UserButton />
      </header>
      {/* Your project content here */}
      <h1>Welcome to your project!</h1>
    </div>
  );
}