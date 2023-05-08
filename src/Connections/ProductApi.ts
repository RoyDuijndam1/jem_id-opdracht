import product from "../Classes/Product";

const url = `${process.env.REACT_APP_PRODUCT_API}/products`

export async function get(pageSize: number, pageIndex: number, query: string) {
    try{
        return fetch(`${url}?pageSize=${pageSize}&pageIndex=${pageIndex}&${query}`)
            .then(response => response.json())
            .then(data => data.products)
    } catch (error) {
        console.log(error);
    }
}

export async function getSingle(id: number) {
    try{
        return fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(data => data as product)
    } catch (error) {
        console.log(error);
    }
}