import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="mt-4 mr-2 ml-2">
      <ul className="flex justify-end space-x-6">
        <li className="text-teal-700 hover:underline">
          <Link to="/">New Search</Link>
        </li>
        <li className="text-teal-700 hover:underline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
