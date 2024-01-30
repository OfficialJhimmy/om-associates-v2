import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Insights from "./pages/Insights/Insights";
import Events from "./pages/Events/Events";
import Services from "./pages/Services/Services";
import Auditing from "./pages/ServicesDetails/Auditing";
import Tax from "./pages/ServicesDetails/Tax";
import Consulting from "./pages/ServicesDetails/Consulting";
import Cfo from "./pages/ServicesDetails/Cfo";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import TaxApp from "./pages/OmApp/TaxApp";
import Career from "./pages/Career/Career";
import Industries from "./pages/Industries/Industries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/insights",
    element: <Insights />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },

  {
    path: "/whtapp",
    element: <TaxApp />,
  },
  {
    path: "/audit",
    element: <Auditing />,
  },
  {
    path: "/tax",
    element: <Tax />,
  },
  {
    path: "/consulting",
    element: <Consulting />,
  },
  {
    path: "/cfo",
    element: <Cfo />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
