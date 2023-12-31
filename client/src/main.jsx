import React from 'react'
import Home from './components/Home/Home'
import Fashion from './components/Fashion/Fashion'
import Beauty from './components/Beauty/Beauty'
import Appliances from './components/Appliance/Appliances'
import Electronics from './components/Electronic/Electronics'
import ReactDOM from 'react-dom/client'

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const Layout = ()=>{

  return(
    <div>
       <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
   
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/product/clothing",
        element: <Fashion/>,
      },
      {
        path: "/product/Appliance",
        element: <Appliances/>,
      },
      {
        path: "/product/Beauty",
        element: <Beauty/>,
      },
      {
        path: "/product/Electronic",
        element: <Electronics/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);