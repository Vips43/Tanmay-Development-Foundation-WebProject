import Joi from "joi";

export const validateForm = (data) => {
  const schema = Joi.object({
    // Simple strings (no custom messages needed usually)
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().allow("").optional(),

    // Mobile: Define rules FIRST, then messages
    mobile: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        "string.length": "Mobile number must be 10 digits",
        "string.pattern.base": "Mobile number must contain digits only",
      }),

    // Pincode
    pincode: Joi.string()
      .length(6)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        "string.length": "Pincode must be 6 digits",
        "string.pattern.base": "Pincode must contain digits only",
      }),

    // PAN Number (Matching your frontend key "pan_number")
    pan_number: Joi.string()
      .pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
      .required()
      .messages({
        "string.pattern.base": "Invalid PAN Card format (e.g. ABCDE1234F)",
      }),
  });

  return schema.validate(data);
};
