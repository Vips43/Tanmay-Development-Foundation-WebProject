import express from "express";
import Form from "../models/formModel.js";
import { validateForm } from "../utils/validation.js";

const formRoute = express.Router();

formRoute.post("/form-submit", async (req, res) => {
  const { formData } = req.body;

  try {
    if (!formData)
      return res.status(400).json({ error: "no formData provided" });
    const { error } = validateForm(formData);
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const newForm = new Form({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      country: formData.country,
      pincode: formData.pincode,
      city: formData.city,
      state: formData.state,
      pan_number: formData.pan_number,
    });
    await newForm.save();

    console.log("Saved form for:", formData.name);
    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error("Server Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

formRoute.get("/donors", async (req, res) => {
  try {
    const donors = await Form.find({})
      .select("name city state updatedAt")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json(donors);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

export default formRoute;
