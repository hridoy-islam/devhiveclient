import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import StartSelling from "../Pages/StartSelling/StartSelling";
import Profile from "../Pages/Profile/Profile";
import Chat from "../Pages/Chat/Chat";
import Header from "../Components/Header/Header";
import NotFound from "../Pages/NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails";
import AccountSettings from "../Components/Settings/AccountSettings";
import SecuritySettings from "../Components/Settings/SecuritySettings";
import NotificationSettings from "../Components/Settings/NotificationSettings";
import BusinessInfoSettings from "../Components/Settings/BusinessInfoSettings";
import PaymentMethodSettings from "../Components/Settings/PaymentMethodSettings";
import SettingsLayout from "../Layout/SettingsLayout";
import Graphic from "../Pages/Graphic";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Writting from "../Pages/Writting";
import CreateService from "../Pages/CreateService";
import Video from "../Pages/Video";
import Music from "../Pages/Music";
import Programming from "../Pages/Programming";

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
        path: "/graphic-design",
        element: <Graphic />,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/writting",
        element: <Writting />,
      },
      {
        path: "/video",
        element: <Video />
      },
      {
        path: '/music',
        element: <Music />
      },
      {
        path: "/create-service",
        element: <CreateService />,
      },
      {
        path: '/programming',
        element: <Programming />
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
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "/user-profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "/settings/",
            element: <AccountSettings></AccountSettings>,
          },
          {
            path: "/settings/account",
            element: <AccountSettings></AccountSettings>,
          },
          {
            path: "/settings/security",
            element: <SecuritySettings></SecuritySettings>,
          },
          {
            path: "/settings/notification",
            element: <NotificationSettings></NotificationSettings>,
          },
          {
            path: "/settings/business_info",
            element: <BusinessInfoSettings></BusinessInfoSettings>,
          },
          {
            path: "/settings/payment",
            element: <PaymentMethodSettings></PaymentMethodSettings>,
          },
        ],
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
