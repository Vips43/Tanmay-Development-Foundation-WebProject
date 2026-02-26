import React, { useState } from "react";
import "../styles/payment.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Payment() {
  const [errorMessage, setErrorMessage] = useState("");
  const [amount, setAmount] = useState("");

  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!amount || !upiId) {
      setErrorMessage("PLEASE FILL IN BOTH AMOUNT ANS UPI ID.");
      return;
    }

    const item = {
      amount,
      upiId,
    };

    console.log(item);
    navigate("/Pin-Number");
   
  }
  return (
    <>
      <Header />
      <div className="title-container">
        <h2 className="title">UPI TRANSACTIONS</h2>
      </div>
      <div className="container">
        <div className="payment-box">
          <form onSubmit={handleSubmit}>
            <div className="QR-container">
              <div className="QR-section">
                <img
                  src="./images/scanner.png"
                  alt="QR-scanner"
                  className="qr-scanner"
                ></img>
              </div>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                placeholder="PLEASE ENTER DONATION AMOUNT"
                className="input-field"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>

            <div className="form-group">
              <label>UPI ID</label>
              <input
                type="text"
                placeholder="PLEASE ENTER UPI ID "
                className="input-field"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Continue payment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
