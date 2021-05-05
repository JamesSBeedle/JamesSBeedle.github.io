import "./Project.css"

import InnVentory from "../components/InnVentory.js";
import TryAtomic from "../components/TryAtomic.js";
import Budgetaway from "../components/Budgetaway.js"


const Project = () => {

    return(
        <>
           

            <section className="project-container" id="projects">

                <h1>Projects</h1>    
                
                <article className="presentation-container">

                    <section className="presentation-box">
                        <InnVentory />

                    </section>

                    <section className="presentation-box">
                        <TryAtomic />

                    </section>
                    <section className="presentation-box">
                        <Budgetaway />

                    </section>
                </article>
                
            </section>
            

          
        </>
    )
}

export default Project