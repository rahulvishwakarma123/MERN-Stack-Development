# Express Routers and Cookies

## Express Routers

**Express Routers** allow you to organize your application's routes into modular, mountable route handlers. This helps break up your code into smaller, manageable pieces, making it easier to maintain and scale your application.

### Why Use Routers?

- **Separation of Concerns:** Group related routes (e.g., user, product) into different files.
- **Cleaner Codebase:** Keeps your main `app.js` file uncluttered.
- **Middleware Flexibility:** Apply middleware to specific route groups easily.

### Creating and Using a Router

Suppose you want to manage all routes related to "dogs" in a separate file:

**[`routes/dogs.js`](./routes/dogs.js)**
```js
const express = require('express');
const router = express.Router();

// GET /dogs - List all dogs
router.get('/', (req, res) => {
    res.send("All dogs");
});

// GET /dogs/:id - View a specific dog
router.get('/:id', (req, res) => {
    res.send(`Viewing dog with ID: ${req.params.id}`);
});

// GET /dogs/:id/edit - Edit a specific dog
router.get('/:id/edit', (req, res) => {
    res.send(`Editing dog with ID: ${req.params.id}`);
});

module.exports = router;
```

**[`app.js`](./app.js)**
```js
const express = require('express');
const app = express();
const dogsRouter = require('./routes/dogs');

// Mount the dogs router at /dogs
app.use('/dogs', dogsRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

> **Note:** This structure allows you to keep your routing logic modular and organized.

---

## Cookies in Express

Cookies are key-value pairs stored in the user's browser. They are sent with every HTTP request to the server, allowing you to make HTTP stateful and remember information about users.

### Setting and Reading Cookies

#### Install and Use `cookie-parser`

First, install the `cookie-parser` middleware:
```sh
npm install cookie-parser
```

Then, use it in your Express app:

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());
```

#### Setting Cookies

Set a simple cookie:
```js
app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.send('Cookie sent');
});
```

**Setting a Cookie with Options:**
```js
app.get('/setcookie', (req, res) => {
    res.cookie('cookieName', 'cookieValue', {
        maxAge: 1000 * 60 * 15, // Expires in 15 minutes
        httpOnly: true,         // Only accessible by the web server
        signed: true            // Sign the cookie for integrity
    });
    res.send('Cookie set with options');
});
```

- `maxAge`: Duration in milliseconds before the cookie expires.
- `httpOnly`: Prevents client-side JS from accessing the cookie.
- `signed`: Ensures the cookie value has not been tampered with.

#### Reading Cookies

Read cookies sent by the client:
```js
app.get('/showcookies', (req, res) => {
    res.json(req.cookies); // For regular cookies
    // res.json(req.signedCookies); // For signed cookies
});
```

#### Clearing Cookies

Remove a cookie from the client:
```js
app.get('/clearcookie', (req, res) => {
    res.clearCookie('cookieName');
    res.send('Cookie cleared');
});
```

### Signing Cookies

Signing cookies uses cryptography to ensure the cookie data has not been altered by the client. You must pass a secret to `cookie-parser`:

```js
app.use(cookieParser('yourSecretKey'));
```

Set a signed cookie:
```js
res.cookie('name', 'value', { signed: true });
```

Read signed cookies:
```js
req.signedCookies
```

---

## Cookie Security Tips

- Use `httpOnly` to prevent access from client-side scripts.
- Use `secure` to send cookies only over HTTPS.
- Use `sameSite` to mitigate CSRF attacks.
- Do not store sensitive data directly in cookies; use identifiers and store sensitive info server-side.

---

## Summary Table

| Feature        | Express Routers                          | Cookies in Express                   |
|----------------|------------------------------------------|--------------------------------------|
| Purpose        | Modular route handling                   | Store client-side data               |
| Setup          | `express.Router()`                       | `cookie-parser` middleware           |
| Usage          | Organize endpoints, apply middleware     | Set, read, clear cookies             |
| Security       | Middleware for auth, validation, logging | `httpOnly`, `secure`, `signed`       |
| Example        | `router.get('/path', ...)`               | `res.cookie('key', 'value', opts)`   |

---

## References

- [Express Router and Cookies - dev.to](https://dev.to/abidullah786/express-router-and-cookies-3g8c)
- [How to set cookies in Express - StackOverflow](https://stackoverflow.com/questions/16209145/how-to-set-cookie-in-express-node-js)
- [res.cookie() options - SailsJS docs](https://sailsjs.com/documentation/reference/req/req-cookie)
- [cookie-session middleware - Express docs](https://expressjs.com/en/resources/middleware/cookie-session.html)