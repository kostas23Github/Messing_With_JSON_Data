import { searchEndpoint } from "./search.js";
import { filterEndpoint } from "./filter.js";
import { optionsEndpoint } from "./options.js";
import { selectEndpoint } from "./select.js";
import { limitEndpoint } from "./limit.js";


export const endpoint = () => {
    const optionsEndpointResult = optionsEndpoint()
    const searchEndpointResult = searchEndpoint()
    const filterEndpointResult = filterEndpoint()
    const selectEndpointResult = selectEndpoint()
    const limitEndpointResult = limitEndpoint()
    if (optionsEndpointResult) {
        return `https://dummyjson.com/users/${optionsEndpointResult}`;
    } else if (searchEndpointResult) {
        return `https://dummyjson.com/users/${searchEndpointResult}${selectEndpoint('&')}&${limitEndpointResult}`
    } else if (filterEndpointResult) {
        return `https://dummyjson.com/users/${filterEndpointResult}${selectEndpoint('&')}&${limitEndpointResult}`
    } else if (selectEndpointResult) {
        return `https://dummyjson.com/users/${selectEndpointResult}&${limitEndpointResult}`
    } else {
        return `https://dummyjson.com/users/?${limitEndpointResult}`
    }
}