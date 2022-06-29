# Description
This is the Comet of Dreams website.  The site is built off of Django (Python).  So far only has a blog to keep fans updated over time.

Will use Heroku for web hosting and Google Domains for Domain Registration.

# Server Features implementing - With Django
1. Admin Dashboard (/CMS) - For tracking music releases, media images/ sound/ video
2. CRM - interaction tracking, lead management, email manager, reporting and analytics, todo list for COD, etc.
3. eCommerce Store - Sell digital downloads and other merchandise - For now linking to bandcamp due to lack of revenue

# Client Features implementing
- HTML5 - Look, including iframe tags for streaming links
- CSS3 and Bootstrap - Styling
- React.js - Interactivity and look - Maybe Later on
- Howler.js - Maybe for streaming music links - Maybe, if necessary

# References of building the Website:
- Django-React connectivity: https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react and https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b

# Server side - Details
A dependency for this project on the server side is Django.

Using pipenv as the virtual environment, Pipfile and Pipfile.lock are in the Root folder

Running on http://localhost:8000 off of pipenv for Django development

# Todos:
1. Do a lot of the server end for everything (at least to get started)
2. Figure out basic template layout
3. Apply React to interact with the client
4. Make a Free Heroku account to push this project online via Comet of Dreams account.

# Server todos:
1. Edit the blog database to have a one to many relation where the "one" is the blog post and the "many" are digital reference links like spotify/ images/ videos/ etc.
2. Figure out a way to only have an admin delete blog posts and not others.

# CMS/ Admin Dashboard Plans: - Will need to implement
Stores Metadata and media for music releases and other static files on the webapp.  Might possibly use the Django Admin build and install the Django CMS plugin for this.

Website features:
* images - logos, pictures, etc.
* Style sheets - if applicable
* Native JavaScript files - if applicable
* Links to Music Release Metadata
* Links to Playlists
* About Comet of Dreams
* About each member - Only Robert Godlewski

Music Release Metadata:
* Release Date
* Songs
* Who worked on it - Producer, Composer, and Engineer
* Graphic Art
* Streaming Links - Spotify, Apple Music, Youtube, Amazon Music, etc.
* Description

# CRM Plans: - Might implement
Used for major business things, probably able to access through the CMS application:
* Interaction tracking and lead management
* Reporting and Analytics
* A todo list for COD
* Email Manager - Cannot implement with the Free version of Heroku, possibly separate app

Reporting and Analytics:
* Leads
* Todo List
* Email Subscribers - With Email Manager

Todo list: - Review CRM personal project I did for Coding Dojo for details and build - https://github.com/robert-godlewski/crm_app.git

Email Manager:
* Email optin form - First Name, Last Name, Email, optin check
* Email optout form
* Email Templates
* Log of Email campaigns

# eCommerce Store: - Will not implement right now
Will use this app to sell music and merchandise when I'm more in business:

Product ideas to sell:
* Digital WAV files
* USB cards - Music WAV files, Music Videos
* CDs
* Guitar Picks
* Drum Sticks
* T-Shirts
* Mixing Plugins that I created via code
* Other Merchandise
