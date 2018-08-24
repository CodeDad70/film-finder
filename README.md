# README

Welcome to the FilmFinder 

See this app running online at Heroku :

https://agile-river-92406.herokuapp.com  

** A quick note on Heroku **
The reason Heroku is free is that if an app is idle it puts the server to sleep in memory. This can create a bit of a slow down on load. 
Additionally the watch list this app is accessing is a second Heroku app.. a rails API. There may be a bit of lag on initial load as it wakes the rails api up. Once the servers are awake things will run nice and smoothly. Thanks for your patience.



------Starting Up --------


This is a React/Redux app with a Rails backend. You will need Reat, Redux and Ruby on Rails installed in your local enviroment to run it:   

* To get started fork and clone this repository from github to your local environment. 

* Navigate to the film-finder/film-finder-api directory (cd film-finder/film-finder-api)

* Run bundle install in your terminal to install the Ruby on Rails dependencies

* In your terminal type rails s -p 3001 to start up the local API server. 

* In a second terminal navigate to the top level on the client directory ( cd film-finder/film-finder-client)

* Start the React app by typing yarn start. This should open a browser window, if it doesn't go to http://localhost:3000 to start the app. 

------Technical Notes --------

A few of the features I built into this app: 

* Utilizes React with Redux and Thunk for centralized storage of State and Asynchronous requests to both theMovieDb API and the Rails API. 

* This is a single page app. It uses react-routes to create a restful route structure but still employs the speed of the virtual DOM and client side rendering

* I built a Rails backend API with a Postgresql database for persistence of a watchlist (single user for now, authentication and profile management seemed beyond the scope of this project)

* Allows the user to search for either movies or actors using a drop down filter



