
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Invoice from './pages/Invoice.jsx';
import Invoicepdf from './pages/Invoicepdf.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
  path:"/form",
  element:<Invoice/>,
  children:[
  {
  path:"/form/invoice.pdf",
  element:<Invoicepdf/>
  }
  ]
  }
]);
createRoot(document.getElementById('root')).render(
<App />
)
