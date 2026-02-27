import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const CardTransaction = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) return setError("Amount is required.");
    if (cardNumber.length !== 16)
      return setError("Card number must be 16 digits.");
    if (!name.trim()) return setError("Name is required.");
    if (!expiryMonth || !expiryYear)
      return setError("Expiry date is required.");
    if (cvv.length !== 3) return setError("CVV must be 3 digits.");

    setError("");

    const timestamp = format(new Date(), "dd MMMM yyyy 'at' HH:mm");

    const paymentData = {
      amount,
      cardNumber,
      name,
      expiryMonth,
      expiryYear,
      cvv,
      timestamp,
    };

    console.log(paymentData);

    navigate("/Pin-Number", {
      state: {
        amount,
        name,
        date: timestamp,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">

        <h2 className="text-2xl font-bold text-center">
          Card Payment
        </h2>

        {/* Card Logos */}
        <div className="flex justify-center gap-4">
          <img src="/images/visacard.png" className="h-8" />
          <img src="/images/mastercard.png" className="h-8" />
          <img src="/images/rupaycard.png" className="h-8" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter donation amount"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              maxLength={16}
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/\D/g, ""))
              }
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Cardholder name"
            />
          </div>

          {/* Expiry + CVV */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Expiry (MM/YY)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={2}
                  value={expiryMonth}
                  onChange={(e) =>
                    setExpiryMonth(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="MM"
                />
                <input
                  type="text"
                  maxLength={2}
                  value={expiryYear}
                  onChange={(e) =>
                    setExpiryYear(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="YY"
                />
              </div>
            </div>

            <div className="w-24">
              <label className="block text-sm font-medium mb-1">
                CVV
              </label>
              <input
                type="password"
                maxLength={3}
                value={cvv}
                onChange={(e) =>
                  setCvv(e.target.value.replace(/\D/g, ""))
                }
                className="w-full border rounded-lg px-3 py-2"
                placeholder="***"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg transition"
          >
            Continue Payment
          </button>

        </form>
      </div>
    </div>
  );
};

export default CardTransaction;