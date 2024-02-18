import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AuthGaurd from "../components/AuthGaurd";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/profile/',
        element: <AuthGaurd />,
        children: [
            {
                path: '/profile/',
                element: <Profile />
            },
            {
                path: '/profile/dasboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router;