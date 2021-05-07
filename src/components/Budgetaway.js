import BudgetHome from "../images/budget-home.png";
import "./Applications.css"
import { Link } from 'react-router-dom'

const Budgetaway = () => {
 
  

    return(
        <>

            <article className="images-wrapper">
            
            <h1>Budgetaway</h1>


            <Link to="/budgetawaymore">Show More</Link>

            

                <section className="image-container">
                    <img src={BudgetHome} alt="Budgetaway home page" />
                </section>

                
                <section className="description-container">
                    <p className="description">
                        Budgetaway was designed and developed by a team of CodeClan students with the aim of giving people working on a budget a way to select holiday destinations and flights. It allows the user to select a country using filters for language and region. It then displays information about the country and the user can select a departure airport and an arrival airport to get flight information. 
                        <br></br>
                        <br></br>
                        The app also features a lucky dip button which will allow a user to randomly select any country in the world rather than using the filters or selecting a country directly.
                        <br></br>
                        <br />

                        Any journey the user creates can be added to a wishlist of destinations to store for later use or deleted as appropriate.
                        <br />
                        <br/>

                        The application also includes a side-bar budgeting calculator. This allows the user to enter their financial details and the journey cost and will then calculate how much they can save per month and, if they do so, how many months it will be before they can afford the trip.
                    </p>
                </section>

            </article>



        </>
    )
}

export default Budgetaway