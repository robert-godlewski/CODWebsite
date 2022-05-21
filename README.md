# Description
This is the Comet of Dreams website.  The site is built off of Django (Python) and React.js (JavaScript).

Will use Heroku for web hosting and Google Domains for Domain Registration.

# Server Features implementing - With Django
1. Admin Dashboard (CSM/CRM) - messaging, handeling email lists, todo list for COD, etc.
2. Blog/News - Keeps a database of full articles of what COD is duing currently.
3. eCommerce Store - Sell digital downloads and other merchandise

# Client Features implementing
- HTML5 - Look, including iframe tags for streaming links
- CSS3 - Styling
- React.js - Interactivity and look
- Bootstrap - Most likely for styling
- Howler.js - Maybe for streaming music links.

# References of building the Website:
- Django-React connectivity: https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react and https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b

# Server side - Details
A dependency for this project on the server side is Django
using pipenv as the virtual environment, Pipfile and Pipfile.lock are in the Root folder

Running on http://localhost:8000 off of cod_server which runs the whole site (project in django)

Need to make a virtual environment in the root folder: % pip install pipenv

activating virtual environment: % pipenv shell

deactivating virtual environment: % deactivate

# Server side - Server folder
Running the server: % python3 manage.py runserver

end server by using CONTROL C
