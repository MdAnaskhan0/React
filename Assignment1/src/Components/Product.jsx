import React from "react";

function Product({ pTitle, price, rating, pDescription, size }) {
    return (
        <div className="products">
            <img src="" alt="Product" />
            <h1>{pTitle}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{pDescription}</p>
            <button>Available Sizes: {size.join(", ")}</button>
            <button>Buy Now</button>
        </div>
    );
}

export default Product;
