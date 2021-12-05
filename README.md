# Pinterest

[![Netlify Status](https://api.netlify.com/api/v1/badges/30096c8e-c784-4459-a6a2-29506ee1ff11/deploy-status)](https://app.netlify.com/sites/iti-pinterest/deploys)
[![Heroku](https://heroku-badge.herokuapp.com/?app=iti-pinterest-backend)]

# Contributers

<table>
  <tr>
    <td align="center"><a href="https://kataya1.com"><img src="https://avatars.githubusercontent.com/u/34242491?v=4&s=100" width="100px;" alt=""/><br /><sub><b>Mo. Kataya</b></sub></a></td>
    <td align="center"><a href="https://github.com/HassanTAli"><img src="https://avatars.githubusercontent.com/u/55896820?v=4&s=100" width="100px;" alt=""/><br /><sub><b>Hassan Tarek</b></sub></a></td>
    <td align="center"><a href="https://github.com/SaharMamdouh"><img src="https://avatars.githubusercontent.com/u/89229313?v=4&s=100" width="100px;" alt=""/><br /><sub><b>Sahar
 Mamdouh</b></sub></a><br />    </td>
    <td align="center"><a href="https://github.com/Kholoud731"><img src="https://avatars.githubusercontent.com/u/80483628?v=4&s=100" width="100px;" alt=""/><br /><sub><b>Kholoud Talaat</b></sub></a></td>
    <td align="center"><a href="https://github.com/MoaazMoustafa"><img src="https://avatars.githubusercontent.com/u/86559465?v=4&s=100" width="100px;" alt=""/><br /><sub><b>Moaaz Moustafa</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/bruno-0"><img src="https://avatars.githubusercontent.com/u/24655400?v=4&s=100" width="100px;" alt=""/><br /><sub><b>bruno-0</b></sub></a></td>
  </tr>
</table>

# backend

##  dependencies 
#### Python 3

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Enviornment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the root directory and running:

```bash
$ pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

##### Key Dependencies
 - [Django](https://www.djangoproject.com/) Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.

## installation steps
- After cloning the repo then cd Pinterest/backend/
### linux
- Create your virtual environment 
   -  ` python3 -m venv venv_name ` or  `  virtualenv venv `
  -  `soruce venv/bin/activate`
-  `pip install -r requirments`
-  `python3 manage.py makemigrations`
-  `python3 manage.py migrate`
- ` python3 manage.py runserver`
### for windows:
  - Create your virtual environment 
  - Open PowerShell on the same level for backend dir 
  - Run this command to create your venv 
  	"python3 -m venv 'your environment name'"
  - Activate your venv by this command
  	"'your environment name'/Scripts/activate"
- Go to backend directory "cd backend"
- Install the project requirements "pip install -r requirements"
- "py manage.py makemigrations"
- "py manage.py migrate"
- "py manage.py runserver" => you should see "Starting development server at http://127.0.0.1:8000"

# API
the api documentation is puplished on this [link](https://documenter.getpostman.com/view/11760714/UVJbJdUU)


# frontend

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Modules

### `npm install`
it will install modules from package.json and package.lock.json 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


