import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            Component:RootLayout,
            children:[
                {
                    index:true,
                    Component:Home
                },
                {
                    path:"/contact",
                    Component:Contacts
                }
            ]
        }
    ]
)