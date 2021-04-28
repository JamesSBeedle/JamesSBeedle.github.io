import "./Contact.css"
import git from "../images/github.jpg"
import linkedIn from "../images/Linkedin.jpg"
import email from "../images/Email.jpg"


const Contact = () => {

    return(
        <>
            <article class="contact-container" id="contact">

                <h1>Contact</h1>

                <section class="questions">
                    <p>If you have any Questions or are interested in any of my Work please get in touch using the links below.</p>
                </section>

                <section class="contact-links">
                    <a href="https://github.com/JamesSBeedle" target="_blank" rel="noreferrer"><img class="link-image" src={git} alt="github logo" /></a>
                    <a href="https://www.linkedin.com/in/james-sherwood-beedle/" target="_blank" rel="noreferrer"><img class="link-image" src={linkedIn} alt="linked in logo" /></a>
                    <a href="mailto:jamessbeedle@gmail.com" target="_blank" rel="noreferrer"><img class="link-image" src={email} alt="email link" /></a>
                    
                </section>

            </article>
            

           
        </>

        
    )
}

export default Contact