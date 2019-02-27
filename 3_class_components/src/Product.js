import React from "react"

function Product(props){
    return(
        <div>
            <h3>Name: {props.p.name}</h3>
            <h4>Price: ${props.p.price}</h4>
            <h5>Description:{props.p.descrip}</h5>
            <hr></hr>
        </div>
    )
}

export default Product