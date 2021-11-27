 dependencies 

 - python3 -m venv venv_name or virtualenv venv_name
-  soruce venv/bin/activate
-  pip install -r requirments
-  python3 manage.py makemigrations
-  python3 manage.py migrate
-  python3 manage.py runserver

How to run the backend?
-After cloning the repo then cd Pinterest/backend/
-Create your virtual environment 
	for windows:
		-Open PowerShell on the same level for backend dir 
		-Run this command to create your venv 
			"python3 -m venv <your environment name>"
		-Activate your venv by this command
			"<your environment name>/Scripts/activate"
-Go to backend directory "cd backend"
-Install the project requirements "pip install -r requirements"
-"py manage.py makemigrations"
-"py manage.py migrate"
-"py manage.py runserver" => you should see "Starting development server at http://127.0.0.1:8000/"		
