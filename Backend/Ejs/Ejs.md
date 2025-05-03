# Table of Contents

1. [Templating](#templating)
    - [EJS (Embedded JavaScript Templates)](#ejs-embedded-javascript-templates)
      - [Key Features](#key-features)
      - [Example](#example)
      - [Installation](#installation)
      - [Usage with Express](#usage-with-express)
2. [Setting the Views Directory](#setting-the-views-directory)
3. [Interpolation Syntax in EJS](#interpolation-syntax-in-ejs)
    - [Commonly Used Tags](#commonly-used-tags)
    - [Examples](#examples)
4. [Passing Data to EJS](#passing-data-to-ejs)
    - [Example](#example-1)
    - [EJS Template](#ejs-template)
    - [How It Works](#how-it-works)
5. [Conditional Statements in EJS](#conditional-statements-in-ejs)
    - [Example](#example-2)
    - [Explanation](#explanation)
    - [Nested Conditionals](#nested-conditionals)
    - [Notes](#notes)
6. [Loops in EJS](#loops-in-ejs)
    - [Example with Arrays](#example-with-arrays)
    - [Explanation](#explanation-1)
    - [Example with Objects](#example-with-objects)
    - [Explanation](#explanation-2)
    - [Notes](#notes-1)

# Templating

## EJS (Embedded JavaScript Templates)

EJS is a simple templating language that allows you to generate HTML markup using plain JavaScript. It is commonly used in server-side rendering to dynamically create HTML pages based on data.

### Key Features:
- **Easy to Use**: Write HTML templates with embedded JavaScript.
- **Fast**: Minimal overhead for rendering templates.
- **Flexible**: Supports loops, conditionals, and partials.
- **Integration**: Works seamlessly with Node.js and Express.

### Example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
    </head>
    <body>
        <h1>Welcome, <%= user.name %>!</h1>
        <ul>
            <% items.forEach(function(item) { %>
                <li><%= item %></li>
            <% }); %>
        </ul>
    </body>
</html>
```

### Installation:
To use EJS in your project, install it via npm:
```bash
npm install ejs
```

### Usage with Express:
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', user: { name: 'John' }, items: ['Item1', 'Item2'] });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Setting the Views Directory

When using EJS with Express, you can specify the directory where your EJS templates (views) are stored. By default, Express looks for a folder named `views` in the root of your project. However, you can customize this location using the `app.set` method.

Here’s an example of how to set the views directory:

```javascript
const path = require('path');

app.set('views', path.join(__dirname, '/views'));
```

In this example:
- `path.join(__dirname, '/views')` constructs the absolute path to the `views` folder.
- `app.set('views', ...)` tells Express to look for templates in the specified directory.

This is particularly useful if your project structure requires a custom location for your views folder.

## Interpolation Syntax in EJS

EJS uses special tags to embed JavaScript code within your HTML templates. These tags allow you to dynamically insert values, execute logic, and render content based on your data.

### Commonly Used Tags:
1. `<%= %>`: Outputs the value of a variable or expression and escapes HTML.
2. `<%- %>`: Outputs the value of a variable or expression without escaping HTML.
3. `<% %>`: Executes JavaScript code without producing any output.

### Examples:
```html
<!-- Escaped Output -->
<p><%= user.name %></p> <!-- Outputs the user's name and escapes any HTML -->

<!-- Unescaped Output -->
<p><%- user.bio %></p> <!-- Outputs the user's bio without escaping HTML -->

<!-- Logic Execution -->
<% if (user.isAdmin) { %>
    <p>Welcome, Admin!</p>
<% } else { %>
    <p>Welcome, User!</p>
<% } %>
```

#### Notes:
- Use `<%- %>` cautiously to avoid security risks like Cross-Site Scripting (XSS).
- The `<% %>` tag is useful for loops, conditionals, and other JavaScript logic that doesn't directly output content.

By combining these tags, you can create dynamic and interactive templates with ease.

# Passing Data to EJS

When using EJS with Express, you can pass data from your server to your EJS templates. This allows you to dynamically render content based on the data provided.

### Example:
Here’s an example of passing data to an EJS template:

```javascript
app.get('/rolldice', (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    res.render('rollDice.ejs', { diceVal: num }); // Pass the random number to the template
});
```

In the above code:
- `num` is a random number generated on the server.
- `res.render` is used to render the `rollDice.ejs` template and pass the `diceVal` variable to it.

### EJS Template:
The corresponding EJS template (`rollDice.ejs`) can use the passed data as follows:

```html
<h1>Your dice gave value: <%= diceVal %></h1>
```

### How It Works:
1. The server generates a random number and passes it to the EJS template.
2. The EJS template dynamically inserts the value of `diceVal` into the HTML.

This approach is useful for creating dynamic web pages that display data based on server-side logic.

## Conditional Statements in EJS

EJS allows you to use conditional statements to control the flow of your templates. This is useful for rendering different content based on specific conditions.

### Example:
Here’s an example of using an `if-else` statement in an EJS template:

```html
<% if (user.isLoggedIn) { %>
    <h1>Welcome back, <%= user.name %>!</h1>
<% } else { %>
    <h1>Welcome, Guest!</h1>
    <p>Please <a href="/login">log in</a> to continue.</p>
<% } %>
```

### Explanation:
- `<% if (condition) { %>`: Starts the conditional block.
- `<% } else { %>`: Specifies the alternative block if the condition is false.
- `<% } %>`: Ends the conditional block.

### Nested Conditionals:
You can also nest conditionals for more complex logic:

```html
<% if (user.isAdmin) { %>
    <h1>Admin Dashboard</h1>
<% } else if (user.isLoggedIn) { %>
    <h1>User Dashboard</h1>
<% } else { %>
    <h1>Welcome, Guest!</h1>
<% } %>
```

### Notes:
- Use conditionals to dynamically render content based on the data passed to the template.
- Keep your logic simple to maintain readability and avoid cluttering your templates.

By leveraging conditional statements, you can create highly dynamic and personalized web pages.

## Loops in EJS

EJS allows you to use loops to iterate over arrays or objects and dynamically render content. This is particularly useful for displaying lists or repeating elements in your templates.

### Example with Arrays:
Here’s an example of using a `forEach` loop to iterate over an array:

```html
<ul>
    <% items.forEach(function(item) { %>
        <li><%= item %></li>
    <% }); %>
</ul>
```

### Explanation:
- `<% items.forEach(function(item) { %>`: Starts the loop and iterates over each element in the `items` array.
- `<%= item %>`: Outputs the current item in the loop.
- `<% }); %>`: Ends the loop.

### Example with Objects:
You can also loop through the keys of an object using a `for-in` loop:

```html
<ul>
    <% for (let key in user) { %>
        <li><%= key %>: <%= user[key] %></li>
    <% } %>
</ul>
```

### Explanation:
- `<% for (let key in user) { %>`: Iterates over the keys of the `user` object.
- `<%= key %>`: Outputs the current key.
- `<%= user[key] %>`: Outputs the value associated with the current key.

### Notes:
- Loops in EJS are written using standard JavaScript syntax.
- Avoid writing complex logic inside your templates to maintain readability.

By using loops, you can efficiently render dynamic content based on your data.