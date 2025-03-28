// import React from 'react';
// import { 
//   NotebookText, 
//   Youtube, 
//   Settings, 
//   HelpCircle 
// } from 'lucide-react';

// const Navbar = () => {
//   const navItems = [
//     { 
//       icon: <NotebookText className="mr-2" />, 
//       text: 'Notes', 
//       onClick: () => console.log('Notes clicked') 
//     },
//     { 
//       icon: <Youtube className="mr-2" />, 
//       text: 'YouTube', 
//       onClick: () => console.log('YouTube clicked') 
//     },
//     { 
//       icon: <Settings className="mr-2" />, 
//       text: 'Settings', 
//       onClick: () => console.log('Settings clicked') 
//     },
//     { 
//       icon: <HelpCircle className="mr-2" />, 
//       text: 'Help', 
//       onClick: () => console.log('Help clicked') 
//     }
//   ];

//   return (
//     <nav className="flex-grow">
//       <ul className="p-4">
//         {navItems.map((item, index) => (
//           <li 
//             key={index} 
//             className="flex items-center p-3 hover:bg-gray-200 rounded-md cursor-pointer transition-colors"
//             onClick={item.onClick}
//           >
//             {item.icon}
//             <span className="text-gray-700">{item.text}</span>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







import React from 'react';
import './Navbar.css';
import { NotebookText, Youtube, Settings, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { 
      icon: <NotebookText className="nav-icon" />, 
      text: 'Notes', 
      onClick: () => console.log('Notes clicked') 
    },
    { 
      icon: <Youtube className="nav-icon" />, 
      text: 'YouTube', 
      onClick: () => console.log('YouTube clicked') 
    },
    { 
      icon: <Settings className="nav-icon" />, 
      text: 'Settings', 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      icon: <HelpCircle className="nav-icon" />, 
      text: 'Help', 
      onClick: () => console.log('Help clicked') 
    }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className="navbar-item"
            onClick={item.onClick}
          >
            {item.icon}
            <span className="navbar-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;