import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
 const [errorMessage, setErrorMessage] = useState("");
 const [amount, setAmount] = useState("");
 const [upiId, setUpiId] = useState("");

 const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrorMessage("");

  if (!amount || !upiId) {
   setErrorMessage("Please fill in both Amount and UPI ID.");
   return;
  }

  navigate("/Pin-Number");
 };

 return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
   {/* Title */}
   <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
    UPI Transactions
   </h2>

   {/* Payment Card */}
   <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
    {/* QR Section */}
    <div className="flex justify-center">
     <img
      src="/images/scanner.png"
      alt="QR Scanner"
      className="w-40 h-40 object-contain"
     />
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">
     {/* Amount */}
     <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">Amount</label>
      <input
       type="number"
       min="1"
       placeholder="Enter Donation Amount"
       value={amount}
       onChange={(e) => setAmount(e.target.value)}
       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
     </div>

     {/* UPI ID */}
     <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">UPI ID</label>
      <input
       type="text"
       placeholder="example@upi"
       value={upiId}
       onChange={(e) => setUpiId(e.target.value)}
       className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
     </div>

     {/* Error Message */}
     {errorMessage && (
      <p className="text-red-500 text-sm text-center">{errorMessage}</p>
     )}

     {/* Button */}
     <button
      type="submit"
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-lg transition duration-300"
     >
      Continue Payment
     </button>
    </form>
   </div>
  </div>
 );
}

export default Payment;
