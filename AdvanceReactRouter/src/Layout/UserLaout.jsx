import React from 'react'
import Users from '../Pages/RootPages/Users'
import { Outlet } from 'react-router-dom'

const UserLaout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default UserLaout