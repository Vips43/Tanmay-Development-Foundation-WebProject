import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
 const [openDropdown, setOpenDropdown] = useState(null);
 const dropdownRef = useRef(null);

 // UX Polish: Automatically closes the dropdown if the user clicks anywhere else on the page
 useEffect(() => {
  const handleClickOutside = (event) => {
   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setOpenDropdown(null);
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 const navLis = [
  { label: "Home", path: "/" },
  {
   label: "Function Areas",
   child: [
    { label: "Education", path: "/Education" },
    { label: "Women Empowerment", path: "/Women-Empowerment" },
    { label: "Environment", path: "/Environment" },
    { label: "Agriculture", path: "/Agriculture" },
   ],
  },
  { label: "Gallery", path: "/Gallery" },
  { label: "Media", path: "/About-Us" },
  { label: "Donation", path: "/Donation" },
 ];

 return (
  <nav className="w-full bg-green-700 shadow-md relative z-50">
   <ul
    ref={dropdownRef}
    className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center text-white"
   >
    {navLis.map((li, index) => {
     const hasChildren = li.child;

     return (
      <li
       key={index}
       /* 'group' allows Tailwind to detect hovering on the parent element */
       className="group relative w-full md:w-auto text-center border-b border-green-600/50 md:border-none"
      >
       {hasChildren ? (
        <button
         onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
         className="flex items-center justify-center w-full md:w-auto px-6 py-4 font-medium tracking-wide hover:bg-green-600 md:group-hover:bg-green-600 transition-colors focus:outline-none"
        >
         {li.label}
         {/* Chevron Icon that rotates when open */}
         <svg
          className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
           openDropdown === index ? "rotate-180" : ""
          } md:group-hover:rotate-180`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M19 9l-7 7-7-7"
          />
         </svg>
        </button>
       ) : (
        <Link
         to={li.path}
         onClick={() => setOpenDropdown(null)}
         className="block px-6 py-4 font-medium tracking-wide hover:bg-green-600 transition-colors"
        >
         {li.label}
        </Link>
       )}

       {/* Dropdown Menu */}
       {hasChildren && (
        <ul
         className={`
                    overflow-hidden transition-all duration-300 ease-in-out z-50
                    bg-green-800 md:bg-white md:text-gray-800 md:shadow-xl md:rounded-b-lg md:absolute md:left-0 md:top-full md:min-w-[240px]
                    /* Mobile visibility logic */
                    ${openDropdown === index ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"}
                    /* Desktop visibility logic (Hover instantly opens it on PC) */
                    md:max-h-fit md:group-hover:opacity-100 md:group-hover:visible
                  `}
        >
         {li.child.map((child, i) => (
          <li key={i}>
           <Link
            to={child.path}
            onClick={() => setOpenDropdown(null)}
            className="block px-6 py-3 text-sm text-center md:text-left hover:bg-green-600 md:hover:bg-green-50 md:hover:text-green-700 transition-colors border-b border-green-700/50 md:border-gray-100 last:border-none"
           >
            {child.label}
           </Link>
          </li>
         ))}
        </ul>
       )}
      </li>
     );
    })}
   </ul>
  </nav>
 );
}

export default Navbar;
