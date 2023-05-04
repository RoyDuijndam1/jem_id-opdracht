import React from "react";
import {Link} from "react-router-dom";
import Product from "../Classes/Product";
import '../styles/Card.css';

const Card = ({ product } : {product: Product}) => {
    return (
        <Link to={`product/${product.id}`} className={"card"}>
            <img className={"card__image"} src={product.photoUrl} alt={product.name}/>
            <div>
                <h3 className={"card__title"}>{product.name}</h3>
                <ul>
                    <li className={"card__listItem"}>hoogte: {product.height}</li>
                    <li className={"card__listItem"}>diameter: {product.diameter}</li>
                    <li className={"card__listItem"}>prijs: {product.price}</li>
                    <li className={"card__listItem"}>standplaats: {product.standingPlace}</li>
                </ul>
            </div>
        </Link>
    )
}

export default Card ;