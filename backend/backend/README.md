 dependencies 

 - python3 -m venv venv_name or virtualenv venv_name
-  soruce venv/bin/activate
-  pip install -r requirments
-  python3 manage.py makemigrations
-  python3 manage.py migrate
-  python3 manage.py runserver

How to run the backend?
1-After cloning the repo then cd Pinterest/backend/
2-Create your virtual environment 
	for windows:
		-Open PowerShell on the same level for backend dir 
		-Run this command to create your venv 
			"python3 -m venv <your environment name>"
		-Activate your venv by this command
			"<your environment name>/Scripts/activate"
3-Go to backend directory "cd backend"
4-Install the project requirements "pip install -r requirements"
5-"py manage.py makemigrations"
6-"py manage.py migrate"
7-"py manage.py runserver" => you should see "Starting development server at http://127.0.0.1:8000/"		
