# Description
This is the Comet of Dreams website.  The site is built off of Django (Python) and React.js (JavaScript).

Will use Heroku for web hosting and Google Domains for Domain Registration.

# Server Features implementing - With Django
1. Blog/News - Keeps a database of full articles of what COD is duing currently.
2. Admin Dashboard (CMS) - For tracking media images/ sound/ video
3. CRM (Admin Dashboard) - interaction tracking, lead management, email manager, reporting and analytics, todo list for COD, etc.
4. eCommerce Store - Sell digital downloads and other merchandise

# Client Features implementing
- HTML5 - Look, including iframe tags for streaming links
- CSS3 - Styling
- React.js - Interactivity and look
- Bootstrap - Most likely for styling
- Howler.js - Maybe for streaming music links.

# References of building the Website:
- Django-React connectivity: https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react and https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b

# Server side - Details
A dependency for this project on the server side is Django.

Using pipenv as the virtual environment, Pipfile and Pipfile.lock are in the Root folder

Running on http://localhost:8000 off of pipenv for Django development

# Blog data components
* id - Integer
* Title - String
* Graphic images - file links? - Strings
* Description - String
* Audio/visual frames - links? - Strings
* start date - date
* end date - date
* created at - datetime
* updated at - datetime - only edit if it's admin
