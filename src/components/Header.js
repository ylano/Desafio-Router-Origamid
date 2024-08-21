import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between p-4">
        <h1 className="text-2xl font-bold">Desafio Route</h1>
        <ul className="space-x-4 flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` font-sans font-semibold text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 ${
                  isActive ? 'bg-blue-700' : 'bg-blue-400'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                `font-sans font-semibold text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600  ${
                  isActive ? 'bg-blue-700' : 'bg-blue-400'
                }`
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
