angular-firebase
===========================================

##About 

This is a sample for demonstrating how to use firebase simple login and chat features in an angular project. 
Its basically let users login to system with one of their social media accounts and have post on the chat page.  

Right now it only supports facebook for logins, but soon other platforms will be added.

All login and chat stuff happens on client side but I had to use NodeJS and ExpressJS for routing and so on.

[Here is a demo](http://angularfire.aws.af.cm)

##Set up instructions
You have to has a firebase account and a facebook app in order to run the application.
For more detailed instructions please take a look at [Firebase Docs](https://www.firebase.com/docs/)
 
 1. You have to sign in to firebase and get your **firebase** url.
 2. Then change the url in the config file under the web-app/scripts/configuration/config.js
 3. You also need to have a facebook app and some configuration. Take a look at [Documentation on Firebase](https://www.firebase.com/docs/security/simple-login-facebook.html)

##Installation
After you have done your configuration:

1. npm install
2. node app.js
3. Open your browser and load the URL http://localhost:8080



## TODO
-  [] Add other platforms too (twitter, github and etc)
-  [] Layouts need some css
