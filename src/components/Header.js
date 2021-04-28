import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
    return(
        <article class="nav-container">
            <nav class="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">My Work</Link>
            <Link to="/contact">Contact Me</Link>
            </nav>
        </article>
             
    )
}

export default Header