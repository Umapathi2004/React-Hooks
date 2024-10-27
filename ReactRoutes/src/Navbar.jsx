import React from 'react'
import { BrowserRouter,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
        <div className="homes"><Link to={"/"}>Home</Link></div>
        <div className="others">
            <div className="contect"><Link to={"/contect"}>Contect</Link></div>
            <div className="abouts"><Link to={"/about"}>About</Link></div>
            <div className="page1s"><Link to={"/page1"}>Page1</Link></div>
            <div className="page2s"><Link to={"/page2"}>Page2</Link></div>
        </div>
    </nav>
  )
}

export default Navbar