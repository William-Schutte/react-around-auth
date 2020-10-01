# Project 10-11: Around The U.S.
## William Schutte
## August 2020
Practicum by Yandex
-----
[View this project here!](https://william-schutte.github.io/around-react/)

### Overview
This project represents work from the 10th and 11th projects for the web-dev course. These projects involved converting my JS/CSS/HTML 
project page into a React page using the Create React App.

This adaptive page includes form validation, interactive popups, fade-in and fade-out animations, functional like and delete buttons,
modular JavaScript, and Object Oriented JS design.

    Project 11:
    Project 10: React markup and interface, JSX, functional components, state hooks

### Techniques
This page features a responsive design, editable content, multiple popup elements, editable form fields, and transition
animations.
Internally, the site is designed under BEM methodology.

### Technologies
* React
* NPM
* JS/JSX/HTML/CSS
* Git/GitHub
* Visual Studio Code
* Figma

-----


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Revisions:

### First Review: 8/18/20
* Destructured objects passed to ImagePopup component to make variable name more clear/easier to read
* Added dynamic alt attribute in ImagePopup
* Replaced ternary operator with && operator for picture title element
* Converted multiple promises (API calls in Main) into a single Promise.all()
* Fixed effect for API request to only run once upon mounting (passed empty array as second arg)
