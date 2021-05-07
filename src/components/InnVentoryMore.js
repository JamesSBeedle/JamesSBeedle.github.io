import InnHome from "../images/inn-home-page.png";
import InnAdd from "../images/inn-add-product.png";
import InnProduct from "../images/inn-product-page.png";
import InnAddSupplier from "../images/inn-add-supplier.png";
import InnSingleProduct from "../images/inn-single-product.png";
import InnEditProduct from "../images/inn-edit-product.png";
import InnSuppliers from "../images/inn-suppliers.png";
import InnSingleSupplier from "../images/inn-single-supplier.png";
import InnEditSupplier from "../images/inn-edit-supplier.png";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import "./Applications.css"

const InnVentoryMore = () => {
    const imageArray= [InnHome, InnProduct, InnAdd, InnSingleProduct, InnEditProduct, InnSuppliers, InnAddSupplier, InnSingleSupplier, InnEditSupplier]

    const images = imageArray.map((pic, index) => ({
        src: `${pic}`, 
        index: index
      }));
    return(
        <>
        
        <main className="single-project">

            <section className="description-container">

                    <p className="description-lg">
                    The Inn-Ventory app was designed as a way for businesses within the alcohol retail industry, mainly inns, pubs and clubs, to track and update their suppliers and product stocks in a quick and efficient manner. It also calculates the sale price of items from an entered cost price and a selected % markup applied by the user.
                    </p>
                    
            </section>

            <article className="images-wrapper-carousel">

                <Carousel images={images} hasThumbnails={false} isAutoPlaying={true} autoPlayInterval={10000}/>

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

export default InnVentoryMore