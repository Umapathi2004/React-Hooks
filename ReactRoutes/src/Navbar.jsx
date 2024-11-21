import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import {CountProp} from './App'
const Navbar = () => {
  const {count} = useContext(CountProp);
  return (
    <nav>
        <div className="homes"><Link index to={"/"}>Home</Link></div>
        <div className="others">
            <NavLink to={"/contect"}>Contect</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/page1"}>Page1</NavLink>
            <NavLink to={"/page2"}>Page2</NavLink>
            <div className="count">{count}</div>
        </div>
    </nav>
  )
}

export default Navbar