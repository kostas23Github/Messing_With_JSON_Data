import { renderListOptions } from "./dropdown-options.js";
import { renderCheckboxOptions } from "./dropdown-options.js";
import { sortByProperty } from "../utils/sort-function.js";

export const renderResultsArray = (array) => {
    // Is used if the element to be rendered is an array.
    const resultsDiv = document.querySelector('.results')
    resultsDiv.innerHTML = ''
    let secondRender = document.querySelector('#sort-list').hasChildNodes();
    if (secondRender) {
        console.log('what da fuck dawg!!')
        sortByProperty(array, document.querySelector('#sort-list').value)
    }
    for (const property of array) {
        const p = resultsDiv.appendChild(document.createElement('p'))
        p.setAttribute('class', 'result-p')
        let arr = renderObjectEntries(property, secondRender).split(',')
        arr.map(element => {
            // All this code is to display each obj's prop in a new line. Displays the obj in multiple lines each one a span element.
            const span = document.createElement('span')
            span.setAttribute('class', 'results-span')
            p.appendChild(span)
            p.appendChild(document.createElement('br'))
            return span.textContent = element
        })
        secondRender = true
    }
    // console.log(document.querySelector('.result-p').lastElementChild)
    // console.log('Am i executed?')
}

export const renderObjectEntries = (obj, flag = true) => {
    // The result obj cannot be rendered by the browser so i convert each property to an array(Object.entries()) and then to a string to be displayed. This function is used by the renderResultsArray/renderResultsObj functions.
    let textContent = '';
    for (const [key, value] of Object.entries(obj)) {

        if (!flag) {
            renderListOptions(key, 'select#sort-list')
            renderCheckboxOptions(key, 'div#display-options')
        }

        if (typeof (value) === 'object') {
            textContent += `${key}:` + renderObjectEntries(value)
            continue
        }

        textContent += `${key}: ${value},`
        
    }
    return textContent
}