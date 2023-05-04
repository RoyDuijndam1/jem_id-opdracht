import {useEffect, useState} from "react";
import Card from "../components/Card";
import Product from "../Classes/Product";
import * as ProductApi from "../Connections/ProductApi"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [query, setQuery] = useState("")
    const [nameField, setNameField] = useState("")

    useEffect(() => {
        let query = "";
        setQuery(query)
    }, [nameField])

    useEffect( () => {
        (async () => setProducts(await ProductApi.get(10, 0)))()
    }, [query])

    return(
        <div>
            {products.map((product : Product, index: number) => <Card key={index} product={product}/>)}
        </div>
    )
}

export default Home;