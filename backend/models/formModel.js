import mongoose from "mongoose";
const { Schema } = mongoose;

const FormSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true }, 
  mobile: { type: String, required: true, trim: true },
  address: { type: String, required: true },
  country: { type: String, default: "India" }, // Set defaults
  pincode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pan_number: { type: String, required: true, uppercase: true, trim: true }, 
}, { timestamps: true });

const Form = mongoose.model("users", FormSchema)

export default Form;
