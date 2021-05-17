import BudgetHome from "../images/budget-home.png";
import BudgetCountrySelect from "../images/budget-country-select.png";
import BudgetLangSelect from "../images/budget-lang-selected.png";
import BudgetCountryDisplay from "../images/budget-country-display.png";
import BudgetFlight from "../images/budget-flights-display.png";
import BudgetWish from "../images/budget-wishlist.png";
import BudgetCalc from "../images/budget-calculator.png"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import "./Applications.css"

const BudgetawayMore = () => {
    const imageArray= [BudgetHome, BudgetLangSelect, BudgetCountrySelect,BudgetFlight, BudgetCalc,BudgetCountryDisplay, BudgetWish]


    const images = imageArray.map((pic, index) => ({
        src: `${pic}`, 
        index: index
      }));
    return(
        <>
        
        <main className="single-project">
            <h1>Budgetaway</h1>

            <section className="description-container">

            <p className="description-lg">
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
                        <br/>
                        <br/>
                        <a href="https://budgetaway-react.herokuapp.com/" target="_blank" rel="noreferrer">Application Page</a>
                        <a href="https://github.com/JamesSBeedle/budgetaway_react" target="_blank" rel="noreferrer">Git Hub Front End</a>
                        <a href="https://github.com/selsmie/budgetaway_spring" target="_blank" rel="noreferrer">Git Hub Back End</a>
                 
               
                    </p>
                    
            </section>

            <article className="images-wrapper-carousel-budget">

                <Carousel images={images} hasThumbnails={true} isAutoPlaying={true} autoPlayInterval={10000} hasMediaButton={false} hasIndexBoard={false}/>

            </article>  

            <article className="images-phone">
                <img src={BudgetHome} alt="Budgetaway Home Page" />
                <img src={BudgetCountrySelect} alt="Budgetaway Showing Country Selection" />
                <img src={BudgetLangSelect} alt="Budgetaway Showing Language Selection" />
                <img src={BudgetCountryDisplay} alt="Budgetaway Showing country Details Being Displayed" />
                <img src={BudgetFlight} alt="Budgetaway Showing A Flight Being Displayed" />
                <img src={BudgetWish} alt="Budgetaway Showing the Journey Added To the Wishlist" />
                <img src={BudgetCalc} alt="Budgetaway Showing the Sidebar Budget Calculator" />
            </article>

            <article className="text-wrapper">
              

                <section className="mvp-container">

                    <h2 className="mvp">M.V.P</h2>

                        <ul>

                            <li>The user should be able to Select a country from a list of countries</li>
                            <li>The user should be able to View details about the country (language, currency etc)</li>
                            <li>The User should be able to Find flights to a destination country from a departure airport.</li>
                            <li>The User should be able to Add and Remove a journey from a wishlist</li>
                            <li>The application should provide a way for the user to calculate their monthly savings and the length of time it will take to save for the trip </li>
                            <li>The application should show the destination country on a map</li>           

                    </ul>
                </section>
            </article>
        </main>
        </>
    )

}

export default BudgetawayMore