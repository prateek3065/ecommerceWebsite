import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RootRoutes from "./routes/Routes";
import StateContextProvider from "./store/StateContext";
import "./molecules/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <StateContextProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <RouterProvider router={RootRoutes} />
      </Suspense>
    </StateContextProvider>
  </>
);
