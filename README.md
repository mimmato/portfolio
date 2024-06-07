<!DOCTYPE html>
<html>
<body>

# REST API 

## SUMMARY
This branch holds all files of the REST API I am writing. It is a simple API with several endpoints to manage user data and do some testing. 
At the time of writing this, the API uses "/users" as the endpoint and you can use several HTTP Methods to manage it (see [Available Endpoints](#available-endpoints)).

The application is written using node.JS and the Express framework. It uses a MySQL database to store data.

## Available Endpoints

| Method | Endpoint         | Description                                | Example                                                                                                            |
|--------|------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| GET    | /users           | Retrieve all users from the database.      | `GET http://localhost:3000/users`                                                                                  |
| GET    | /users/:id       | Retrieve a specific user by ID from the database. | `GET http://localhost:3000/users/123`                                                                              |
| POST   | /users           | Create a new user and store it in the database. | `POST http://localhost:3000/users` <br> Content-Type: application/json <br> `{ "name": "John Doe", "email": "john.doe@example.com" }` |
| DELETE | /users/:id       | Delete a user by ID from the database.     | `DELETE http://localhost:3000/users/123`                                                                           |
| PATCH  | /users/:id       | Update an existing user in the database.   | `PATCH http://localhost:3000/users/123` <br> Content-Type: application/json <br> `{ "name": "Updated Name", "email": "updated.email@example.com" }` |


            

</body>
</html>