GoogleAppEngine
===============

*Google App Engine Python Mashup, for Cloud Computing Module*

------------

Source Code can be found here: [https://github.com/fifimac/GoogleAppEngine](https://github.com/fifimac/GoogleAppEngine)
Deployed application can be found here: [http://fifissportsfriends.appspot.com/](http://fifissportsfriends.appspot.com/)
------------

## SUMMARYGoogle app engine is a platform as a service (PaaS) offering which facilities developers to build and run applications on Google's infrastructure. Fifissportsfriends has been built as software as a service (SaaS), which sits on the Google app engine platform. 
The application allows users of the Google platform to find sporting events in their area they can attend, or create a new event of their own. To use the Google platform a user only needs have a Gmail account. 
A typical use scenario of the application would be if a person was new in an area they could find people in the area who likes playing Tennis, and arrange to meet up to play a game. Users can use their existing Google Contacts to add them to the event. If an event is created, it will be added to the users Google calendar, if a friend agrees to the event, it will be added to their calendar. ## TECHNOLOGYThis application is deployed on the cloud in Google’s app engine environment. It uses a python 2.5 runtime interpreter and standard Python libraries. The advantages of using the Google app engine environment include:
* Easy to build, * Easy to maintain, * And easy to scale as the application’s traffic and data storage needs change. 
All of the above are common to most cloud offerings, however Google app engine deliveries the added advantage of additional features such as integration to their popular ecosystem of services like Google mail and calendars. ## IMPLEMENTATION### Basics:1.	Sign in to Google App Engine using you (the developers) Google login.2.	Click the create application button. This will re-direct to a page asking for a mobile number to send a setup code to. Enter your mobile number, a code will be text to your phone.3.	Enter an application Identifier, this must be unique, try a name and click the Check Availability button.The application identifier for this application was fifissportsfriend.4.	Enter an Application Title; the application title for this application is Sports Friend. 5.	Agree to the Terms and Conditions. 6.	Fill in the rest of the form. 7.	Create the application.8.	Download the Google App Engine SDK for Python.9.	Run the installer for the Google App Engine.10.	Install Python.11.	Run the Google App Engine Launcher.12.	Open the Google App Engine Launcher.13.	Create new application and add the lecturer’s boiler plate sample.14.	Deploy the application to the Google App Engine.15.	Check it is working and monitor the Google app engine dashboard.
### Additional changes#### 1.

The html and css of the original boiler plate sample was tidied up.This was achieved by:
* Removing deprecated code,* Restructuring the CSS and JS files to all sit within a static folder,* Refracturing code associated with these files * And changing the CSS to give the site a simpler aesthetic.#### 2.	
A live tweeter feed of the sportsman Rory McIlroy activities was added to replace the static News Items. ## FUTURE IMPROVEMENTS### Application Issues: #### Issue 1:This application was originally developed in Python 2.5 runtime. Python 2.5 has deprecated. It would have been best practice to migrate the application to  python 2.7, however I was decided that the project time line was too short to migrate. For future improvement it is strongly recommended that the application migrates to the supported version.#### Issue 2:The “create event” form is not functioning and the myEvents and Events are not displaying correctly. Future improvements of 