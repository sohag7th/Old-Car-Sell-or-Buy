import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../layout/Main";
import AddAService from "../pages/AddAService/AddAService";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyReview from "../pages/MyReview/MyReview";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
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
                path: "/services",
                element: <Services />
            },
            {
                path: "/services/:id",
                element: <ServiceDetails/>,
                loader: ({ params }) => fetch(`https://ph-b6-assignmet11-server-sohag-9065.vercel.app/services/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/my-review",
                element:
                    <ProtectRoute>
                        <MyReview />
                    </ProtectRoute>
            },
            {
                path: "/add-service",
                element:
                    <ProtectRoute>
                        <AddAService />
                    </ProtectRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    }
]);


export default router;