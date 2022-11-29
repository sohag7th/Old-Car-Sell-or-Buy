import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import AllBuyers from "../pages/DashBoard/Admin/AllBuyers";
import AllProducts from "../pages/DashBoard/Admin/AllProducts";
import AllSellers from "../pages/DashBoard/Admin/AllSellers";
import ReportedItems from "../pages/DashBoard/Admin/ReportedItems";
import MyOrders from "../pages/DashBoard/Buyers/MyOrders";
import DashBoard from "../pages/DashBoard/DashBoard";
import MyProfile from "../pages/DashBoard/MyProfile/MyProfile";
import AddAproduct from "../pages/DashBoard/Sellers/AddAproduct";
import MyBuyers from "../pages/DashBoard/Sellers/MyBuyers";
import MyProducts from "../pages/DashBoard/Sellers/MyProducts";
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
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/category/:name",
                element:
                    <ProtectRoute>
                        <Category />
                    </ProtectRoute>
            },
            {
                path: "/dashboard",
                element:
                    <ProtectRoute>
                        <DashBoard />
                    </ProtectRoute>,
                children: [
                    {
                        path: '',
                        element: <MyProfile/>
                    },
                    {
                        path: "my-profile",
                        element: <MyProfile />
                    },
                    {
                        path: "my-orders",
                        element: <MyOrders />
                    },
                    {
                        path: "add-a-product",
                        element: <AddAproduct />
                    },
                    {
                        path: "my-products",
                        element: <MyProducts />
                    },
                    {
                        path: "my-buyers",
                        element: <MyBuyers />
                    },
                    {
                        path: "all-sellers",
                        element: <AllSellers />
                    },
                    {
                        path: "all-buyers",
                        element: <AllBuyers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    },
                    {
                        path: "reported-items",
                        element: <ReportedItems />
                    }
                ]
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