import TryHome from "../images/try-atomic-home.png";
import TryDiet1 from "../images/try-atomic-diet-form.png";
import TryDiet2 from "../images/try-atomic-diet-select.png";
import TryDiet3 from "../images/try-atomic-diet-display.png";
import TryTrans1 from "../images/try-atomic-transport-form.png";
import TryTrans2 from "../images/try-atomic-transport-select.png";
import TryTrans3 from "../images/try-atomic-transport-displayed.png";
import TryEnergy1 from "../images/try-atomic-energy-form.png";
import TryEnergy2 from "../images/try-atomic-energy-select.png";
import TryEnergy3 from "../images/try-atomic-energy-display.png";

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import "./Applications.css"

const TryAtomicMore = () => {
    const imageArray= [TryHome, TryDiet1, TryDiet2, TryDiet3,TryTrans1, TryTrans2, TryTrans3, TryEnergy1, TryEnergy2, TryEnergy3 ]

    const images = imageArray.map((pic, index) => ({
        src: `${pic}`, 
        index: index
      }));
    return(
        <>
        
        <main className="single-project">

            <section className="description-container">
                    <p className="description-lg">
                    The try-atomic app was designed and developed as part of a Group Project. The aim of the team was to develop an app that would track a users carbon emissions and display their overall carbon footprint over the period of 1 month. It collects user inputted information on diet type (daily), transport (per journey) and enegry use (monthly) and calculates each inputs individual carbon emissions. It then displays the total emissions for the month and compares it to the average person.
                    </p>
            </section>

            <article className="images-wrapper-carousel-try">

                <Carousel images={images} hasThumbnails={true} isAutoPlaying={true} autoPlayInterval={10000} hasMediaButton={false} hasIndexBoard={false} hasSizeButton={false}/>

            </article>  

            <article className="text-wrapper">
              

                <section className="mvp-container">
                    <h2 className="mvp">M.V.P</h2>
                        <ul>
                            <li>The application should allow a user to submit details on a number of aspects of their lifestyle</li>
                            <li>The application must use the users inputs to calculate the carbon emissions for that activity/choice</li>
                            <li>The application must display the calculated Carbon Emissions for each activity to the user in an easy to read and infomative manner</li>
                            <li>There should be a visually impactful way of displaying the users total carbon emissions</li>
                            
                   

    

                    </ul>
                </section>
            </article>
        </main>
        </>
    )

}

export default TryAtomicMore