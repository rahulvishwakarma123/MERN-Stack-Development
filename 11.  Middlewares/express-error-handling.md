# Error Handling in Express

Error handling is a crucial part of building robust Express.js applications. Express provides a flexible way to handle errors using middleware functions.

---

## Table of Contents

- [What is Error Handling Middleware?](#what-is-error-handling-middleware)
- [Syntax of Error Handling Middleware](#syntax-of-error-handling-middleware)
- [How Error Handling Works](#how-error-handling-works)
- [Creating Custom Error Handlers](#creating-custom-error-handlers)
- [Catching Synchronous Errors](#catching-synchronous-errors)
- [Catching Asynchronous Errors](#catching-asynchronous-errors)
- [Default Error Handler](#default-error-handler)
- [Best Practices](#best-practices)
- [References](#references)

---

## What is Error Handling Middleware?

Error handling middleware in Express is a special type of middleware function that takes **four arguments**:

        function (err, req, res, next) { ... }


Express recognizes error-handling middleware by the presence of the `err` parameter as the first argument.

---

## Syntax of Error Handling Middleware

        app.use(function (err, req, res, next) {
        // Handle the error
        });


**Example:**

        app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
        });

---

## How Error Handling Works

- If any middleware or route handler passes an error to `next(err)`, Express will skip all other middleware and route handlers and move directly to the error-handling middleware.
- Error-handling middleware should be defined **after all other app.use() and routes**.

---

## Creating Custom Error Handlers

**Example:**

        // Custom error handler
        app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
        error: {
        message: err.message,
        // stack: err.stack // Uncomment for development only
        }
        });
        });


---

## Catching Synchronous Errors

If an error is thrown synchronously in a route handler, Express will catch it and pass it to the error handler.

        app.get('/sync-error', function (req, res) {
        throw new Error('Synchronous error!');
        });


---

## Catching Asynchronous Errors

For asynchronous code (e.g., inside callbacks or promises), you must pass errors to `next()`:

        app.get('/async-error', function (req, res, next) {
        setTimeout(() => {
        next(new Error('Asynchronous error!'));
        }, 100);
        });


**With Promises:**
        app.get('/promise-error', function (req, res, next) {
        Promise.reject(new Error('Promise error!')).catch(next);
        });


---

## Default Error Handler

If you do not define any error-handling middleware, Express has a built-in error handler that will send a generic error message and stack trace (in development mode).

---

## Best Practices

- **Always define error-handling middleware last.**
- **Never send stack traces in production.**
- **Use HTTP status codes appropriately.**
- **Log errors for debugging and monitoring.**
- **Handle both synchronous and asynchronous errors.**
- **Create custom error classes for more granular error handling.**

---

## References

- [Express Error Handling Guide](https://expressjs.com/en/guide/error-handling.html)
- [Error Handling Best Practices in Express](https://expressjs.com/en/advanced/best-practice-error-handling.html)
- [MDN: HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---