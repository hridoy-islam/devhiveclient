import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import StartSelling from "../Pages/StartSelling";
import Services from "../Pages/Services";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/start_selling',
          element: <StartSelling />
        },
        {
          path: '/services',
          element: <Services />
        },
    ],
  },
])

export default router;
