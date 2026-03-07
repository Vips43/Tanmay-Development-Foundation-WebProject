import { useMystore } from "../../store/myStore";
import { useNavigate } from "react-router-dom";

function DonationForm() {
  const navigate = useNavigate();

  const submitForm = useMystore((state) => state.submitForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    const result = await submitForm(formObj);

    if (result.success) {
      alert(`Thanks for your support ${formData.get("name")}!`);
      e.target.reset();
      // navigate(`/Mode-Transaction`)
    } else {
      alert(`Error: ${result.message}`);
    }
  };

  const InputField = ({ label, name, type = "text", required, disabled }) => {
    const pattern = type === "tel" ? "[0-9]{10}" : undefined;
    const placeholder = name === "mobile" ? "10 digits only" : undefined;
    return (
      <div className="relative">
        <input
          type={type}
          name={name}
          pattern={pattern}
          disabled={disabled}
          required={required}
          placeholder={label === "Mobile no" ? placeholder : "Enter " + label}
          className="peer w-full bg-transparent border-b border-gray-300 focus:border-yellow-500 outline-none py-1 placeholder:text-sm disabled:text-gray-500"
          // placeholder={label}
        />
        <label className="absolute left-0 -top-5 text-sm font-semibold text-gray-600 peer-focus:text-yellow-600 transition">
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
            <InputField label="Name" name="name" required />
          </div>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Email" type="email" name="email" required />
            <InputField label="Mobile no" type="tel" name="mobile" required />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Address" name="address" required />
            <InputField label="Country" name="country" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Pincode" name="pincode" required />
            <InputField label="City" name="city" />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="State" name="state" />
            <InputField label="Pan Number" name="pan_number" required />
          </div>

          {/* Declaration */}
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 w-4 h-4"
              required
            />
            <label
              htmlFor="terms"
              className="text-xs tracking-tight select-none"
            >
              I hereby declare that I am a citizen of India, making this
              donation out of my own funds. The information provided above is
              correct to the best of my knowledge. I know that further
              communications will be done on contact details provided above.
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
