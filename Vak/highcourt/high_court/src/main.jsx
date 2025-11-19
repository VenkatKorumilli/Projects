import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HighcourtForm from "./pages/HighcourtForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "highcourt",
    element: <HighcourtForm />,
  },
]);

createRoot(document.getElementById("root")).render(
<RouterProvider router={router}/>
)
