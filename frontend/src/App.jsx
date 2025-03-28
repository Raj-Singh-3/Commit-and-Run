import React from "react";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/clerk-react";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import "./App.css"; 

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <div className="app-container">
        <div className="navbar-section">
          <div className="navbar-header">
            <h1>Dashboard</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <Navbar />
        </div>

        {/* Chatbot section - 65% width */}
        <div className="chatbot-section">
          <SignedIn>
            <Chatbot />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default App;
