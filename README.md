## About
   - This is the personal project for unit 14(Intro-To_javascript) of [Data Visualization and Analytics](https://bootcamp.umn.edu/data/landing%20full/).
   - Built an interactive dashboard to explore the UFO sighting,  with the [dataset](./static/js/data.js) provided by the instructor. More details about the project can be found [here](#the-original-text-of-the-homework-assignment).
   - A snapshot of the app: 
  <img src="./static/images/app.png " width="800" height="400">
  
   - Link to the app: (https://yongjinjiang.github.io/JavaScriptUFOsightings/)
   - The tools used in buliding this app: [D3.js](https://d3js.org/), [Bootstrap](https://getbootstrap.com/), [jQuery.js](https://jquery.com/).

## Usage of the app
   - Playing on the [link]((https://yongjinjiang.github.io/JavaScriptUFOsightings/)) to the app: choose and input a data from the list of possible dates on the left side of the page. On clicking the "Button", a table will be created for UFO sightings for that given date.  Furthermore, a line of new filters "date", "city", "state", "country", "shape" will appear at the bottom of the table. When you click a filter, a dropdown manu with possible values can be seen. As you choose a value,  a new table would appear the line of filters.
   - To play the app locally, clone the repo and open the index.html. Yes, it's just that simple!!
    

## **_The original text of the homework assignment:_** 
# Unit 14 | Assignment - JavaScript and DOM Manipulation

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

## Your Task

### Level 1: Automatic Table and Date Search

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

### Assessment

Your final product will be assessed on the following metrics:

* Completion of all steps in chosen level

* Visual attraction

* Usability

**Good luck!**

- - -

### Copyright

Data Boot Camp © 2018. All Rights Reserved.
