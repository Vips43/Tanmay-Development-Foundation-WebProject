import React from "react";

function Header() {
 return (
  <header className="bg-bgClr border-t-[1.5rem] border-primary">
   <div className="max-h-50 max-w-300 ml-auto flex flex-col items-end justify-end px-5 py-4">
    <img
     src="/images/logo_ngo.png"
     alt="NGO Logo"
     className="h-20 md:h-30 cursor-pointer"
    />
   </div>
  </header>
 );
}

export default Header;
