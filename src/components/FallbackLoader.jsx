import React from "react";

function FallbackLoader() {
 return (
  <>
   <div className="flex justify-center items-center h-screen">
    <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
   </div>
  </>
 );
}

export default FallbackLoader;
