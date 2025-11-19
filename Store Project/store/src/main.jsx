import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Cart, Checkout, Landing, Login, Order, Orders, ProductPage, Products, Register } from './pages/index.js'
import Navbar from './pages/Navbar.jsx'

const router = createBrowserRouter([
{
path:'/',
element:<App/>,
errorElement:<Error/>,
children:[
{
path:'navbar',
element:<Navbar/>   
},
{
index:true ,
element:<Landing/>,
},
{
path:'products',
element:<Products/>
},
{
path:'product:id',
element:<ProductPage/>
},
{
path:'cart',
element:<Cart/>
},
{
path:'checkout',
element:<Checkout/>
},
{
path:'orders',
element:<Orders/>
},
{
path:'order',
element:<Order/>
},
{
path:'about',
element:<About/>
}
]
},
{
path:'/login',
element:<Login/>
},
{
path:'/register',
element:<Register/>
},
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
<App />
</RouterProvider>
)
