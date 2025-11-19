import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Form from "./pages/Form.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
    {
    path:"/form",
    element:<Form></Form>
    }
    ]
  }
]);


createRoot(document.getElementById("root")).render(
<RouterProvider router={router}/>
);
