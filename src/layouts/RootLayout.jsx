import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <>
            <div>Navbar</div>
            <div className="px-6 md:px-20 bg-black min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>Footer</div>
        </>
    );
};

export default RootLayout;
