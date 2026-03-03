import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";

function Navbar() {
 const [openDropdown, setOpenDropdown] = useState(null);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
 const dropdownRef = useRef(null);

 useEffect(() => {
  const handleClickOutside = (event) => {
   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
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
  <nav className="w-full shadow-md relative z-50">
   <div className="bg-white md:hidden">
    <img src="/images/NGO_logo/logo_text_ngo.png" alt="" className="h-20 mx-auto" />
   </div>
   <header className="bg-primary md:bg-white flex items-center justify-between md:justify-end px-5 py-2 md:py-4">
    <picture>
     <source media="(min-width: 768px)" srcSet="/images/NGO_logo/logo_ngo.png" />
     <img
      src="/images/NGO_logo/ngoo.png"
      alt="NGO Logo"
      className="h-12 md:h-20 object-contain cursor-pointer"
     />
    </picture>
    <button
     className="md:hidden text-3xl text-white transition-all duration-300 cursor-pointer"
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
     {isMobileMenuOpen ? <CiMenuFries /> : <CiMenuBurger />}
    </button>
   </header>

   <div className={`bg-green-700 transition-all ${isMobileMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"} md:block border-t border-green-600`}>
    <ul
     ref={dropdownRef}
     className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center text-white"
    >
     {navLis.map((li, index) => {
      const hasChildren = li.child;

      return (
       <li
        key={index}
        className="group relative w-full md:w-auto text-center border-b border-green-600/30 md:border-none"
       >
        {hasChildren ? (
         <>
          <button
           onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
           className="flex items-center justify-center w-full md:w-auto px-6 py-4 font-medium hover:bg-green-600 transition-colors"
          >
           {li.label}
           <svg
            className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""
             } md:group-hover:rotate-180`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
           >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
           </svg>
          </button>

          <ul
           className={`overflow-hidden transition-all duration-300 ease-in-out z-50 bg-green-800 md:bg-white md:text-gray-800 md:shadow-xl md:absolute md:left-0 md:top-full md:min-w-60
                      ${openDropdown === index ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"} 
                      md:max-h-fit md:group-hover:opacity-100 md:group-hover:visible`}
          >
           {li.child.map((child, i) => (
            <li key={i}>
             <Link
              to={child.path}
              onClick={() => {
               setOpenDropdown(null);
               setIsMobileMenuOpen(false);
              }}
              className="block px-6 py-3 text-sm hover:bg-green-600 md:hover:bg-green-50 md:hover:text-green-700 transition-colors border-b border-green-700/50 md:border-gray-100 last:border-none"
             >
              {child.label}
             </Link>
            </li>
           ))}
          </ul>
         </>
        ) : (
         <NavLink
          to={li.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) =>
           `block px-6 py-4 font-medium transition-colors ${isActive ? "bg-green-900 md:bg-green-800" : "hover:bg-green-600"
           }`
          }
         >
          {li.label}
         </NavLink>
        )}
       </li>
      );
     })}
    </ul>
   </div>
  </nav>
 );
}

export default Navbar;
