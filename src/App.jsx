import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Certificate from "./pages/Certificate";
import FallbackLoader from "./components/FallbackLoader";
import ModeTransaction from "./pages/ModeTransaction";
import PinNumber from "./pages/PinNumber";
import CardTransaction from "./pages/CardTransaction";
import Payment from "./pages/payment";

const Gallery = lazy(() => import("./pages/gallery"));
const WomenEmpowerment = lazy(() => import("./pages/women-empowerment"));
const Environment = lazy(() => import("./pages/environment"));
const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/about-us"));
const Agriculture = lazy(() => import("./pages/agriculture"));
const Education = lazy(() => import("./pages/education"));
const Donation = lazy(() => import("./pages/Donation"));

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<MainLayout />}>
     <Route
      path="/"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <Home />
       </Suspense>
      }
     />
     <Route
      path="/Gallery"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <Gallery />
       </Suspense>
      }
     />
     <Route
      path="/Women-Empowerment"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <WomenEmpowerment />
       </Suspense>
      }
     />
     <Route
      path="/Environment"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <Environment />
       </Suspense>
      }
     />
     <Route
      path="/About-Us"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <AboutUs />
       </Suspense>
      }
     />
     <Route
      path="/Agriculture"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <Agriculture />
       </Suspense>
      }
     />
     <Route
      path="/Education"
      element={
       <Suspense fallback={<FallbackLoader />}>
        <Education />
       </Suspense>
      }
     />
     <Route path="/Card-Transaction" element={<CardTransaction />} />
     <Route path="/Donation" element={<Donation />} />
     <Route path="/UPI-Payment" element={<Payment />} />
     <Route path="/Pin-Number" element={<PinNumber />} />
     <Route path="/certificate" element={<Certificate />} />
     <Route path="/Mode-Transaction" element={<ModeTransaction />} />
    </Route>
   </Routes>
  </Router>
 );
};
export default App;