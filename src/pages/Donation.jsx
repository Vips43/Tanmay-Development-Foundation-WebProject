import { useState } from "react";
// import "../styles/home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaLock } from "react-icons/fa";

function Donation() {
 const [donationType, setDonationType] = useState("once");
 const [customAmount, setCustomAmount] = useState("");

 const [amountSelected, setAmountSelected] = useState(false);

 const handleDonationTypeChange = (type) => {
  setDonationType(type);
  setAmountSelected(false);
 };

 const handleCustomAmountChange = (event) => {
  setCustomAmount(event.target.value);
  setAmountSelected(!!event.target.value);
 };

 const handleAmountButtonClick = (amount) => {
  setCustomAmount(amount);
  setAmountSelected(true);
 };

 const handleDonateNow = () => {
  if (!formData.name || !formData.email) {
   alert("PLEASE FILL THE PERSONAL DETAILS FIRST");
   return;
  }

  const amount = customAmount || (donationType === "once" ? "3000" : "250");
  setFormData((prev) => ({
   ...prev,
   amount: amount,
   donationType: donationType,
  }));
  navigate("/Pin-Number");
 };

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
  address: "",
  country: "",
  pincode: "",
  city: "",
  state: "",
  pan: "",
  amount: customAmount,
  donationType: donationType,
  citizenship: "Indian",
 });

 const navigate = useNavigate();

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email) {
   alert("PLEASE FILL ALL REQUIRED PERSONAL DETAILS");
   return;
  }

  const certificateData = {
   ...formData,
   name: formData.name,
   amount: customAmount || formData.amount,
   date: new Date().toLocaleDateString("en-IN"),
   donationType: donationType,
  };

  navigate("/Pin-Number", { state: certificateData });
 };

 const InputField = ({ label, required, disabled }) => {
  return (
   <div className="relative">
    <input
     type="text"
     disabled={disabled}
     className="peer w-full bg-transparent border-b border-gray-300 focus:border-yellow-500 outline-none py-1 placeholder-transparent disabled:text-gray-500"
     placeholder={label}
    />
    <label className="absolute left-0 -top-5 text-sm text-gray-600 peer-focus:text-yellow-600 transition">
     {label}
     {required && <span className="text-red-500">*</span>}
    </label>
   </div>
  );
 };

 return (
  <div className="bg-[#ece5f0] font-montserrat">
   <Header />
   <Navbar />

   <div className="w-full shadow-[11px_13px_5px_0px_#00000040]">
    <img src="/images/home-hero-img.png" alt="" />
   </div>
   <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
     {/* left side  */}
     <div className="space-y-16">
      <section className="space-y-6">
       <div>
        <h1 className="font-semibold text-2xl text-center lg:text-left mb-3">
         {" "}
         what <span className="text-primary-light">we do</span>{" "}
        </h1>
        <p className="text-gray-700 leading-relaxed">
         Thankyou for being part of our journey and for helping children in need
         . together we can Works closely with institutions, corporate entities,
         government, local communities and individuals to provide timely
         interventions in water conservation, environment protection, rural
         development, sustainable agriculture, sanitation and waste management,
         women empowerment, education and skill development. .Tanmay Development
         Foundation is a grassroots organization that aims to bring qualitative
         improvement and change in the lives of vulnerable people. The strength
         of Tanmay Development Foundation is its strong community connect and
         its commitment to the betterment of the underprivileged society.
        </p>
       </div>

       <div>
        <h1 className="text-2xl font-semibold my-3">
         How your
         <span className="text-primary-light"> donation will help??</span>
        </h1>
        <p className="text-gray-700 leading-relaxed">
         Your Donations provide crucial financial resources that can be used for
         various purposes such as funding programs, maintaining operations, and
         investing in infrastructure and education Overall, Each and Every
         donations play a critical role in enabling organizations to achieve
         their mission, serve their communities, and make a positive difference
         in the world. Our Focus area-
        </p>
       </div>
      </section>

      <section className="grid grid-cols-1 gap-6 justify-items-center">
       <img
        src="/images/donation/education.png"
        className="h-40 object-contain"
       />
       <img
        src="/images/donation/agriculture.png"
        className="h-40 object-contain"
       />
       <img
        src="/images/donation/women-emp.png"
        className="h-40 object-contain"
       />
      </section>
     </div>
     {/* right side  */}
     <div className="space-y-8 w-full">
      {/* Donate and Save Tax */}
      <section className="border-4 border-[#F2B807] bg-white rounded-2xl shadow-lg p-6 w-full">
       <div className="space-y-8">
        {/* Header */}
        <header>
         <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Donate and Save Tax
         </h3>
        </header>

        {/* Citizenship */}
        <div className="space-y-3">
         <p className="text-sm font-medium text-[#FF4420]">Citizenship*</p>

         <div className="flex items-center gap-2 font-semibold text-gray-700">
          <GoDotFill className="text-[#4664FF] text-lg" />
          <p>Indian Citizen</p>
         </div>

         <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="bg-primary text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition">
           Give Once
          </button>
          <button className="border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
           Give Monthly
          </button>
         </div>
        </div>

        {/* Yearly Donation */}
        <div className="space-y-3">
         <div className="flex items-center gap-2 font-semibold text-gray-700">
          <FaLock className="text-primary-light" />
          <p>Donation for one child in a year</p>
         </div>

         <div className="grid grid-cols-2 gap-4">
          <button className="bg-primary text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition">
           Give Once
          </button>
          <button className="border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
           Give Monthly
          </button>
         </div>
        </div>

        {/* Monthly Donation */}
        <div className="space-y-3">
         <div className="flex items-center gap-2 font-semibold text-gray-700">
          <FaLock className="text-primary-light" />
          <p>Donation for one child in a month</p>
         </div>

         <div className="grid grid-cols-2 gap-4">
          <button className="bg-primary text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition">
           Give Once
          </button>
          <button className="border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
           Give Monthly
          </button>
         </div>
        </div>

        {/* Other Amount */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary-light transition">
         <input
          type="number"
          placeholder="₹ Other Amount"
          className="flex-1 px-4 py-2 outline-none"
         />
         <button className="bg-gray-100 px-4 py-2 font-medium hover:bg-gray-200 transition">
          Donate
         </button>
        </div>
       </div>
      </section>

      {/* donations form  */}
      <section className="border-4 border-[#FDD831] bg-white rounded-2xl shadow-lg p-6 w-full">
       <div className="w-full max-w-3xl">
        <h2 className="text-lg font-semibold mb-8">Enter your name</h2>

        <form className="space-y-8">
         {/* Row 1 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Email" required />
          <InputField label="Mobile no" required />
         </div>

         {/* Row 2 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Address" required />
          <InputField label="Country" />
         </div>

         {/* Row 3 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Pincode" required />
          <InputField label="City" />
         </div>

         {/* Row 4 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="State" />
          <InputField label="India" disabled />
         </div>

         {/* PAN */}
         <InputField label="Pan Number" />

         {/* Declaration */}
         <div className="flex items-start gap-3 text-sm text-gray-600">
          <input type="checkbox" className="mt-1 w-4 h-4" />
          <p className="text-xs tracking-tight">
           I hereby declare that I am a citizen of India, making this donation
           out of my own funds. The information provided above is correct to the
           best of my knowledge. I know that further communications will be done
           on contact details provided above.
          </p>
         </div>

         {/* Payment Info */}
         <div className="">
          <img src="/images/payments/payment-method.png" alt="" />
         </div>

         {/* Button */}
         <div className="flex justify-center">
          <button
           type="submit"
           className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2.5 rounded-full font-medium transition"
          >
           Continue To Payment
          </button>
         </div>
        </form>
       </div>
      </section>
     </div>
    </div>
   </main>

   {/* Account Details */}
   <section className="my-10">
    <h1 className="text-2xl font-semibold text-center my-5">
     <span className="text-primary">Our </span> Account Details
    </h1>
    <div className="flex justify-around bg-[#F2B80780] p-5">
     <div className="flex flex-col whitespace-nowrap items-center justify-around">
      <p>
       <strong>Name - </strong>Tanmay Development Foundation
      </p>
      <p>
       <strong>Account no - </strong> 7810672868
      </p>
      <p>
       <strong>IFSC code - </strong> IDIB000M730
      </p>
      <p>
       <strong>CIF No - </strong> 30651090343
      </p>
     </div>
     <div className="flex flex-col items-center">
      <img
       src="images/donation/scanner.jpg"
       alt="QR scanner"
       className="w-36"
      />
      <div className="scanner-message">
       <img
        src="images/donation/scanner-message.png"
        alt="scanner message"
        className="h-10"
       />
      </div>
     </div>
    </div>
   </section>

   <section className="my-10 space-y-5">
    <h1 className="text-2xl font-semibold text-center">
     Our impact
     <span className="text-primary"> on society</span>
    </h1>
    <div className="bg-linear-to-b from-[#ece5f0] from-50% to-primary-light to-50%">
     <img src="images/donation/impact.png" alt="" />
    </div>
   </section>

   <div className="space-y-5 px-5 md:px-10 text-center">
    <h1 className="text-base font-semibold">
     Every donation is incredibly valuable to us because it directly supports
     our mission and the people we aim to help. Here's why each donation matters
     :
    </h1>
    <p>
     <strong>Impact:</strong> Even a small donation can make a significant
     difference in someone's life. It could provide a meal, shelter, education
     materials, or medical care to those in need.
    </p>
    <p>
     <strong>Sustainability:</strong> Regular donations help us plan and sustain
     our programs over the long term. They provide stability and enable us to
     implement lasting solutions to challenges.
    </p>
    <p>
     <strong>Supporting our Cause:</strong> Your donation is not just financial
     support; it's a vote of confidence in our mission. It motivates us and
     shows that our work is valued and supported by our community.
    </p>
    <p>
     <strong>Making a Difference:</strong> Every donor plays a crucial role in
     our efforts to create positive change. Your generosity inspires others to
     join us in making the world a better place.
    </p>
    <p className="text-center">
     <strong>
      Thank you for considering donating to our cause. Your support truly makes
      a difference!
     </strong>
    </p>
   </div>
   <div className="my-10">
    <img src="images/donation/wave-design.png" alt="bottom wave" />
   </div>
   <div className="donation-tax-act">
    <img
     src="images/donation-tax-act.png"
     alt="donation tax act"
     className=""
    />
   </div>

   <Footer />
  </div>
 );
}

export default Donation;
