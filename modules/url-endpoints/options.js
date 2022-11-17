// Adds the id of the user and one of the cart/posts/todos of the user to the url.

export const optionsEndpoint = () => {

    const ID = document.querySelector('input[name="id"]').value;
    const option = document.querySelector('select[name="userOptions"]').value;
    if (ID && option) {
        return `${ID}/${option}/`
    } else {
        return ''
    }

}