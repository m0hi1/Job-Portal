import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Bottombar/>
  </>
  )
}

export default MainLayout