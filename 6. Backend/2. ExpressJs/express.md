## Table of Contents

1. [Library vs Framework](#library-vs-framework)
    - [Library](#library)
    - [Framework](#framework)
2. [Express](#express)
    - [Key Features](#key-features)
    - [Getting Started with Express](#getting-started-with-express)
      - [Explanation](#explanation)
      - [Note](#note)
    - [`app.use` in Express](#appuse-in-express)
      - [Syntax](#syntax)
      - [Examples](#examples)
         - [Using Middleware for All Routes](#example-1-using-middleware-for-all-routes)
         - [Using Middleware for a Specific Path](#example-2-using-middleware-for-a-specific-path)
         - [Serving Static Files](#example-3-serving-static-files)
      - [Key Points](#key-points)
    - [Sending a Response in Express](#sending-a-response-in-express)
      - [Common Methods of `res`](#common-methods-of-res)
         - [`res.send()`](#ressend)
         - [`res.json()`](#resjson)
         - [`res.status()`](#resstatus)
         - [`res.sendFile()`](#ressendfile)
         - [`res.redirect()`](#resredirect)
      - [Example: Combining Methods](#example-combining-methods)
      - [Key Points](#key-points-1)
    - [Common Methods of `req`](#common-methods-of-req)
      - [`req.params`](#reqparams)
      - [`req.query`](#reqquery)
      - [`req.body`](#reqbody)
      - [`req.headers`](#reqheaders)
      - [`req.method`](#reqmethod)
      - [`req.url`](#requrl)
      - [`req.path`](#reqpath)
      - [`req.ip`](#reqip)
      - [`req.cookies`](#reqcookies)
      - [`req.get()`](#reqget)
      - [Key Points](#key-points-2)
3. [Routing in Express](#routing-in-express)
    - [Basic Routing](#basic-routing)
    - [Route Parameters](#route-parameters)
    - [Query Parameters](#query-parameters)
    - [Chained Routing](#chained-routing)
    - [Router Middleware](#router-middleware)
    - [Handling 404 Errors](#handling-404-errors)
    - [Key Points](#key-points-3)
4. [Nodemon](#nodemon)
    - [Key Features](#key-features-1)
    - [Installation](#installation)
      - [Global Installation](#global-installation)
      - [Local Installation (as a dev dependency)](#local-installation-as-a-dev-dependency)
    - [Usage](#usage)
    - [Integration with `package.json`](#integration-with-packagejson)
    - [Benefits of Using Nodemon](#benefits-of-using-nodemon)

# Library vs Framework

## Library
A **library** is a collection of pre-written code that can be used to perform specific tasks. It provides reusable functions or modules that developers can call to accomplish particular functionalities without writing the code from scratch.

**Examples**: 
- `axios` (used for making HTTP requests).
- `lodash` (a utility library for JavaScript).
- `moment` (used for date and time manipulation).

## Framework
A **framework** is a set of pre-written code that provides a structure for developing software applications. It dictates the architecture and flow of the application, offering built-in tools and features to streamline development.

**Examples**: 
- `express` (a web application framework for Node.js).
- `angular` (a front-end web application framework).
- `django` (a web framework for Python).

# Express

Express is a minimal and flexible **web application framework** for Node.js. It provides a robust set of features to build web and mobile applications. Express simplifies the process of handling HTTP requests, routing, middleware integration, and more, making it a popular choice for building server-side applications.

## Key Features:
- **Routing**: Provides a powerful and flexible routing mechanism.
- **Middleware**: Supports middleware to handle requests, responses, and other application logic.
- **Templating**: Allows integration with templating engines like Pug or EJS for dynamic content rendering.
- **RESTful APIs**: Simplifies the creation of RESTful APIs.
- **Scalability**: Lightweight and scalable for building large-scale applications.

Express is widely used in the MERN stack (MongoDB, Express, React, Node.js) for building full-stack web applications.

## Getting Started with Express

To get started with Express, you need to install it in your Node.js project. Use the following command to install Express:

```bash
npm install express
```

Once installed, you can create a basic Express server. Here's an example:

```javascript
const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
```

### Explanation:
- **`require('express')`**: Imports the Express library.
- **`express()`**: Creates an instance of an Express application.
- **`app.listen(port, callback)`**: Starts the server and listens on the specified port.

### Note:
- **Ports** are the logical endpoints of a network connection that facilitate communication between a web server and a web client.

With this setup, you can now start building routes, integrating middleware, and creating APIs using Express.

## `app.use` in Express

The `app.use` method in Express is used to mount middleware functions or sub-application routers to the application. Middleware functions are executed sequentially for every incoming request that matches the specified path (or all paths if no path is specified).

### Syntax:
```javascript
app.use([path], middlewareFunction)
```

- **`path`** (optional): Specifies the base path for the middleware. If omitted, the middleware is applied to all routes.
- **`middlewareFunction`**: A function that executes for every request matching the path.

### Example 1: Using Middleware for All Routes
```javascript
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});
```

### Example 2: Using Middleware for a Specific Path
```javascript
app.use('/api', (req, res, next) => {
    console.log('API middleware triggered');
    next();
});
```

### Example 3: Serving Static Files
You can use `app.use` to serve static files like images, CSS, or JavaScript:
```javascript
app.use(express.static('public'));
```
This serves files from the `public` directory.

### Key Points:
- Middleware functions can modify the `req` and `res` objects or terminate the request-response cycle.
- Use `next()` to pass control to the next middleware or route handler.
- Middleware is executed in the order it is defined.

The `app.use` method is a powerful feature of Express that allows you to handle logging, authentication, error handling, and more.

## Sending a Response in Express

In Express, the `response` object (`res`) is used to send a response back to the client. It provides various methods to send different types of responses, such as text, JSON, files, or status codes.

### Common Methods of `res`:

1. **`res.send()`**:
    Sends a response of any type (string, object, buffer, etc.).
    ```javascript
    app.get('/', (req, res) => {
         res.send('Hello, World!');
    });
    ```

2. **`res.json()`**:
    Sends a JSON response.
    ```javascript
    app.get('/api', (req, res) => {
         res.json({ message: 'Welcome to the API' });
    });
    ```

3. **`res.status()`**:
    Sets the HTTP status code for the response.
    ```javascript
    app.get('/not-found', (req, res) => {
         res.status(404).send('Page not found');
    });
    ```

4. **`res.sendFile()`**:
    Sends a file as a response.
    ```javascript
    app.get('/file', (req, res) => {
         res.sendFile(__dirname + '/example.txt');
    });
    ```

5. **`res.redirect()`**:
    Redirects the client to a different URL.
    ```javascript
    app.get('/redirect', (req, res) => {
         res.redirect('/new-location');
    });
    ```

### Example: Combining Methods
You can chain methods like `res.status()` with `res.json()` to send a status code along with a JSON response:
```javascript
app.get('/error', (req, res) => {
     res.status(500).json({ error: 'Internal Server Error' });
});
```

### Key Points:
- The `res` object is used to control what the client receives as a response.
- Always ensure that each request ends with a response to avoid hanging requests.
- Use appropriate status codes to indicate the result of the request (e.g., `200` for success, `404` for not found, `500` for server errors).

These methods make it easy to handle various types of responses in an Express application.

### Common Methods of `req`

In Express, the `request` object (`req`) represents the HTTP request and contains information about the request, such as the URL, headers, query parameters, and body. It provides various methods and properties to access this information.

### Common Methods and Properties of `req`:

1. **`req.params`**:
    Retrieves route parameters from the URL.
    ```javascript
    app.get('/user/:id', (req, res) => {
         const userId = req.params.id;
         res.send(`User ID: ${userId}`);
    });
    ```

2. **`req.query`**:
    Retrieves query string parameters from the URL.
    ```javascript
    app.get('/search', (req, res) => {
         const keyword = req.query.keyword;
         res.send(`Search keyword: ${keyword}`);
    });
    ```

3. **`req.body`**:
    Contains the body of the request (requires middleware like `express.json()` or `express.urlencoded()` to parse).
    ```javascript
    app.use(express.json());
    app.post('/login', (req, res) => {
         const { username, password } = req.body;
         res.send(`Username: ${username}, Password: ${password}`);
    });
    ```

4. **`req.headers`**:
    Accesses the headers sent with the request.
    ```javascript
    app.get('/headers', (req, res) => {
         const userAgent = req.headers['user-agent'];
         res.send(`User-Agent: ${userAgent}`);
    });
    ```

5. **`req.method`**:
    Retrieves the HTTP method of the request (e.g., GET, POST, PUT, DELETE).
    ```javascript
    app.use((req, res, next) => {
         console.log(`HTTP Method: ${req.method}`);
         next();
    });
    ```

6. **`req.url`**:
    Retrieves the full URL of the request.
    ```javascript
    app.use((req, res, next) => {
         console.log(`Request URL: ${req.url}`);
         next();
    });
    ```

7. **`req.path`**:
    Retrieves the path of the request URL.
    ```javascript
    app.get('/example', (req, res) => {
         res.send(`Path: ${req.path}`);
    });
    ```

8. **`req.ip`**:
    Retrieves the IP address of the client making the request.
    ```javascript
    app.get('/ip', (req, res) => {
         res.send(`Client IP: ${req.ip}`);
    });
    ```

9. **`req.cookies`**:
    Retrieves cookies sent with the request (requires middleware like `cookie-parser`).
    ```javascript
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    app.get('/cookies', (req, res) => {
         res.send(`Cookies: ${JSON.stringify(req.cookies)}`);
    });
    ```

10. **`req.get()`**:
     Retrieves a specific header from the request.
     ```javascript
     app.get('/header', (req, res) => {
          const host = req.get('Host');
          res.send(`Host: ${host}`);
     });
     ```

### Key Points:
- The `req` object is essential for accessing client-sent data.
- Use middleware to parse the body or cookies when needed.
- Always validate and sanitize user input to prevent security vulnerabilities.

These methods and properties make it easy to handle and process incoming requests in an Express application.

# Routing in Express

Routing in Express refers to defining the endpoints (URIs) of your application and how it responds to client requests. It is a fundamental feature of Express that allows you to handle HTTP methods (GET, POST, PUT, DELETE, etc.) and define the logic for each route.

## Basic Routing

A basic route in Express is defined using the HTTP method functions like `app.get()`, `app.post()`, etc. Each route specifies a path and a callback function to handle the request.

#### Example:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Route Parameters

Route parameters are used to capture values from the URL and make them available in `req.params`.

#### Example:
```javascript
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
```

### Query Parameters

Query parameters are accessed using `req.query` and are typically used for optional data in the URL.

#### Example:
```javascript
app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Search keyword: ${keyword}`);
});
```

### Chained Routing

You can chain multiple route handlers for the same path using `app.route()`.

#### Example:
```javascript
app.route('/book')
    .get((req, res) => {
        res.send('Get a book');
    })
    .post((req, res) => {
        res.send('Add a book');
    })
    .put((req, res) => {
        res.send('Update a book');
    });
```

### Router Middleware

For modular and organized routing, you can use the `express.Router` class to create route handlers in separate files.

#### Example:
```javascript
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.send('User profile');
});

router.get('/settings', (req, res) => {
    res.send('User settings');
});

module.exports = router;
```

In the main application file:
```javascript
const userRoutes = require('./userRoutes');
app.use('/user', userRoutes);
```

### Handling 404 Errors

You can define a catch-all route to handle undefined routes.

#### Example:
```javascript
app.use((req, res) => {
    res.status(404).send('Page not found');
});
```

### Key Points:
- Routes are matched in the order they are defined.
- Use route parameters for dynamic paths and query parameters for optional data.
- Modularize routes using `express.Router` for better code organization.
- Always handle undefined routes to improve user experience.

Routing in Express is powerful and flexible, making it easy to build scalable web applications.

# Nodemon

Nodemon is a development tool that automatically restarts your Node.js application whenever it detects changes in the source files. It simplifies the development process by eliminating the need to manually stop and restart the server after every code change.

## Key Features:
- Automatically restarts the server on file changes.
- Monitors files with specific extensions (e.g., `.js`, `.json`).
- Configurable to watch custom files or directories.
- Lightweight and easy to use.

## Installation

You can install Nodemon globally or as a development dependency:

#### Global Installation:
```bash
npm install -g nodemon
```

#### Local Installation (as a dev dependency):
```bash
npm install --save-dev nodemon
```

### Usage

To use Nodemon, replace the `node` command with `nodemon` when starting your application.

#### Example:
```bash
nodemon app.js
```

If installed locally, you can run it using `npx`:
```bash
npx nodemon app.js
```

### Integration with `package.json`

You can add a script in your `package.json` to use Nodemon:
```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

Run the development server with:
```bash
npm run dev
```

### Benefits of Using Nodemon
- Saves time during development by automating server restarts.
- Improves productivity by reducing manual tasks.
- Easy to integrate into existing Node.js projects.

Nodemon is an essential tool for Node.js developers, making the development process smoother and more efficient.
