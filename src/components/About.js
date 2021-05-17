import "./About.css"
import me from "../images/James_Web.jpg"
import react from "../images/React.jpg"
import vue from "../images/Vue.jpg"
import python from "../images/Python.jpg"
import mongo from "../images/MongoDB.jpg"
import Java from "../images/Java.jpg"
import spring from "../images/Spring.jpg"
import JS from "../images/Javascript.jpg"


const About = () => {

    return(
        <>
           

            <section className="about-container" id="about">
                
                    <h1> About</h1>

                <section className="img-box">
                    <div className="lg-img-container">
                        <img className="lg-img" src ={me} alt = "James Beedle"></img>
                    </div>
                    <div className="small-img-container">
                        <img className="small-img" src ={JS} alt = "JavaScript logo"></img>
                        <img className="small-img" src ={vue} alt = "vue logo"></img>
                        <img className="small-img" src ={react} alt = "react logo"></img>
                        <img className="small-img" src = {python} alt = "python logo"></img>
                        <img className="small-img" src ={Java} alt = "java logo"></img>
                        <img className="small-img" src = {mongo} alt = "mongoDB logo"></img>
                        <img className="small-img" src ={spring} alt = "spring logo"></img>
                    </div>
                </section>

                <section className="story-box">
                    <section className="story-box-inner">
                        <h3>My Story</h3>

                        <p>A Junior Software Developer with a background in Hospitality Management and Customer Service. I am used to working in fast paced high pressure environments, communicating well with team members and customers alike. Always looking for the next challenge I decided to take a change in direction and make an Interest a Career. Through my role as a Manager I have come to understand the importance of great teamwork and the creation of a positive working environment. </p>
                    </section>
                </section>

            </section>
            

           
        </>
    )
}

export default About