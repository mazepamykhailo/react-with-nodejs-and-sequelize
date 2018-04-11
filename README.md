#### ================ In development stage ================

### The motivation
The main idea of this project is to create an application that works with relational database (MySQL in this one) providing data through NodeJS Express API and exploring React/Redux features and possibilities in the front-end.

### The project
You'll have contact with a simple login/logout feature, **JWT (JSON Web Token)** package to manage tokens and improve security between server and client communication, **HOC (High Order Component)** in React-side that calls an authorization middleware in the API backend for any Components that are children of it.

We already have 2 layers of CRUD, one of them has many from another. So we have explored a little bit of Sequelize ORM using features that measure tables relationship queries and how to use them properly in models and API, of course.

Another point is the data typing in React. The components are using **prop-types** npm package to specify type and requirement to properties. **No use of Flow**, not necessary.

> - The **client-side** is a React + Redux app based;
> - The **server-side** is built in NodeJS (Express) and works like an API server;
> - Sequelize ORM to manage and mantain relational database and maintain;
> - The [Passport](https://www.npmjs.com/package/passport) is basically a Express-compatible authentication middleware for Node.js.

### Tests
The server-side NodeJS application uses Mocha and Chai to test each API while, in the React application, we are using Jest to test components and any other React stuff.

Install mocha and chai globally to test through the CLI.

**If you have some suggestion, please let me know about it!**

### How it's organized (physically)?

#### Server-Side (NodeJS)
The **/server/** folder contains the NodeJS Express application. The server wasn't made by the official instalation preset that we can install from npm in CLI just because it was organized and focused since the blank file to the API management and NodeJS middlewares specific of this project. No unnecessary code and complexity.

>Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Client-Side (React)
Located in the **/client/** folder, the client-side application is a React/Redux full application built above the official skeleton pattern from **create-react-app** package, and customized to the app you will have contact. This app uses a lot of the most used patterns, techniques and packages used in generic applications.

>Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Dump (Database)
In the folder **/dump/** resides the SQL dumps containing the databases to run the application in your own development and test environment.

### Developed by
Rodrigo Quiñones Pichioli, since Mar/02/2018.
