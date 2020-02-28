# send all data in lowercase

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

Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/auth/login

send username and password in json format such as following

{
"username": "admin",
"password":"admin"
}

# Class End Points

This end point will return list of all classes. user has to be authenticated
Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/classes

this end point will return a particular class by id
Authorization GET: https://anywhere-fitness-lambda.herokuapp.com/api/classes/:id

seach for classes
Authorization POST: https://anywhere-fitness-lambda.herokuapp.com/api/classes/search

pass class name in json format
{
"name":"i"
}
