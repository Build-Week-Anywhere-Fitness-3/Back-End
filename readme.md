# Send all data in lowercase

# Adding New User

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/auth/register

send username, password, role in json formate as following example:

{
"username": "admin",
"password": "admin",
"role": "instructor"
}

the role has to be either "instructor" or "client"

# How to Login

#### Admin for Instructor:

username: admin <br>
password: admin

#### Client for Client:

username: client <br>
password: client

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/auth/login

send username and password in json format such as following

{
"username": "admin",
"password":"admin"
}

# Classes End Points

This end point will return list of all classes. user has to be authenticated

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/classes

this end point will return a particular class by id

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/classes/:id

seach for classes

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/classes/search

pass class name in json format <br> passing "yoga" will return all classes that has yoga in its name

{
"name":"yoga"
}

# Instructor End Points

## Add Class

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/ins/create-class

The group passed in has to be an existing group:

{
"name": "yoga 501",
"group": "yoga",
"class_date": "2020-12-25",
"start_time": "12:30pm",
"duration": 60,
"intensity_level": 7,
"location": "Austin",
"current_size": 2,
"max_size": 15
}

### update class

Authorization PUT: https://anywhere-fitness-lambda.herokuapp.com/api/ins/classes/:id

### remove class

Authorization DELETE: https://anywhere-fitness-lambda.herokuapp.com/api/ins/classes/:id

### retrieve list of all groups

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/ins/groups

### retrieve single group

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/ins/groups/:id

### create group

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/ins/create-group

pass data in json name only: <br>
{
"name": "my new group"
}

### update group

Authorization PUT: https://anywhere-fitness-lambda.herokuapp.com/api/ins/groups/:id

### delete group

Authorization DELETE: https://anywhere-fitness-lambda.herokuapp.com/api/ins/groups/:id

# Client End Points

### Reserver a class

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/cli/add-reservation

pass the class id in json format: <br>
{
"id": "1"
}

### get all reservations

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/cli/reservations

### get single reservation

Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/cli/reservations/:id

### remove reservation

Authorization DELETE: https://anywhere-fitness-lambda.herokuapp.com/api/cli/reservations/:id
