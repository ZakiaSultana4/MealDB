import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Meals from "./Pages/Meals";
import MealList from "./Pages/MealList";
import MealDetails from "./Pages/MealDetails";
const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Meals />,
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        children: [
          {
            path: "/meals/:category",
            element: <MealList />,
            loader: ({ params }) =>
              fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
              ),
          },
        ],
      },
      {
        path: "/meal/:mealID",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
