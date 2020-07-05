import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation<any>()

  return (
    <nav className="mt-4 mr-2 ml-2 md:mt-8 md:mr-10 md:ml-10">
      <ul className="flex justify-end">
        <li className="text-blue-900 font-bold hover:underline">
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
