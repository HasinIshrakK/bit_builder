import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllProjects from "../pages/AllProjects/AllProjects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import AllMembers from "../pages/AllMembers";
import MemberDetails from "../pages/MemberDetails";
import Contacts from "../pages/Contacts/Contacts";
import Error from "../pages/Error/Error";
import ErrorElement from "../pages/Error/ErrorElement";
import Booking from "../pages/Booking/Booking";
import Skills from "../pages/Skills/Skills";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: RootLayout,
            errorElement: <ErrorElement />,
            children: [
                {
                    index: true,
                    Component: Home
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
                    path: "/skills",
                    Component: Skills
                }, {
                    path: "/projects",
                    Component: AllProjects
                },
                {
                    path: "/projects/:id",
                    Component: ProjectDetails
                },
                {
                    path: "/contact",
                    Component: Contacts
                }, {
                    path: "/booking",
                    Component: Booking
                },
                {
                    path: "/*",
                    Component: Error
                }
            ]
        }
    ]
)


