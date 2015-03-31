Front End Developer Coding Exercise
===================================

What you should build
---------------------

Qriously is a question company, so we would like you to build a small question unit.

The unit should provide the following functionality:

- it should render a question of your choice and 3 answer options
- it should be 320 x 50 pixels
- it should contain the meerkat from our logo
- the options should be clickable / tappable
- tapping an option should trigger an ajax call submitting the vote as a GET parameter and load the response.json
- the unit should display the results data provided in the JSON response


Deliverable
-----------

Fork this repo and commit your code to the fork.You should produce an html file index.html + all the resources that your unit needs.
Opening the index.html file in a browser should show the working unit. We will test this on iOS / Android / Chrome Desktop (webkit only).


Required Techniques
-------------------

- use touch events
- make the question & options configurable via a config object
- don't pollute the global namespace (except for the config)
- make it responsive, between 320 and 480 pixels width

Nice to haves
-------------

- size matters, make it as small as possible with as few http requests as possible
- no jQuery
- structure your code, use Common Js module syntax
- use Bower or NPM
- use Grunt, Gulp or Webpack
- use LESS / SCSS
- use no image files
- use a templating library, no hardcoded DOM in the index.html
- make it look nice
- add animations
- use es6 features

Resources
---------
Our logo [SVG](http://www.qriously.com/wp-content/uploads/2013/05/qriouslyLogoLightBackground.svg)


Happy Coding  
============
