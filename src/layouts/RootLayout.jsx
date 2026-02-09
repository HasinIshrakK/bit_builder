import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen poppins">
        <Navbar />
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
