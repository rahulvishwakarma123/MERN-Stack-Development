# Express Middleware Documentation

Express middleware functions are essential building blocks in Express.js applications. Middleware enables you to execute code, modify requests and responses, end request-response cycles, and call the next middleware in the stack. Middleware can be built-in, third-party, or custom, and are executed in the order they are defined in your application.

---

## Table of Contents

- [What is Middleware?](#what-is-middleware)
- [Types of Middleware](#types-of-middleware)
- [Built-in Middleware](#built-in-middleware)
- [Popular Third-party Middleware](#popular-third-party-middleware)
- [Writing Custom Middleware](#writing-custom-middleware)
- [Order of Middleware Execution](#order-of-middleware-execution)
- [Error-handling Middleware](#error-handling-middleware)
- [Using Middleware](#using-middleware)
- [Summary Table of Common Middleware](#summary-table-of-common-middleware)
- [References](#references)

---

## What is Middleware?

Middleware functions in Express.js have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle (`next`). Middleware can:

- Execute any code
- Modify the request and response objects
- End the request-response cycle
- Pass control to the next middleware function using `next()`

> **Note:**  
> If a middleware does not end the request-response cycle or call `next()`, the request will hang.

---

## Types of Middleware

- **Application-level middleware:** Bound to an instance of `express()`.
- **Router-level middleware:** Bound to an instance of `express.Router()`.
- **Error-handling middleware:** Defined with four arguments, the first being `err`.
- **Built-in middleware:** Provided by Express itself.
- **Third-party middleware:** Installed via npm and integrated into Express.

---

## Built-in Middleware

Express provides several built-in middleware functions:

| Middleware             | Description                                         |
|------------------------|-----------------------------------------------------|
| `express.json()`       | Parses incoming requests with JSON payloads.        |
| `express.urlencoded()` | Parses incoming requests with URL-encoded payloads. |
| `express.static()`     | Serves static files such as images, CSS, and HTML.  |

**Example:**

```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
```

---

## Popular Third-party Middleware

| Middleware               | Description                                              |
|--------------------------|----------------------------------------------------------|
| `body-parser`            | Parse HTTP request body.                                 |
| `compression`            | Compress HTTP responses.                                 |
| `cookie-parser`          | Parse cookie header and populate `req.cookies`.          |
| `cookie-session`         | Establish cookie-based sessions.                         |
| `cors`                   | Enable cross-origin resource sharing (CORS).             |
| `errorhandler`           | Development error-handling/debugging.                    |
| `method-override`        | Override HTTP methods using header.                      |
| `morgan`                 | HTTP request logger.                                     |
| `multer`                 | Handle multi-part form data (file uploads).              |
| `response-time`          | Record HTTP response time.                               |
| `serve-favicon`          | Serve a favicon.                                         |
| `serve-index`            | Serve directory listing for a given path.                |
| `session`                | Establish server-based sessions.                         |
| `timeout`                | Set timeout for HTTP request processing.                 |
| `vhost`                  | Create virtual domains.                                  |
| `helmet`                 | Secure apps by setting various HTTP headers.             |
| `passport`               | Authentication using strategies like OAuth, OpenID, etc. |
| `csurf`                  | CSRF protection middleware.                              |
| `express-validator`      | Input validation and sanitization.                       |
| `express-session`        | Session management for Express apps.                     |
| `express-pino-logger`    | Fast, low overhead request logging.                      |
| `swagger-stats`          | API telemetry and performance monitoring.                |

**Example: Using Morgan and CORS**

```js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());
```

---

## Writing Custom Middleware

A custom middleware function typically has the following signature:

```js
function myMiddleware(req, res, next) {
        // Custom logic here
        next(); // Pass control to the next middleware
}
```

**Example: Logging Middleware**

```js
const myLogger = function (req, res, next) {
        console.log('LOGGED');
        next();
};

app.use(myLogger);
```

---

## Order of Middleware Execution

Middleware is executed in the order it is defined using `app.use()` or as route handlers. The order is critical, as earlier middleware can modify the request and response objects for later middleware or routes.

**Example:**

```js
app.use(middleware1);
app.use(middleware2);
// middleware1 runs before middleware2
```

---

## Error-handling Middleware

Error-handling middleware functions have four arguments: `(err, req, res, next)`. They are used to catch and handle errors in the application.

**Example:**

```js
function errorHandler(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
}

app.use(errorHandler);
```

---

## Using Middleware

- **Globally:** `app.use(middlewareFunction)`
- **On specific routes:** `app.use('/route', middlewareFunction)`
- **With routers:** `router.use(middlewareFunction)`

**Example:**

```js
// Global middleware
app.use(myMiddleware);

// Route-specific middleware
app.use('/api', apiMiddleware);

// Router-level middleware
const router = express.Router();
router.use(routerMiddleware);
```

---

## Summary Table of Common Middleware

| Name               | Type         | Description                    |
|--------------------|--------------|--------------------------------|
| express.json       | Built-in     | Parse JSON payloads            |
| express.urlencoded | Built-in     | Parse URL-encoded payloads     |
| express.static     | Built-in     | Serve static files             |
| morgan             | Third-party  | HTTP request logging           |
| cors               | Third-party  | Enable CORS                    |
| helmet             | Third-party  | Security headers               |
| multer             | Third-party  | File uploads                   |
| session            | Third-party  | Session management             |
| errorhandler       | Third-party  | Error handling (development)   |
| passport           | Third-party  | Authentication                 |
| express-validator  | Third-party  | Input validation               |

---

## References

- [Express Middleware Documentation](https://expressjs.com/en/guide/using-middleware.html)
- [Writing Middleware in Express](https://expressjs.com/en/guide/writing-middleware.html)
- [Using Middleware in Express](https://expressjs.com/en/guide/using-middleware.html)
- [Middleware in Express.js - Verpex](https://verpex.com/blog/website-tips/middleware-in-expressjs)
- [Middleware in Express.js - DEV.to](https://dev.to/abdisalan_js/express-middleware-explained-1d5n)

---

> This documentation provides an overview of Express middleware, their types, usage, and examples for quick reference. For more details, refer to the official Express documentation.

