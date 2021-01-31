# The project
html and css cheatsheet/crash course

# Location
The core material resides in `htmlcs` subdirectory, as node.js/express application. Files in root directory are 
- scratchpad files, like `playground.html`
- showcases like `shadows.html`
- illustrations of a quirk/problem `like pre-width-problem.html`

#Building and running
Change the directory to htmlcs:

**>** `cd htmlcs`

Install project:

**>** `npm install`

[See here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes) on how to install with no need to restart the server on any change to source files.

Run with:

`DEBUG=htmlcs:* npm start`

And access http://localhost:3000/htmlcs.html