import "./Home.css"
import Footer from './Footer'
import Java from "../images/Java.jpg"
import react from "../images/React.jpg"
import python from "../images/Python.jpg"

const Home = () => {
    return(
     
            
            <>
                <section className="home-container" >
                    <h1 className="name">James Beedle</h1>
                    <div className="underline"></div>
                    <h2 className="profession">Software Developer</h2>
                    <div className="underline"></div>
                    <h2 className="portfolio">Portfolio </h2>
                    <div className="image-container-home">
                    <img className="small-img" src ={Java} alt = "Java logo"></img>
                    <img className="small-img" src ={react} alt = "React logo"></img>
                    <img className="small-img" src ={python} alt = "Python3 logo"></img>
                    </div>
                </section>  
                <Footer/> 
            </>
       
       
    )
}

export default Home