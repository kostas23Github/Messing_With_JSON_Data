// Adds the search query string to the url based on the input value in the search-term input field.

export const searchEndpoint = () => {
    const searchInput = document.querySelector('input#search-term');
    if (searchInput.value) {
        return `search?q=${searchInput.value}`
    } else {
        return ''
    }
}