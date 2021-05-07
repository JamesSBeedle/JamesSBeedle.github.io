import TryDisplay from "../images/try-atomic-energy-display.png";
import "./Applications.css"
import { Link } from 'react-router-dom'

const TryAtomic = () => {
 
  

    return(
        <>

            <article className="images-wrapper">
            
            <h1>try-atomic</h1>


            <Link to="/tryatomicmore">Show More</Link>

            

                <section className="image-container-try">
                    <img src={TryDisplay} alt="try-atomic home page" />
                </section>

                
                <section className="description-container">
                    <p className="description">
                    The try-atomic app was designed and developed as part of a Group Project. The aim of the team was to develop an app that would track a users carbon emissions and display their carbon footprint over the period of 1 month. It collects user inputted information on diet type (daily), transport (per journey) and enegry use (monthly) and calculates each inputs individual carbon emissions. It then displays the total emissions for the month and compares it to the average person.
                </p>
                </section>

            </article>



        </>
    )
}

export default TryAtomic