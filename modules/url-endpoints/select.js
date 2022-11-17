// Takes the ckecked checkboxes and filters the results to display only the options of the checked ckeckboxes. 

export const selectEndpoint = (prefix = '?') => {

    const optionsDiv = document.querySelector('#display-options')
    let checkedValues = []
    for (const child of optionsDiv.children) { // Stores the selected values that the results will be filtered by.
        if (child.checked) {
            checkedValues.push(child.value);
        }
    }
    if (checkedValues.length) {
        let endpoint = `${prefix}select=`
        for (const value of checkedValues) {
            if (value !== checkedValues[checkedValues.length - 1]) {
                endpoint += value + ','
            } else {
                endpoint += value
            }
        }
        return endpoint + '&'
    } else {
        return ''
    }

}