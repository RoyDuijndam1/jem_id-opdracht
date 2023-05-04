const url = "https://jemid-warmupapi.azurewebsites.net/api/products"

export async function get(pageSize: number, pageIndex: number) {
    try{
        return fetch(`${url}?pageSize=${pageSize}&pageIndex=${pageIndex}`)
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