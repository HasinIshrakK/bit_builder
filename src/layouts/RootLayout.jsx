import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <div>Navbar</div>
            <div className="mx-6 md:mx-20 bg-gray-900">
                <Outlet></Outlet>
            </div>
            <div>Footer</div>
        </>
    );
};

export default RootLayout;
