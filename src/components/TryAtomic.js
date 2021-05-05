import InnHome from "../images/inn-home-page.png";
import InnAdd from "../images/inn-add-product.png";
import InnProduct from "../images/inn-product-page.png";
import "./Applications.css"

const TryAtomic = () => {
    return(
        <>

        <h1>try-atomic</h1>

        <article className="images-wrapper">

            <section className="image-container">
                <img src={InnHome} alt="Inn-ventory home page" />
            </section>

            <section className="image-container">
                <img src={InnProduct} alt="Inn-ventory products page" />
            </section>

            <section className="image-container">
                <img src={InnAdd} alt="Inn-ventory product adding form" />
            </section>  

        </article>  
        
        </>
    )
}

export default TryAtomic