import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import News from "../pages/News/News";
import Profile from "../pages/Others/Profile/Profile";
import TermsAndCondition from "../pages/Others/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../routers/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                loader: () => fetch(`https://dragon-news-server-cyan-zeta.vercel.app/news`),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch(`https://dragon-news-server-cyan-zeta.vercel.app/news`),
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-cyan-zeta.vercel.app/category/${params.id}`),
                element: <Category />
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-cyan-zeta.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/terms',
                element: <TermsAndCondition />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])