import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <div>Navbar</div>
            <div className="px-6 md:px-20 bg-black">
                <Outlet></Outlet>
            </div>
            <div>Footer</div>
        </>
    );
};

export default RootLayout;
