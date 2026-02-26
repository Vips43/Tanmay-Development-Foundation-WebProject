import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery";
import WomenEmpowerment from "./pages/women-empowerment";
import Environment from "./pages/environment";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Payment from "./pages/payment";
import CardTransaction from "./pages/CardTransaction"; 
import Agriculture from "./pages/agriculture";
import Education from "./pages/education";
import PinNumber from "./pages/PinNumber";
import ModeTransaction from "./pages/ModeTransaction";
import Donation from "./pages/Donation";


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Women-Empowerment" element={<WomenEmpowerment/>}/>
      <Route path="/Environment" element={<Environment/>}/>
      <Route path="/About-Us" element={<AboutUs/>}/>
      <Route path="/UPI-Payment" element={<Payment/>}/>
      <Route path="/Card-Transaction" element={<CardTransaction/>}/>
      <Route path="/Agriculture" element={<Agriculture/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Donation" element={<Donation/>}/>
      <Route path="/Pin-Number" element={<PinNumber/>}/>
      <Route path="/Mode-Transaction" element={<ModeTransaction/>}/>     
    </Routes>
   </Router>
    
  );
};

export default App;
