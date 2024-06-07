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

## Requirements 🔧


| Requirement       | Version         | Description                                                                                     |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------|
| Node.js           | >= 12.x         | JavaScript runtime environment. Ensure you have Node.js installed.   (check ```node -v```)                           |
| npm      | >= 6.x   | Node package manager. Comes with Node.js (npm) or can be installed separately (yarn). (check ```npm -v```)           |
| Express           | >= 4.x          | Web framework for Node.js. Used for building the API. (check ```npm list express```)                                     |
| MySQL             | >= 8.x          | Relational database management system. Required if your application uses MySQL as a database. (check ```mysql --version```)  |                  |
| Git               | latest          | Version control system. Necessary if you are cloning the repository. (check ```git --version```)                            |

## How To Use 🔧

From your command line, first clone Simplefolio:

bash
#### Clone the repository branch
$ ``git clone -b nodeJS_Express_API https://github.com/mimmato/portfolio.git``

#### Move into the repository branch directory
$ `cd portfolio`


After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# 2022 Update - Fix Dependencies
$ npm audit fix
$ npm i @parcel/transformer-sass

# Install dependencies
$ npm install

# Start the development server
$ npm start
```
            

</body>
</html>