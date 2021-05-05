import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    return(
        <article className="nav-container">
            <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">My Work</Link>
            <Link to="/contact">Contact Me</Link>
            </nav>
        </article>
             
    )
}

export default Header