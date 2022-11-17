import { endpoint } from './modules/url-endpoints/endpoint.js'
import { renderResponse } from './modules/render/fetch-response.js'
import { randomColor } from './modules/utils/random-color.js'
import { stateHandler } from './modules/utils/state-handler.js'


async function fetchUsers() {
    let usersURL = endpoint();
    // let usersURL = 'https://dummyjson.com/users/1/posts/filter?key=reactions&value=4'
    console.log(usersURL)
    const responseObj = await fetch(usersURL);
    try {
        if (!responseObj.ok) {
            const message = `An error has occured: ${responseObj.status} ${responseObj.statusText}`;
            throw new Error(message);
        }
    } catch (error) {
        return document.querySelector('body').innerHTML = `<span>You probably tried to search sth that doesn't exist or a parameter is wrong. If you already searched for sth and want to search again refresh the page first.</span> <br><span>Please refresh the page and try again.</span><br /><span>This is the error msg: <strong>${error}</strong></span>`
    }
    const response = await responseObj.json();
    renderResponse(response);
    document.querySelector('#sort-list').addEventListener('change', () => {
        renderResponse(response)
    });
}

const buttonHandler = () => {
    // Resets the results to empty, and calls the fetch API.
    const resultsDiv = document.querySelector('.results');
    if (resultsDiv.textContent) { // Resets the results when new are added.
        resultsDiv.textContent = '';
    }
    fetchUsers();
}
const button = document.querySelector('button');
button.addEventListener('click', buttonHandler);

// Sets the color of the serach button
const intervall = setInterval(() => { randomColor(button) }, 300)
setTimeout(() => { clearInterval(intervall) }, 30 * 1000)

document.addEventListener('change', stateHandler)

document.querySelector('#guide-button').addEventListener('click', () => {
    const guide = document.querySelector('.guide-text-container')
    if (guide.style.display == 'block') {
        guide.style.display = 'none'
    } else {
        guide.style.display = 'block'
    }
})


