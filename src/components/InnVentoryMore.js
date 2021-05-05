import InnHome from "../images/inn-home-page.png";
import InnAdd from "../images/inn-add-product.png";
import InnProduct from "../images/inn-product-page.png";
// import "./Applications.css"

const InnVentoryMore = () => {

    return(
        <>
        <article className="images-wrapper">

<section className="image-container-more">
    <img src={InnHome} alt="Inn-ventory home page" />
</section>

<section className="image-container-more">
    <img src={InnProduct} alt="Inn-ventory products page" />
</section>

<section className="image-container-more">
    <img src={InnAdd} alt="Inn-ventory product adding form" />
</section>  

</article>  

<article className="text-wrapper">
<section className="description-container">
    <p className="description">
        The Inn-Ventory app was design as a way for businesses within the alcohol retail industry, mainly inns, pubs and clubs, to track and update their suppliers and product stocks in a quick and efficient manner. It also calculates the sale price of items from an entered cost price and a selected % markup applied by the user.
    </p>
</section>

<section className="mvp-containter">
    <h2 className="mvp">M.V.P</h2>
    <p>
        * The application should be able to track an individual product that will have a name, a description, a stock quantity, a cost price and a sale price.

        * The application must be able to track suppliers that will include a Name, an Address, a Telephone Number and a list of their Products.

        * The User should be able to Add new Products and Suppliers, Edit and Update the information they already have and Delete products they no longer stock or suppliers they no longer use.

        * The User should be able to view all items in stock as a list and all suppliers used as a list. These lists should provide information on the products or suppliers in one view.

        * The application should have a visually 

    </p>
</section>
</article>
        </>
    )

}

export default InnVentoryMore