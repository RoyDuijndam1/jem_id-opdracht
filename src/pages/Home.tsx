import {ChangeEvent, useEffect, useState} from "react";
import Card from "../components/Card";
import Product from "../Classes/Product";
import * as ProductApi from "../Connections/ProductApi"
import "../styles/Home.css"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [filters, setFilters] = useState<Record<string, string>>({})
    const [standingPlaceFilters, setStandingPlaceFilter] = useState<Record<string, boolean>>({})

    //creates a query with the different filters that were set. If the standingplace filter is set parse them into a
    //and add them to query string. if the query string is empty only execute the standingplacefilter
    useEffect(() => {
        let query = new URLSearchParams(filters).toString();
        const standingPlaceFilterQuery = Object.entries(standingPlaceFilters)
            .filter(([_, value]) => value)
            .map(([key, _]) => `standingPlaceFilters=${key}`).join('&');

        if (query === '') {
            query = standingPlaceFilterQuery
        } else {
            query = `${query}&${standingPlaceFilterQuery}`;
        }

        (async () => setProducts(await ProductApi.get(10, 0, query)))()
    }, [filters, standingPlaceFilters])

    //this changes the filters. It adds and removes filters from the filters variable
    const changeQuery = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFilters(prevState => {
            const filters = {...prevState};

            if(value === "") {
                delete filters[name];
                return filters
            }
            return {...filters, [name]: value}
        })
    }

    const addStandingPlaceFilters = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
        setStandingPlaceFilter(prevState => ({ ...prevState, [value]: checked }));
    }

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