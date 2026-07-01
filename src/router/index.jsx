import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/index";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import News from "../pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);