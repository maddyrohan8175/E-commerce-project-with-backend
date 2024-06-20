import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './Component/Table.jsx'
import AddProduct from './Component/AddProduct.jsx'
import View from './Component/View.jsx'
import Update from './Component/Update.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<App/>}>
   <Route path='' element={<Table/>}/>
   <Route path='/addproduct' element={<AddProduct/>}/>
   <Route path='/view/:id' element={<View/>}/>
   <Route path='/update/:id' element={<Update/>}/>
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
