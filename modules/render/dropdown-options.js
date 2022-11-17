export const renderListOptions = (option, parent) => {

    // Renders the select's element option elements.
    const optionElem = document.createElement('option')
    optionElem.setAttribute('value', option)
    optionElem.textContent = option
    document.querySelector(parent).appendChild(optionElem)

}

export const renderCheckboxOptions = (option, parent) => {

    const optionElem = document.createElement('input')
    optionElem.setAttribute('value', option)
    optionElem.setAttribute('type', 'checkbox')
    optionElem.setAttribute('name', option)
    const labelElem = document.createElement('label')
    labelElem.setAttribute('for', option)
    labelElem.textContent = option
    if (!document.querySelector(parent).hasChildNodes()) {
        const h5 = document.createElement('h5')
        h5.textContent = 'Hit the search button to apply the selected display filters.'
        document.querySelector(parent).appendChild(h5)
    }
    document.querySelector(parent).appendChild(labelElem)
    document.querySelector(parent).appendChild(optionElem)
    document.querySelector(parent).appendChild(document.createElement('br'))
    
}
