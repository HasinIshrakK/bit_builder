import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllProjects from "../pages/AllProjects/AllProjects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import AllMembers from "../pages/AllMembers";
import MemberDetails from "../pages/MemberDetails";
import Contacts from "../pages/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects",
        Component: AllProjects,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails,
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
        path: "/contact",
        Component: Contacts,
      },
    ],
  },
]);
