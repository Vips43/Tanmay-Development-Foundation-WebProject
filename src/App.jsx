import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

const Gallery = lazy(() => import("./pages/gallery"));
const WomenEmpowerment = lazy(() => import("./pages/women-empowerment"));
const Environment = lazy(() => import("./pages/environment"));
const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/about-us"));
const Payment = lazy(() => import("./pages/payment"));
const CardTransaction = lazy(() => import("./pages/CardTransaction"));
const Agriculture = lazy(() => import("./pages/agriculture"));
const Education = lazy(() => import("./pages/education"));
const PinNumber = lazy(() => import("./pages/PinNumber"));
const ModeTransaction = lazy(() => import("./pages/ModeTransaction"));
const Donation = lazy(() => import("./pages/Donation"));

const App = () => {
 return (
  <Router>
   <Suspense
    fallback={
     <div className="flex justify-center items-center h-screen">
      <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
     </div>
    }
   >
    <Routes>
     <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Women-Empowerment" element={<WomenEmpowerment />} />
      <Route path="/Environment" element={<Environment />} />
      <Route path="/About-Us" element={<AboutUs />} />
      <Route path="/UPI-Payment" element={<Payment />} />
      <Route path="/Card-Transaction" element={<CardTransaction />} />
      <Route path="/Agriculture" element={<Agriculture />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Donation" element={<Donation />} />
      <Route path="/Pin-Number" element={<PinNumber />} />
      <Route path="/Mode-Transaction" element={<ModeTransaction />} />
     </Route>
    </Routes>
   </Suspense>
  </Router>
 );
};
export default App;
