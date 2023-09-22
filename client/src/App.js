import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import all components
import Home from "./pages/home/Home";
import LogIn from "./pages/auth/login/LogIn";
import Register from "./pages/auth/register/Register";
import Recovery from "./pages/auth/reset/Recovery";
import Reset from "./pages/auth/reset/Reset";
import PageNotFound from "./pages/PageNotFound";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";

// auth middleware
// import { AuthorizeUser } from "./middleware/auth";

// Root Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/recovery",
        element: <Recovery />,
    },
    {
        path: "/reset",
        element: <Reset />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path: "/write",
        element: (<Write />),
    },
    {
        path: "/settings",
        element: (<Settings />),
    },
    {
        path: "/post/:postID",
        element: (<Single />),
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}
