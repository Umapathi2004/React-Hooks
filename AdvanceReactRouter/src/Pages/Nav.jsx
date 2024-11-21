import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="logo">Navbar</div>
        <ul>
            <li>About</li>
            <li>Contect</li>
            <li>Users</li>
            <li>
                <button>Sign in</button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav