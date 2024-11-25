import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Nav = () => {
  const Navegate = useNavigate()
  return (
    <nav>
        <div className="logo">Navbar</div>
        <ul>
            <NavLink to="/About"><li>About</li></NavLink>
            <NavLink to="/Contect"><li>Contect</li></NavLink>
            <NavLink to="/Users"><li>Users</li></NavLink>
            <li>
                <button onClick={()=>Navegate("/Login")}>Sign in</button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav