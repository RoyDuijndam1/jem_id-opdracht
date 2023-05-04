import Product from "../Classes/Product";

const Card = ({ product } : {product: Product}) => {
    return (
        <div className={"card"}>
            <img className={"card__image"} src={product.photoUrl} alt={product.name}/>
            <div>
                <h5 className={"card__title"}>{product.name}</h5>
                <ul>
                    <li className={"card__listItem"}>hoogte: {product.height}</li>
                    <li className={"card__listItem"}>diameter: {product.diameter}</li>
                    <li className={"card__listItem"}>prijs: {product.price}</li>
                    <li className={"card__listItem"}>standplaats: {product.standingPlace}</li>
                </ul>
            </div>
        </div>
    )
}



export default Card ;