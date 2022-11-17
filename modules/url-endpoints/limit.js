// Takes the limit set by the user and puts it onto the url. As a result it limits the results shown.

export const limitEndpoint = () => {

    const limit = document.querySelector('#range');
    if (limit.value < 1) {
        limit.focus()
        alert('Check the label!!')
    } else {
        return `limit=${limit.value}&`
    }
    return ''

}