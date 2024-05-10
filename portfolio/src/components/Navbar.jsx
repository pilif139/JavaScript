import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'


export default function Navbar() {
  return (
    <ul className="navbar">
        <li className="home-link underline-ani">
            <Link to="/">Home</Link>
        </li>
        <li className="projects-link underline-ani">
            <Link to="/my-projects">My Projects</Link>
        </li>
    </ul>
  )
}
