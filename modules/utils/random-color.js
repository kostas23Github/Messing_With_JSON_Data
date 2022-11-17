// Sets the background-color property of an element to a random color value
export const randomColor = element => {
    let color = `rgb(${Math.floor(Math.random() * 56 + 150)}, ${Math.floor(Math.random() * 56 + 100)}, ${Math.floor(Math.random() * 56 + 150)}`
    element.style.backgroundColor = color
}