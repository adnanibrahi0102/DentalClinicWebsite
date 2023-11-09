import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
