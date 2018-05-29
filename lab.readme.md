## Lab To-Do-List React
This is an introduction to modularizing JSX elements and passing props from parent to children. This also is an introduction to chainging views in terms of url using the react-router-dom.

## Code style
eslint-airbnb

## Tech/framework used
React Library
React Router Dom
Jest
Cypress

## Features

This program allows the user to navigate from the homepage (i.e. Landing Page) to the Dashboard where they can manage a to-do-list.

At the Dashboard the user can input a task they need to do and later as they complete those said tasks they can delete them with a simple [ X ]. 

By doubling clicking on a created task, the user can update the selected task.


## Installation and How to Use
In order to install this this program and run it from your own computer follow these simple steps:
``` cd ~```
```git clone https://github.com/Deliman206/27-reddit-search.git```
```npm i```
```npm run watch```

Now enter enter your tasks and start managing your objectives! 

## Testing
This program using Cypress.io to test for functionality of React Components. It captures state and allows the dev to view the enviroment during each action against the state. 
To launch the test suite enter the following in the terminal. 

```npm run test```

When the Cypress application window opens select 
```to-do-list.js``` 
The Cyrpess enviroment will run and the user can see all actions being taken against the state of the react components.

## License

MIT © [Sean](https://github.com/Deliman206)