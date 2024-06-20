import React from 'react'
import Navbar from './Component/Navbar'
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
