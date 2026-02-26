import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/ModeTransaction.css";

function ModeTransaction() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");
  
  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);

   
    if (selectedMode === "online") {
      navigate("/UPI-Payment");
    } else if (selectedMode === "card") {
      navigate("/Card-Transaction");
    }
  };

  return (
    <>
      <Header />
      <h2 className="mode-title">MODE OF TRANSACTION</h2>
      <div className="mode-transaction-container">
        <form className="mode-form">
          <label>
            <input
              type="radio"
              value="online"
              checked={mode === "online"}
              onChange={handleModeChange}
            />
            Online Payment
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="card"
              checked={mode === "card"}
              onChange={handleModeChange}
            />
            Card Transaction
          </label>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ModeTransaction;