# Project 14: Around The U.S.
## William Schutte
## October 2020
Practicum by Yandex
-----
[View this project here!](https://william-schutte.github.io/react-around-auth/)

### Overview
This project adds to the foundations of my previous React application. This version includes routes for signing
in and signing up, and is temporarily connected to an externally run server for user authentication. In the next
project, I will connect to my own custom API. 


### Techniques
This page stores a JWT to keep users logged in. It uses ReactRouter for navigation as well as state management
and higher-order components to protect routes and redirect users.

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

### First Review: 10/5/20
Changes by component: 
* EditProfilePopup: Moved close popup functionality to HandleUpdateUser() function in App
* EditAvatarPopup: Moved close popup functionality to HandleUpdateAvatar() function in App
* EditAvatarPopup: Converted to class component to take advantage of state for text field and to clear
    text on close
* AddPlacePopup: Changed initial textfield values to empty string instead of null
* AddPlacePopup: Moved close popup functionality to HandleAddPlace() function in App
* Header: Moved logOut function to App and passed in through props (all JWT modifications done in App)
* Login: Moved login function to App and passed through props (all api requests done in App)
* Register: Moved register function to App and passed through props (all api requests done in App)
* App: Added catch() blocks to all promises that did not have one

* auth.js: Removed unnecessary catch() blocks


