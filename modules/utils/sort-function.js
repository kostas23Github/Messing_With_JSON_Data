// The sort function-enhanced with the function to accept an object's property name-sorts by that name an array of objects.

export const sortByProperty = (array, propertyName) => {

    const sortDirection = document.querySelector('#sort-direction').value
    let direction;
    if (sortDirection === 'ascending') {
        direction = 1
    } else {
        direction = - 1
    }
    return array.sort(function (a, b) {
        if (a[propertyName] < b[propertyName]) {
            return direction * - 1
        } else if (a[propertyName] > b[propertyName]) {
            return direction * + 1
        }
        return 0
    });
    
}