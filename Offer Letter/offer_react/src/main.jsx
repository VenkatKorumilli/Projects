import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Offer from './pages/Offer.jsx';

const route = createBrowserRouter([
{
path:"/",
element:<App/>
},
{
path:"/offerletter",
element:<Offer/>
}
])

createRoot(document.getElementById('root')).render(
  


)
