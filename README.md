# UFOs
Module 11

## Overview of Project
Dana, a data journalist from Oregon who is interested in UFOs, has a JavaScript file full of UFO sighting data (date, location, sighting duration, sighting description, etc.) She has a goal for visualizing this data on a webpage which displays all of the UFO data in a table with user-filtering functionality. Using HTML, JavaScript, and CSS she put together a website that can filter the data for date only.

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

### Addition of a `filterTable()` Function to app.js
Another function was modified in the `app.js` file which utilizes the `filter` dictionary obtained from the user input above and iterates through the `data.js` file to rebuild the table. The `buildTable()` function (not detailed here) adds the filtered data to the `index.html` file in HTML format. Below all the funtions in the `app.js` file is a d3 function which is listening for user input changes, causing the initiation of the `updateFilters()` function and subsequently the `filterTable()` and `buildTable()` functions.

Here is a screen shot of this section of code:

![filterTable_function](https://user-images.githubusercontent.com/107309793/187807617-5d39a7c1-90a8-4a27-b328-106d0a0d297d.png)

### How to Perform Search
After navigating to the webpage (`index.html`) the original table displays at the bottom of the page. Notice that the filter bars have placeholder text within them as examples of what the user can type in the field.

Webpage - Top Half
![webpage_1](https://user-images.githubusercontent.com/107309793/187810221-6f9bccbd-ee97-4d4c-9f42-919226f82ff2.png)

Webpage - Lower Half
![before_search](https://user-images.githubusercontent.com/107309793/187808205-161b1a13-5987-4b69-97ff-7578ced43712.png)

Once the user types in one of the fields and clicks anywhere out of this filter bar, the table will automatically store this information and rebuild accordingly. "ca" was typed in the state field as an example in this screenshot:

![ca_search](https://user-images.githubusercontent.com/107309793/187808334-0093ddfe-10e2-4681-82eb-83ffd4cb99b7.png)

A subsequent an additional filter can be added to the newly filtered table by typing in another field. "la mesa" was typed into the city field as an example of adding another filter:

![la_mesa_search](https://user-images.githubusercontent.com/107309793/187808432-140c76b3-9f48-436b-a719-b13770d60162.png)

The other fields can be utilized in whatever order to filter the table further.

## Summary

### One Drawback of Webpage
One major drawback of the webpage is that the user has to skim the original table to find terms that they can filter with in their appropriate fields. Because the user has the ability to type anything they want into the filter bars, it's possible for them to input text that returns an empty table which is unhelpful for the functionality of the webpage overall. This could be addressed by changing the fields into dropdown menus instead.

### Two Additional Recommendations for Further Development
1) As mentioned above, **dropdown menus** for each filter option would be much more appropriate for this webpage. This would ensure that no matter what the user selects, the table will display filtered data rather than an empty table. It restricts the options that the user has for searching for information but it is much more effecient than having them try random inputs or scroll the length of the table to figure out appropriate inputs.
2) The `data.js` **file needs to be cleaned**. Some of the data appears corrupted, as is seen in the last row of the "ca" search screenshot above which reads, "Three red lights over the San Diego area - IT&#39S A HOAX YET AGAIN&#33&#33". This comes across as less credible data which takes away from the overall function of this webpage; to make users consider if UFO sightings are real.
