import React from "react";

function Cart({ cartTitle, cartDesc, price }) {
    // console.log(props); // Props value can be seen in console
    // const { cartTitle, cartDesc }  = props; // Destructuring props
    return (
        <div>
            <div className="cart-design">
                <h3 className="Title">{cartTitle}</h3>
                <p className="description">{cartDesc}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Cart;