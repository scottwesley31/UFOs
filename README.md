# UFOs
Module 11

## Overview of Project
Dana, a data journalist from Oregon who is interested in UFOs, has a JavaScript file full of UFO sighting data (date, location, sighting duration, sighting description, etc.) She has a goal for visualizing this data on a webpage which displays all of the UFO data in a table with a user-filtering functionality. Using HTML, JavaScript, and CSS she put together a website that can filter the data for date only.

### Purpose
The purpose of this project was to pick up where Dana left off and to further develop the search/filter functionality of the webpage to include filtering by city, state, country, and shape in addition to date. Following refactoring of JavaScript and HTML files, the webpage allows for users to filter for multiple criteria at the same time.

## Results
This section details the changes that were made to the JavaScript and HTML files to add the multiple criteria filtering functionality:

### Creation of List Items in index.html
In the `index.html` file which details the webpage set up, 4 additional list items were nested under the `<ul />` section of the `<form />` tag. These list items generate an input bar for the other search criterion of interest; city, state, country, and shape.

Here is the code:
![user_form](https://user-images.githubusercontent.com/107309793/187806023-e70ec80b-40f2-4f2d-8901-f1a28ab8ccc5.png)

### Addition of an `updateFilters()` Function to app.js
A new function was created in the `app.js` file associated with the webpage called `updateFilters()`. The function essentially stores the HTML filter ID and the value entered from the user input field in an empty dictionary. This dictionary is referenced in another function which is responsible for filtering the table (which is described below.

Here is a screenshot of the `updateFilters()` function:
![updateFilters_function](https://user-images.githubusercontent.com/107309793/187806648-52eed2cd-04a5-41ff-9037-ce122fecdb99.png)


### How to perform search


## Summary
### One drawback of webpage
### Two additional recommendations for further development
