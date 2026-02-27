import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModeTransaction() {
 const navigate = useNavigate();
 const [mode, setMode] = useState("");

 const handleSelect = (selectedMode) => {
  setMode(selectedMode);

  setTimeout(() => {
   if (selectedMode === "online") {
    navigate("/UPI-Payment");
   } else if (selectedMode === "card") {
    navigate("/Card-Transaction");
   }
  }, 300);
 };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
   <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-8">
    <h2 className="text-2xl font-bold">Select Payment Method</h2>

    <div className="space-y-4">
     {/* UPI Option */}
     <div
      onClick={() => handleSelect("online")}
      className={`cursor-pointer border rounded-xl p-5 transition-all duration-300 
            ${
             mode === "online"
              ? "border-yellow-500 bg-yellow-50 shadow-md"
              : "border-gray-300 hover:border-yellow-400 hover:shadow"
            }`}
     >
      <h3 className="font-semibold text-lg">UPI Payment</h3>
      <p className="text-sm text-gray-500">Pay using any UPI app</p>
     </div>

     {/* Card Option */}
     <div
      onClick={() => handleSelect("card")}
      className={`cursor-pointer border rounded-xl p-5 transition-all duration-300 
            ${
             mode === "card"
              ? "border-green-600 bg-green-50 shadow-md"
              : "border-gray-300 hover:border-green-500 hover:shadow"
            }`}
     >
      <h3 className="font-semibold text-lg">Debit / Credit Card</h3>
      <p className="text-sm text-gray-500">Secure card transaction</p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default ModeTransaction;
