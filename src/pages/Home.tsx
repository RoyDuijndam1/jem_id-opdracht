import {useEffect, useState} from "react";
import Card from "../components/Card";
import Product from "../Classes/Product";
import * as ProductApi from "../Connections/ProductApi"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [filters, setFilters] = useState<Record<string, string>>({})
    const [standingPlaceFilters, setStandingPlaceFilter] = useState<Record<string, boolean>>({})

    useEffect(() => {
        let query = "";
        setQuery(query)
    }, [nameField])

    useEffect( () => {
        (async () => setProducts(await ProductApi.get(10, 0)))()
    }, [query])

    return(
        <div className={"home"}>
            <div className={"home__filter"}>
                <label>Name <input name={"nameFilter"} onChange={changeQuery}/></label>
                <label>Height Minimum <input type={"number"} name={"heightMinimumFilter"} onChange={changeQuery}/></label>
                <label>Height Maximum <input type={"number"} name={"heightMaximumFilter"} onChange={changeQuery}/></label>
                <label>diameter Minimum <input type={"number"} name={"diameterMinimumFilter"} onChange={changeQuery}/></label>
                <label>diameter Maximum <input type={"number"} name={"diameterMaximumFilter"} onChange={changeQuery}/></label>
                <div className={"home__radio"}>
                    <span>standing place</span>
                    <div>
                        <input type={"checkbox"} name={"standingPlaceFilter"} value={"Sun"} onChange={addStandingPlaceFilters}/> <span>Sun</span>
                    </div>
                    <div>
                        <input type={"checkbox"} name={"standingPlaceFilter"} value={"Partial"} onChange={addStandingPlaceFilters}/> <span>Partial</span>
                    </div>
                    <div>
                        <input type={"checkbox"} name={"standingPlaceFilter"} value={"Shadow"} onChange={addStandingPlaceFilters}/> <span>Shadow</span>
                    </div>
                </div>
            </div>
            <div className={"home__cardHolder"}>
                {products.map((product, index) => <Card key={index} product={product}/>)}
            </div>
        </div>
    )
}

export default Home;