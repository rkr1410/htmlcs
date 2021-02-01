# The project
HTML5 element list, containing short description if there's anything interesting about the tag that's not common knowledge. Created as an effort to go through each element and learn the html, css and javascript along the way.  

# Contents
The core material resides in `htmlcs` subdirectory, as `Node.js/express` application.

`random` subdirectory contains:
- a previous attempt at the project as `index.html`
- showcases like `shadows.html`
- illustrations of a quirk/problem like `pre-width-problem.html`

# Building and running
Change the directory to `htmlcs` and install with:

`> npm install`

Run with:

`> npm start`

Access http://localhost:3000/htmlcs.html to interact. It is possible to see bare html just by opening `htmlcs.html` in the browser, but CSS won't be used (fixable by changing the path in source), and scripts won't be served (not fixable due to CORS and ES6 module use). 