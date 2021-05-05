import "./Home.css"
import Footer from './Footer'

const Home = () => {
    return(
     
            
            <>
                <section className="home-container" >
                    <h1 className="name">James Beedle</h1>
                    <div className="underline"></div>
                    <h2 className="profession">Software Developer</h2>
                    <div className="underline"></div>
                    <h2 className="portfolio">Portfolio </h2>
                </section>  
                <Footer/> 
            </>
       
       
    )
}

export default Home