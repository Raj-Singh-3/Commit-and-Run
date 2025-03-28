// import React from 'react';
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
// import Chatbot from './components/Chatbot';

// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const App = () => {
//   return (
//     <ClerkProvider publishableKey={clerkPublishableKey}>
//       <SignedIn>
//         <Chatbot />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </ClerkProvider>
//   );
// };

// export default App;



// import React from 'react';
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
// import Dashboard from './components/Dashboard';

// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const App = () => {
//   return (
//     <ClerkProvider publishableKey={clerkPublishableKey}>
//       <SignedIn>
//         <Dashboard />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </ClerkProvider>
//   );
// };

// export default App;




// import React from 'react';
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react';
// import Chatbot from './components/Chatbot';
// import Navbar from './components/Navbar';

// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const App = () => {
//   return (
//     <div className="App">
//     <ClerkProvider publishableKey={clerkPublishableKey}>
//       <div className="flex h-screen">
//         {/* Sidebar/Navbar section - 30% width */}
//         <div className="w-1/3 bg-gray-100 border-r border-gray-200 flex flex-col">
//           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//             <h1 className="text-xl font-bold">Dashboard</h1>
//             <UserButton afterSignOutUrl="/" />
//           </div>
//           <Navbar />
//         </div>
        
//         {/* Main Content - 70% width */}
//         <div className="w-2/3">
//           <SignedIn>
//             <Chatbot />
//           </SignedIn>
//           <SignedOut>
//             <RedirectToSignIn />
//           </SignedOut>
//         </div>
//       </div>
//     </ClerkProvider>
//     </div>
//   );
// };

// export default App;










import React from "react";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/clerk-react";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import "./App.css"; // Import the CSS file

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <div className="app-container">
        {/* Sidebar/Navbar section - 30% width */}
        <div className="navbar-section">
          <div className="navbar-header">
            <h1>Dashboard</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <Navbar />
        </div>

        {/* Chatbot section - 70% width */}
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
