export const renderResponseHeader = (text) => {
    // Renders the header of the the results shown below it.
    const resultsDiv = document.querySelector('.results')
    const h3 = resultsDiv.appendChild(document.createElement('h3'))
    return h3.textContent = text;
}

export const renderResultsObj = obj => {
    // Renders the header of an obj.
    const resultsDiv = document.querySelector('.results')
    const h5 = resultsDiv.appendChild(document.createElement('h5'))
    return h5.textContent = renderObjectEntries(obj)
}