import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Products from './Products/Products.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"


import './index.css'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },

  //{
    //path: "/Products/",
    //element: <Products/>
  //},

  {
    path:"/products/:id", 
    element:<Products />
  }
])

/*const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path:"Products",
        element: <Products/>,
      },
    ]
  },
])*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router= {router}/>
  </StrictMode>
  
)
