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
    const imageArray= [BudgetHome, BudgetLangSelect, BudgetCountrySelect]


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
                 
               
                    </p>
                    
            </section>

            <article className="images-wrapper-carousel-budget">

                <Carousel images={images} hasThumbnails={true} isAutoPlaying={true} autoPlayInterval={10000} hasMediaButton={false} hasIndexBoard={false}/>

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