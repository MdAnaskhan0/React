import React from "react";

function Cart() {
    const date = new Date()
    return (
        <div>
            <div className="cart-design">
                <h3 className="Title">Call Family</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae iste nobis? Porro, quos unde!</p>
                <p className="dateTime">{date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</p>
            </div>
        </div>
    )

}

export default Cart