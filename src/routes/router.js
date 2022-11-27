import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ErrorPage from "../shared/ErrorPage";
import ProtectRoute from "./ProtectRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/category/:name",
                element:
                    <ProtectRoute>
                        <Category />
                    </ProtectRoute>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp />
            }
        ]
    }
]);


export default router;