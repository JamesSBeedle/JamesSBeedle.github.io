import About from "../components/About"
import Contact from "../components/Contact"
import Project from "../components/Project"
import Home from "../components/Home"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./SiteContainer.css"

const SiteContainer = () => {

    return(
        <main class="site-container">
            <Header></Header>
            <Home></Home>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    )
}

export default SiteContainer