import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllMembers from "../pages/AllMembers";
import MemberDetails from "../pages/MemberDetails";
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
        index: true,
        Component: Home,
      },
      {
        path: "members",
        element: <AllMembers />,
      },
      {
        path: "members/:id",
        element: <MemberDetails />,
      },
                {
                    path:"/contact",
                    Component:Contacts
                }
            ]
        }
    ]
)


