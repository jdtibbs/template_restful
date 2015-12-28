# template_restful
A RESTful service template built with Express.

A work in progress.

####Steps
Detailed steps [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). 

1. Create a git project.

1. Create package.json: npm init

1. Install Express: npm install express --save

1. Code the app.

1. cd into the git project.

1. Log into Heroku: heroku login

1. Create Heroku app: heroku create [app name]

1. Deploy code: git push heroku [master || git branch]

1. Ensure one instance of the app is running: heroku ps:scale web=1

1. Open app: heroku open 