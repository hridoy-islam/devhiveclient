import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import StartSelling from "../Pages/StartSelling/StartSelling";
import Settings from "../Pages/Settings/Settings";
import Header from "../Components/Header/Header";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/start_selling",
        element: <StartSelling />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <Header></Header>
        <NotFound></NotFound>
      </div>
    ),
  },
]);

export default router;
