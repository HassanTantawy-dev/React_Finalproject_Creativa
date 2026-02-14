import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AllData from "./Data/AllData";
import { createRoot } from "react-dom/client";
import ScrollToTop from "react-scroll-to-top";
import AllProperties from "./Properties/AllProperties";
import AllDetails from "./Details/AllDetails";
import AllContact from "./Contact/AllContact";
import AllProducts from "./Products/AllProducts";
import AllDetailsProduct from "./DetailsProduct/AllDetailsProduct";
import AllCart from "./Cart/AllCart";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "properties",
    element: <AllProperties />,
  },
  {
    path: "details",
    element: <AllDetails />,
  },
  {
    path: "contact",
    element: <AllContact />,
  },
  {
    path: "products",
    element: <AllProducts />,
  },
  {
    path: "details-product/:id",
    element: <AllDetailsProduct />,
  },
  {
    path: "cart",
    element: <AllCart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AllData>
      <RouterProvider router={router} />
    <ScrollToTop smooth  color="white" style={{backgroundColor:"#f35525", borderRadius:"50%"}}/>
  </AllData>,
);
