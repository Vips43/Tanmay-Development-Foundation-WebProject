import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "../styles/CardTransaction.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CardTransaction = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setname] = useState("");
  const [date2, setdate2] = useState("");
  const [currenttime,setcurrenttime] = useState("");
  
  const [notifyname, setnotifyname] = useState(false);
  const [security, setsecurity] = useState("");
  const [notifysecurity, setnotifysecurity] = useState(false);

  const [date1, setdate1] = useState("");
  const [notifydate1, setnotifydate1] = useState(false);
  const navigate = useNavigate();

  const handleAmountNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 16) {
      setCardNumber(value);
    }
    if (value.length === 16) {
      setErrorMessage("");
    } else {
      setErrorMessage("CARD NUMBER MUST BE 16 DIGITS.");
    }
  };

  const handlenamechange = (e) => setname(e.target.value);
  const handlesecuritychange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 3) {
      setsecurity(value);
    }
  };
  const handledate1change = (e) => setdate1(e.target.value);
  const handledate2change = (e) => setdate2(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16) {
      setErrorMessage("CARD NUMBER MUST BE 16 DIGITS*");
    } else if (name.trim() === "") {
      setnotifyname(true);
    } else if (!date1) {
      setnotifydate1(true);
    } else if (security.length !== 3) {
      setnotifysecurity(true);
    } else {
      setErrorMessage("");
      const currentday = format(new Date(), "dd");
      const currentmonth = format(new Date(), "MMMM");
      const currentyear = format(new Date(), "yyyy");
      const currenthour = format(new Date(), "HH");
      const currentminute = format(new Date(), "mm");

      const timeconcate = `${currentday} ${currentmonth} ${currentyear} at ${currenthour}:${currentminute} PM`;
      setcurrenttime(timeconcate);

      const item = {
        amount,
        cardNumber,
        name,
        date1,
        date2,
        security,
        currenttime: timeconcate,
      };
      console.log(item);
      navigate("/Pin-Number");
    }
  };

  return (
    <>
      <Header />
      <div className="title-container">
        <h2 className="title">CARD TRANSACTIONS</h2>
      </div>

      <div className="container">
        <div className="payment-box">
          <h3 className="subtitle">Payment Details</h3>

          <div className="payment-icons">
            <img src="images/visacard.png" alt="visa-card" className="icon" />
            <img
              src="images/mastercard.png"
              alt="master-card"
              className="icon"
            />
            <img src="images/paypal.jpg" alt="paypal-card" className="icon" />
            <img src="images/rupaycard.png" alt="rupay-card" className="icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                placeholder="PLEASE ENTER DONATION AMOUNT"
                className="input-field"
                value={amount}
                onChange={handleAmountNumberChange}
              />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="PLEASE ENTER CARD NUMBER"
                className="input-field"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
            </div>

            <div className="form-group">
              <label>Name on the Card</label>
              <input
                type="text"
                placeholder="PLEASE ENTERED YOUR NAME"
                className="input-field"
                value={name}
                onChange={handlenamechange}
              />
              {notifyname && (
                <span className="error-message">Name is required*</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Expiry Date</label>
                <div className="expiry-fields">
                  <input
                    type="text"
                    placeholder="MM"
                    className="input-field small"
                    value={date1}
                    onChange={handledate1change}
                    maxLength={2}
                  />
                  <span className="separator">/</span>
                  <input
                    type="text"
                    placeholder="YYYY"
                    className="input-field small"
                    value={date2}
                    onChange={handledate2change}
                    maxLength={4}
                  />
                </div>
                {notifydate1 && (
                  <span className="error-message">
                    Expiry date is required*
                  </span>
                )}
              </div>

              <div className="form-group-half">
                <label>Security Code</label>
                <input
                  type="password"
                  placeholder="***"
                  className="input-field"
                  value={security}
                  onChange={handlesecuritychange}
                />
                {notifysecurity && (
                  <span className="error-message">
                    Security code must be 3 digits*
                  </span>
                )}
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Continue Payment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardTransaction;
