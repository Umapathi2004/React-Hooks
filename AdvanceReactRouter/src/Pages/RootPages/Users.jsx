import React from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const Navegate = useNavigate()
  return (
    <div className='container'>
        <h2>Users</h2>
        <button onClick={()=>Navegate("/Users/Info")}>Info</button>
        <button onClick={()=>Navegate("/Users/Form")}>Form</button>
    </div>
  )
}

export default Users