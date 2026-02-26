import React from "react";

function Header({ donate }) {
 return (
  <header className="bg-bgClr border-t-[1.5rem] border-primary">
   <div className="max-h-50 max-w-300 ml-auto flex flex-col items-end justify-end px-5 py-4">
    <img
     src="/images/logo_ngo.png"
     alt="NGO Logo"
     className="h-20 md:h-30 cursor-pointer"
    />

    {donate && (
     <button
      className="
              m-0 mt-2 w-32 h-8 px-6 py-2 border-none rounded-full
              bg-[url('/src/assets/donate_btn/donate_Btn.png')] bg-no-repeat bg-center bg-cover
              transition-all duration-200 ease-in-out
              hover:-translate-y-0.5 hover:shadow-[2px_2px_10px_rgba(0,0,0,0.35)]
            "
     ></button>
    )}
   </div>
  </header>
 );
}

export default Header;
