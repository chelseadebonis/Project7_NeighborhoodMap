# Project Overview

This project is utilizing Google Maps API and the foursquare API to fetch different pizza locations in Pittsburgh, PA and display them on a map. By clicking on the markers the names of different locations will display and the map will zoom in with a marker animation. By clicking on the hamburger menu in the left hand corner you will have the option to filter locations by name.  


## How to Run this Project

* install all project dependencies with 'npm install'
* start the development server with 'npm start'



## Service Worker

This project utilizes create-react-app's defaulter service worker.
To see service worker, which only runs in production mode, you must:
* run npm run build
* run serve -s build
* then deploy the project


## What You're Getting
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
|   ├── manifest.json
│   └── index.html
└── src
    ├── App.css # Styles
    ├── App.js # Contains map functionality
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css
    ├──index.js
    ├──logo.svg
    ├──serviceWorker.js # service worker must be ran in production mode
    ├──utils.js
    |
    ├──components
    │   ├── Sidescreen.js # Contains sidescreen functionality
    ├──imgs
        ├── close_icon.png
        ├── menu_icon.svg



## Attributes

close_icon by Icons8 at 'https://icons8.com'
menu_icon from 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'

Help with the project from:
-Ryan Waite's walkthrough at 'https://www.youtube.com/watch?v=5J6fs_BlVC0&t=637s'
-Doug Brown's FEND Project 7 Walkthrough at 'https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be'
-Yahya Elharony's walkthrough series on YouTube 'https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA'
-Slack Project 7 Project Channel

-src/utils.js was copied with Ryan Waite's permission 'https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js'.
