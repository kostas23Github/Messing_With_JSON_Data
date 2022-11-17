// TODO
// FOR TOMORROW -> Then some styling.

// async function fetchCarts() {
//     // Fetches the response obj
//     const response = await fetch(resource);
//     if (!response.ok) {
//         const message = `An error has occured: ${response.status}`;
//         throw new Error(message);
//     }
//     // Converts response object to JSON data 
//     const cartsObj = await response.json();
//     console.log(cartsObj.carts)
//     const carts = cartsObj.carts;
//     // body.innerHTML = carts;
//     carts.forEach(cart => {
//         let tr = document.querySelector('tbody').appendChild(document.createElement('tr'));
//         let id = tr.appendChild(document.createElement('td'));
//         let products = tr.appendChild(document.createElement('td'));
//         id.innerHTML = cart.id;
//         products.innerHTML = cart.products.length
//     });
// }
// fetchCarts();



// const url = new URL(url string)
// console.log(url.searchParams)

// const renderFilterKeyOptions = option => {
//     const filterKeyOption = document.createElement('option')
//     filterKeyOption.setAttribute('value', option)
//     filterKeyOption.textContent = option
//     document.querySelector('#filterKey').appendChild(filterKeyOption)
// }


/***    THE FUNCTION BELOW SHOWS HOW TO TAKE THE CKECKED PROPERTIES OF THE LIST AND HAVING ALREADY THE RESPONSE OBJ WITH ALL THE PROPS, FILTER OUT THE ONES NOT CHECKED. ALSO RENDERS THE RESULTS ****/

// The results of the fetchUsers() sorted/not are rendered to the browser by this function
// const renderResults = array => {
//     const resultsDiv = document.querySelector('.results');
//     const optionsDiv = document.querySelector('#options');
//     let checkedValues = [];
//     if (resultsDiv.textContent) { // Resets the results when new are added.
//         resultsDiv.textContent = '';
//     }
//     for (const child of optionsDiv.children) { // Stores the selected values that the results will be filtered by.
//         if (child.checked) {
//             checkedValues.push(child.value);
//         }
//     }
//     // console.log(checkedValues)
//     for (const property of array) {
//         // console.log(property)
//         const pre = resultsDiv.appendChild(document.createElement('pre'))
//         if (checkedValues.length) {
//             // console.log(2)
//             for (const value of checkedValues) {
//                 pre.textContent += ` ${value}: ${property[value]},`;
//             }
//         } else {
//             // console.log(1)
//             pre.textContent = renderObjectEntries(property);
//         }
//     }
// }