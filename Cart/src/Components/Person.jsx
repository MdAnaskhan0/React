import React from "react";

function Person(props){
    const { fName, lName, age, email } = props;
    return(
        <div className="People">
            <div className="name">
                <h1>{fName}</h1>
                <h1>{lName}</h1>
            </div>
            <div className="info">
                <p>{age}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Person;