import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.vfs;

const PinNumber = () => {
 const [errorMessage, setErrorMessage] = useState("");
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [pin, setPin] = useState(["", "", "", ""]);
 const inputs = useRef([]);
 const [paymentSuccess, setPaymentSuccess] = useState(false);
 const [showVideo, setShowVideo] = useState(false);
 const videoRef = useRef(null);

 const handleChange = (e, index) => {
  const value = e.target.value.replace(/[^0-9]/g, "");
  if (!value) return;

  const newPin = [...pin];
  newPin[index] = value;
  setPin(newPin);

  if (newPin.join("").length === 4) {
   setTimeout(() => handlePayment(), 300);
  }
  if (value && index < inputs.current.length - 1) {
   inputs.current[index + 1].focus();
  }
  setErrorMessage("");
 };

 const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
   const newPin = [...pin];
   if (pin[index] === "") {
    if (index > 0) {
     inputs.current[index - 1].focus();
    }
   } else {
    newPin[index] = "";
    setPin(newPin);
   }
  }
 };

 const handlePayment = () => {
  const fullPin = pin.join("");
  if (fullPin.length === 4) {
   setErrorMessage("");
   setPaymentSuccess(true);
   setTimeout(() => {
    setShowVideo(true);
    if (videoRef.current) {
     videoRef.current.play().catch((error) => {
      console.log("Auto-play was prevented:", error);
     });
    }
   }, 2000);
  } else {
   setErrorMessage("PLEASE ENTER VALID 4-DIGIT PIN.");
   alert("PLEASE ENTER VALID 4-DIGIT PIN.");
  }
 };

 const location = useLocation();
 const { name, amount, date } = location.state || {};

 const formatCurrency = (val) => {
  if (!val || isNaN(val)) return "₹0.00";
  return new Intl.NumberFormat("en-IN", {
   style: "currency",
   currency: "INR",
   minimumFractionDigits: 2,
  }).format(parseFloat(val));
 };

 const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
   const reader = new FileReader();
   reader.onerror = () => reject("FAILED TO CONVERT IMAGE");
   reader.onload = () => resolve(reader.result);
   reader.readAsDataURL(blob);
  });
 };

 const generateCertificate = async () => {
  let imageData = "";
  try {
   const response = await fetch("images/Logo.png");
   if (response.ok) {
    const blob = await response.blob();
    imageData = await convertBlobToBase64(blob);
   }
  } catch (error) {
   console.error("ERROR LOADING IMAGE:", error);
  }

  const docDefinition = {
   content: [
    imageData
     ? {
        image: imageData,
        width: 100,
        alignment: "center",
        margin: [0, 10, 0, 10],
       }
     : {},
    {
     text: "Tanmay Development Foundation",
     style: "header",
     alignment: "center",
    },
    {
     text: "Empowering Lives, Transforming Futures",
     style: "subheader",
     alignment: "center",
     margin: [0, 5, 0, 10],
    },
    {
     text: "Certificate of Appreciation",
     style: "title",
     alignment: "center",
     margin: [0, 10, 0, 10],
    },
    {
     text: `Dear ${name || "Recipient"}`,
     style: "text",
     margin: [0, 5, 0, 5],
    },
    {
     text: [
      {
       text:
        "We are delighted to express our heartfelt gratitude for your generous donation of ",
       style: "text",
      },
      {
       text: formatCurrency(amount),
       style: "amount",
      },
      {
       text:
        ". Your benevolent support empowers women, nurtures children, and uplifts our agricultural communities. Your kindness transforms lives and inspires us to continue our mission with renewed passion.",
       style: "text",
      },
     ],
     margin: [0, 5, 0, 10],
    },
    {
     text: "Thank You for Your Unwavering Support!",
     style: "boldText",
     margin: [0, 5, 0, 10],
    },
    {
     text:
      "May your generosity ignite a cascade of transformation and prosperity. Together, we are weaving a tapestry of hope, compassion, and progress.",
     style: "text",
     margin: [0, 5, 0, 10],
    },
    {
     text: "With sincere appreciation,",
     style: "text",
     margin: [0, 5, 0, 5],
    },
    {
     text: "Tanmay Development Foundation",
     style: "boldText",
     margin: [0, 5, 0, 5],
    },
    {
     text: "Where Every Act of Kindness Shapes a Better Tomorrow",
     style: "italicText",
     margin: [0, 5, 0, 10],
    },
    {
     text: `Date: ${date || "N/A"}`,
     style: "text",
     margin: [0, 5, 0, 5],
    },
    {
     text: [
      { text: "Amount: ", style: "text" },
      { text: formatCurrency(amount), style: "amount", TextDecoder: "bold" },
     ],
     margin: [0, 5, 0, 5],
    },
    {
     text: `Email: tanmayfoundation17@gmail.com`,
     style: "text",
     margin: [0, 5, 0, 5],
    },
    {
     text: `Contact: 8858753668`,
     style: "text",
     margin: [0, 5, 0, 20],
    },
   ],
   styles: {
    header: { fontSize: 18, bold: true },
    subheader: { fontSize: 12, italics: true },
    title: { fontSize: 16, bold: true },
    text: { fontSize: 12 },
    amount: { fontSize: 12, bold: true },
    boldText: { fontSize: 12, bold: true },
    italicText: { fontSize: 12, italics: true },
   },
  };

  try {
   pdfMake
    .createPdf(docDefinition)
    .download(`Certificate_${name || "Certificate"}.pdf`);
  } catch (error) {
   console.error("ERROR GENERATING PDF:", error);
  }
 };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
   {!paymentSuccess ? (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6">
     <h2 className="text-xl font-semibold">Enter 4-digit PIN</h2>

     <div className="flex justify-center gap-4">
      {pin.map((num, i) => (
       <input
        key={i}
        type="password"
        inputMode="numeric"
        maxLength={1}
        className="w-12 h-12 text-center border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none text-lg"
        value={pin[i]}
        ref={(el) => (inputs.current[i] = el)}
        onChange={(e) => handleChange(e, i)}
        onKeyDown={(e) => handleKeyDown(e, i)}
       />
      ))}
     </div>

     {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

     <button
      onClick={handlePayment}
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg transition"
     >
      Pay Now
     </button>
    </div>
   ) : !showVideo ? (
    <div className="text-center space-y-6">
     <h2 className="text-lg font-semibold">Processing your payment...</h2>
     <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
    </div>
   ) : (
    <div className="relative text-center space-y-6">
     <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      onEnded={() => setShowSuccessMessage(true)}
      className={`w-full max-w-md rounded-xl shadow-lg ${showSuccessMessage ? "hidden" : ""}`}
     >
      <source src="/images/payment-successful-message.mp4" type="video/mp4" />
     </video>

     {showSuccessMessage && (
      <div className="animate-fadeIn space-y-4">
       <h2 className="text-2xl font-semibold text-green-600">
        Payment Successful 🎉
       </h2>

       <button
        onClick={generateCertificate}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg transition"
       >
        Generate Certificate
       </button>
      </div>
     )}
    </div>
   )}
  </div>
 );
};

export default PinNumber;
