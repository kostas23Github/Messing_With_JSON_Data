// Adds the filter query string to the url based on the input value on the input fields(filterKey & filterValue). 

export const filterEndpoint = () => {
    
    const filteredProp = document.querySelector("#filterKey").value;
    const filteredValue = document.querySelector("#filterValue").value;
    if (filteredProp && filteredValue) {
        return `filter?key=${filteredProp}&value=${filteredValue}`
    } else {
        return ''
    }

}