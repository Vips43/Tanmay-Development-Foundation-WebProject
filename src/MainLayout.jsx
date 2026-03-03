import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
 return (
  <div className="min-w-112.5">
   {/* <Header /> */}
   <Navbar />
   <main>
    <Outlet />
   </main>
   <Footer />
  </div>
 );
}

export default MainLayout;
