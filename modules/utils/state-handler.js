// Disables the inputs that shouldn't be filled when another input is filled.

export const stateHandler = () => {

    const searchInput = document.querySelector('input#search-term')
    const filteredKey = document.querySelector("#filterKey")
    const filteredValue = document.querySelector("#filterValue")
    const id = document.querySelector('input[name="id"]')
    const option = document.querySelector('select[name="userOptions"]')
    let stateArr = [searchInput, filteredKey, filteredValue, id, option]
    if (stateArr.some(state => state.value)) {
        if (id.value || option.value) {
            stateArr.filter(state => !state.value && state !== id && state !== option).map(state => {
                state.disabled = true
            })
        } else if (filteredKey.value || filteredValue.value) {
            stateArr.filter(state => !state.value && state !== filteredKey && state !== filteredValue).map(state => {
                state.disabled = true
            })
        } else {
            stateArr.filter(state => !state.value).map(state => {
                state.disabled = true
            })
        }
    } else {
        stateArr.map(state => state.disabled = false)
    }
}
