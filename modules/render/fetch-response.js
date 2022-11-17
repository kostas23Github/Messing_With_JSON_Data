import { renderResultsArray } from "./results.js";
import { renderResponseHeader } from "./headers.js";
import { renderResultsObj } from "./headers.js";


export const renderResponse = response => {
    const option = document.querySelector('select[name="userOptions"]').value;
    let products, cart, todos, posts, users;
    switch (option) {
        case 'carts':
            if (!response.carts.length) {
                return document.querySelector('.results').textContent = 'This user\'s cart is empty!'
            } else {
                cart = response.carts[0]
                products = response.carts[0].products
                renderResponseHeader('The cart of the user -id=cartID-.')
                renderResultsObj(cart)
                renderResponseHeader('The list of all products-by id-this user has in its cart.')
                renderResultsArray(products)
            }
            break
        case 'todos':
            renderResponseHeader('The list of todos-by id-of the user.')
            todos = response.todos
            return renderResultsArray(todos)
        case 'posts':
            renderResponseHeader('The list of posts-by id-of the user.')
            posts = response.posts
            return renderResultsArray(posts)
        default:
            renderResponseHeader('A list of the selected user(s).')
            // console.log(response.users)
            users = response.users
            return renderResultsArray(users)
    }
    // Make whatever the user types in filter (key, values) to show the available parameters.
    // renderResultsObj(cart)

}