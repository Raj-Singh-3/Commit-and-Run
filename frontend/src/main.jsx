// import React from 'react'
// import App from './App'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// function ClerkProviderWithRoutes() {
//   const navigate = useNavigate();

//   return (
//     <ClerkProvider 
//       publishableKey={PUBLISHABLE_KEY} 
//       navigate={(to) => navigate(to)}
//       afterSignInUrl="/project"
//       afterSignUpUrl="/project"
//       afterSignOutUrl="/"
//     >
//       <Routes>
//         <Route path="/" element={
//           <>
//             <SignedIn>
//               <App />
//             </SignedIn>
//             <SignedOut>
//               <RedirectToSignIn />
//             </SignedOut>
//           </>
//         } />
//         <Route path="/project" element={
//           <SignedIn>
//             <App />
//           </SignedIn>
//         } />
//       </Routes>
//     </ClerkProvider>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ClerkProviderWithRoutes />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
