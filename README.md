## A basic example on how to handle JSON Data
Use it freely.

## Summary
This project fetches a JSON file from https://dummyjson.com/ and renders what the user types in the input fields. In the current phase it only handles the /users endpoint. 

## Functionalities
In short it has the abillity to:
 - fetch all the users
 - fetch every user's cart/todo/product 
 - search for specific users based on first-name, last-name and e-mail 
 - sort in both directions 
 - filter the fetched data based on user input 
 - filter the displayed data based on user input again.
 - limit the results basd on user input

## Languages-Structure
This project uses mainly Javascript, some CSS3 for styling and HTML5.
The JS is structured in 2 main files, one to to handle the render logic and one to handle the url endpoint logic. Most files have the logic that handles one specific task mainly one function or 2 if they perform simillar tasks. An Utils folder stores functions that perform utility logic. The interaction with the DOM is handled solely by the users.js file.

## To execute
- Fork the project
- Make a local copy
- Run in your text-editor(No dependancies are nesessary)

