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
    const imageArray= [BudgetHome, BudgetLangSelect, BudgetCountrySelect, BudgetCountryDisplay, BudgetFlight, BudgetWish, BudgetCalc]

    const images = imageArray.map((pic, index) => ({
        src: `${pic}`, 
        index: index
      }));
    return(
        <>
        
        <main className="single-project">

            <section className="description-container">

            <p className="description-lg">
                        Budgetaway was designed and developed by a team of CodeClan students with the aim of giving people working on a budget a way to select holiday destinations and flights. It allows the user to select a country using filters for language and region. It then displays information about the country and the user can then select a departure airport and an arrival airport to get flight information. 
                 
                    <br></br>
                    <br></br>
                        The app also features a luck dip button which will allow a user to randomly select any country in the world rather than using the filters or selecting a country directly.

                        Any journey the user creates can be added to a wishlist of destinations to store for later use or deleted as appropriate.

                        The application also includes a side-bar budgeting calculator that allows the user to enter their financial details and the journey cost and will calculate how much they can save per month and, if they do so, how many months it will be before they can afford the trip.
                    </p>
                    
            </section>

            <article className="images-wrapper-carousel-budget">

                <Carousel images={images} hasThumbnails={true} isAutoPlaying={true} autoPlayInterval={10000} hasMediaButton={false} hasIndexBoard={false}/>

            </article>  

            <article className="text-wrapper">
              

                <section className="mvp-container">

                    <h2 className="mvp">M.V.P</h2>

                        <ul>

                            <li>The application should be able to track an individual product that will have a name, a description, a stock quantity, a cost price and a sale price</li>
                            <li>The application must be able to track suppliers that will include a Name, an Address, a Telephone Number and a list of their Products</li>
                            <li>The User should be able to Add new Products and Suppliers, Edit and Update the information they already have and Delete products they no longer stock or suppliers they no longer use</li>
                            <li>The User should be able to view all items in stock as a list and all suppliers used as a list. These lists should provide information on the products or suppliers in one view</li>
                            <li>The application should visually highlight "low stock" and "out of stock" items </li>
                            <li>The user should be able to apply a % markup to a product which should automatically update the sale price from the cost price.</li>           

                    </ul>
                </section>
            </article>
        </main>
        </>
    )

}

export default BudgetawayMore