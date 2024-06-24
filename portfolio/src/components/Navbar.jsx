<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> 0d19f6fc1379de550211299fd2f1f5200faf78fc
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
