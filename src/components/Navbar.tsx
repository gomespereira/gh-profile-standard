import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">New Search</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
