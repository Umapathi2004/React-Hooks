import React from 'react'
import Nav from '../Pages/Nav'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default RootLayout