# Vaping App

This is the backend, which processes a user input in order to send an email and send it to the database.
The email is sent through nodemailer API, and is currently using a personal email to send one.
There is also a connection to MongoDB as a database for information

## TODO
* create and use .env in backend and frontend
* setup .env See [ignoring-files](https://help.github.com/articles/ignoring-files/)
	* .env for each deployment enviroment
	* .env to store secrets 
* run mongo-db locally??
* documentation

## Development 
Click [me](./DEVELOPMENT.md) or goto DEVELOPMENT.md

## Running
```docker compose -f compose.yml -f production.yml up```