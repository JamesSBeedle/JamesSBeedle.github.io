import InnHome from "../images/inn-home-page.png";
import "./Applications.css"
import { Link } from 'react-router-dom'

const TryAtomic = () => {
 
  

    return(
        <>

            <article className="images-wrapper">
            
            <h1>try-atomic</h1>


            <Link to="/tryatomicmore">Show More</Link>

            

                <section className="image-container">
                    <img src={InnHome} alt="try-atomic home page" />
                </section>

                
                <section className="description-container">
                    <p className="description">
                        The Inn-Ventory app was design as a way for businesses within the alcohol retail industry, mainly inns, pubs and clubs, to track and update their suppliers and product stocks in a quick and efficient manner. It also calculates the sale price of items from an entered cost price and a selected % markup applied by the user.
                </p>
                </section>

            </article>



        </>
    )
}

export default TryAtomic