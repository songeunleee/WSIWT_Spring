import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WeatherDetail from "./pages/WeatherDetail";
import MyCloset from "./pages/MyCloset";
import Main from "./pages/Main";
import NewClothes from "./pages/NewClothes";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "weatherdetail/:date",
        element: <WeatherDetail />,
      },

      { path: "mycloset", element: <MyCloset /> },
      {
        path: "mycloset/new",
        element: (
          <ProtectedRoute>
            <NewClothes />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
