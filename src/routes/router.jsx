import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllProjects from "../pages/AllProjects/AllProjects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

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
                    path:"/projects",
                    Component:AllProjects
                },
                {
                    path:"/projects/:id",
                    Component:ProjectDetails
                },
            ]
        }
    ]
)