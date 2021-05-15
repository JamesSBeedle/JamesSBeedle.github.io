import "./Home.css"
import Footer from './Footer'
import react from "../images/React.jpg"
import vue from "../images/Vue.jpg"
import python from "../images/Python.jpg"
import mongo from "../images/MongoDB.jpg"
import Java from "../images/Java.jpg"
import spring from "../images/Spring.jpg"
import JS from "../images/Javascript.jpg"


const Home = () => {
    return(
     
            
            <>
                <section className="home-container" >
                    <h1 className="name">James Beedle</h1>
                    <div className="underline"></div>
                    <h2 className="profession">Software Developer</h2>
                    <div className="underline"></div>
                    <div className="image-container-home">
                        <img className="small-img-home" src ={JS} alt = "JavaScript logo"></img>
                        <img className="small-img-home" src ={vue} alt = "vue logo"></img>
                        <img className="small-img-home" src ={react} alt = "react logo"></img>
                        <img className="small-img-home" src = {python} alt = "python logo"></img>
                        <img className="small-img-home" src ={Java} alt = "java logo"></img>
                        <img className="small-img-home" src ={spring} alt = "spring logo"></img>
                        <img className="small-img-home" src = {mongo} alt = "mongoDB logo"></img>
                        
                    </div>
                    
                </section>  
                <Footer/> 
            </>
       
       
    )
}

export default Home