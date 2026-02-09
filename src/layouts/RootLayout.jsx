import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <>
            {/* <main className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1">
                    <Container>
                        <Outlet></Outlet>
                    </Container>
                </div>
                <Footer />
            </main> */}
            <Navbar />
            <div className="px-6 md:px-20 bg-black min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
