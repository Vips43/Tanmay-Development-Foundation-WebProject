import React, { useState } from "react";

function DonationForm() {
 const [form, setForm] = useState({});
 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData.entries());
  setForm(formObj);
  alert(`form has been filled ${formData.get("Name")}`)
  console.log(formData,formObj)
 };

 const InputField = ({ label, required, disabled }) => {
  return (
   <div className="relative">
    <input
     type="text"
     name={label}
     disabled={disabled}
     required={required}
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
  <section className="border-4 border-[#FDD831] bg-white rounded-2xl shadow-lg p-6 w-full">
   <div className="w-full max-w-3xl">
    <h2 className="text-lg font-semibold mb-8">Fill the Form</h2>

    <form className="space-y-8" onSubmit={handleSubmit}>
     {/* Row 0 */}
     <div className="grid grid-cols-1 gap-8">
      <InputField label="Name" required />
     </div>
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
     <InputField label="Pan Number" required />

     {/* Declaration */}
     <div className="flex items-start gap-3 text-sm text-gray-600">
      <input id="terms" type="checkbox" className="mt-1 w-4 h-4" required />
      <label htmlFor="terms" className="text-xs tracking-tight select-none">
       I hereby declare that I am a citizen of India, making this donation out
       of my own funds. The information provided above is correct to the best of
       my knowledge. I know that further communications will be done on contact
       details provided above.
      </label>
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
 );
}

export default DonationForm;
