import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation<any>()

  return (
    <nav className="mt-4 mr-2 ml-2">
      <ul className="flex justify-end space-x-6">
        <li className="text-teal-700 hover:underline">
          {
            location.pathname === '/'
              ? <Link to="/about">About</Link>
              : location.pathname === '/profile'
                ? <Link to="/">New Search</Link>
              : <Link to="/">Home</Link>
          }
        </li>
      </ul>
    </nav>
  )
}
