import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./rks.css";
import "./responsive.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import Provider from "./Provider/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mycontainer">
    <Provider>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={routes}></RouterProvider>
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </div>
);
