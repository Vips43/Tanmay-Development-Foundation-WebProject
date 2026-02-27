import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
 return (
  <div>
   <Header />
   <Navbar />
   <main>
    <Outlet />
   </main>
   <Footer />
  </div>
 );
}

export default MainLayout;
