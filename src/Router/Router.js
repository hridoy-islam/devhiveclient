import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import StartSelling from "../Pages/StartSelling/StartSelling";
import Settings from "../Pages/Settings/Settings";
import Chat from "../Pages/Chat/Chat";
import Profile from "../Pages/Profile";
import ProfileEdit from "../Pages/ProfileEdit";
import Header from "../Components/Header/Header";
import NotFound from "../Pages/NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";

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
        path: "/home",
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
        element: (
          <PrivateRoute>
            <StartSelling />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "/user-profile",
        element: <Profile />,
      },
      {
        path: "/user-profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/chat",
        element: <Chat />,
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
