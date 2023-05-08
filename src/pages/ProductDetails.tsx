import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as ProductApi from "../Connections/ProductApi";
import Product from "../Classes/Product";
import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        if (id === undefined || isNaN(Number(id))) return;

        (async () => setProduct(await ProductApi.getSingle(parseInt(id))))()
    }, [id]);

    return(
        <div className={"productDetails"}>
            <img className={"productDetails__image"} src={product?.photoUrl} alt={product?.name}/>
            <div className={"productDetails__right"}>
                <h2>{product?.name}</h2>
                <p>{product?.description}</p>
                <span>prijs: {product?.price}</span>
                <span>hoogte: {product?.height}cm</span>
                <span>diameter: {product?.diameter}cm</span>
                <span>staan plaats: {product?.standingPlace}</span>
                <span>water behoefte: {product?.wateringNeeds}</span>
            </div>

        </div>
    )
}

export default ProductDetails;