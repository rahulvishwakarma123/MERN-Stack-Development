## Table of Contents

1. [Node.js](#nodejs)
    - [Key Features of Node.js](#key-features-of-nodejs)
    - [Use Cases](#use-cases)
2. [Node.js REPL](#nodejs-repl)
    - [Key Features of Node.js REPL](#key-features-of-nodejs-repl)
    - [Common Commands](#common-commands)
3. [Process in Node.js](#process-in-nodejs)
    - [Key Properties and Methods of `process`](#key-properties-and-methods-of-process)
    - [Example: Accessing Command-Line Arguments](#example-accessing-command-line-arguments)
4. [Module System in Node.js](#module-system-in-nodejs)
    - [`require()` Function](#require-function)
    - [`module.exports`](#moduleexports)
    - [Built-in Modules](#built-in-modules)
5. [Requiring Directories in Node.js](#requiring-directories-in-nodejs)
    - [Example: Requiring a Directory](#example-requiring-a-directory)
    - [Benefits of Requiring Directories](#benefits-of-requiring-directories)
6. [Node Package Manager (NPM)](#node-package-manager-npm)
    - [Key Features of NPM](#key-features-of-npm)
    - [Common NPM Commands](#common-npm-commands)
    - [Example: Installing and Using a Package](#example-installing-and-using-a-package)
    - [`package.json` File](#packagejson-file)
7. [`package.json` File in Node.js](#packagejson-file-in-nodejs)
    - [Key Fields in `package.json`](#key-fields-in-packagejson)
    - [Benefits of `package.json`](#benefits-of-packagejson)
8. [Local vs Global Installation in NPM](#local-vs-global-installation-in-npm)
    - [Local Installation](#local-installation)
    - [Global Installation](#global-installation)
    - [Key Differences](#key-differences)
    - [Linking Local Packages Globally](#linking-local-packages-globally)
9. [`require` vs `import`](#require-vs-import)
    - [Key Differences](#key-differences-1)
    - [When to Use](#when-to-use)


# Node.js

Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and is widely used for building scalable and high-performance server-side applications.

## Key Features of Node.js
- **Asynchronous and Event-Driven**: Node.js uses non-blocking I/O operations, making it efficient for handling multiple requests simultaneously.
- **Single-Threaded**: It operates on a single-threaded event loop, which helps manage concurrency effectively.
- **Cross-Platform**: Node.js can run on various operating systems, including Windows, macOS, and Linux.
- **NPM (Node Package Manager)**: It comes with a vast ecosystem of libraries and modules, simplifying application development.

## Use Cases
- Building RESTful APIs
- Real-time applications like chat apps
- Streaming applications
- Microservices architecture

Node.js has become a popular choice for modern web development due to its speed, scalability, and active community support.

## Node.js REPL

The Node.js Read-Eval-Print Loop (REPL) is an interactive shell that allows developers to execute JavaScript code directly in a command-line interface. It is particularly useful for testing, debugging, and experimenting with code snippets.

### Key Features of Node.js REPL
- **Read**: Reads the input provided by the user.
- **Evaluate**: Evaluates the input to execute the JavaScript code.
- **Print**: Prints the result of the evaluation to the console.
- **Loop**: Loops back to read the next input.

### Common Commands
- `.help`: Displays a list of available commands in the REPL.
- `.exit`: Exits the REPL session.
- `.save <filename>`: Saves the current REPL session to a file.
- `.load <filename>`: Loads a file into the current REPL session.

The REPL is a powerful tool for developers to quickly test and debug JavaScript code in a Node.js environment.

## Process in Node.js

The `process` object in Node.js is a global object that provides information about, and control over, the current Node.js process. It is an essential part of the Node.js runtime and is available without requiring any additional modules.

### Key Properties and Methods of `process`
- **`process.argv`**: Returns an array containing the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, and the second element is the path to the script being executed. Additional elements are the arguments provided by the user.
- **`process.env`**: Provides access to the environment variables of the current process. It is commonly used for configuration purposes.
- **`process.exit([code])`**: Exits the Node.js process with the specified exit code. By convention, an exit code of `0` indicates success, while non-zero codes indicate errors.
- **`process.cwd()`**: Returns the current working directory of the Node.js process.
- **`process.memoryUsage()`**: Returns an object describing the memory usage of the Node.js process, including heap and RSS (Resident Set Size).
- **`process.nextTick(callback)`**: Schedules a callback function to be invoked in the next iteration of the event loop, before any I/O operations.

### Example: Accessing Command-Line Arguments
```javascript
// Accessing command-line arguments
console.log('Command-line arguments:', process.argv);

// Example: Running the script with arguments
// node script.js arg1 arg2
// Output: ['path/to/node', 'path/to/script.js', 'arg1', 'arg2']
```

The `process` object is a powerful tool for interacting with the Node.js runtime and managing the execution environment of your application.

# Module System in Node.js

Node.js uses a module system to organize and reuse code. Modules are individual JavaScript files that can be imported and exported to share functionality across different parts of an application.

### `require()` Function
The `require()` function is used to include modules in a Node.js application. It allows developers to load built-in modules, third-party modules, or custom modules.

#### Example: Using `require()`
```javascript
// Importing a built-in module
const fs = require('fs');

// Importing a custom module
const myModule = require('./myModule');

// Using the imported module
console.log(myModule.someFunction());
```

### `module.exports`
The `module.exports` object is used to define what a module exports and makes available to other files. By assigning properties or functions to `module.exports`, you can expose them for use in other parts of your application.

#### Example: Exporting and Importing a Custom Module
**myModule.js**
```javascript
// Exporting a function
module.exports.someFunction = () => {
    return 'Hello from myModule!';
};
```

**app.js**
```javascript
// Importing the custom module
const myModule = require('./myModule');

// Using the exported function
console.log(myModule.someFunction());
```

### Built-in Modules
Node.js comes with several built-in modules that provide core functionality. Some commonly used modules include:
- **`fs`**: File system operations
- **`http`**: Creating HTTP servers
- **`path`**: Working with file and directory paths
- **`os`**: Accessing operating system-related information

The module system in Node.js promotes modularity and code reusability, making it easier to manage and scale applications.

## Requiring Directories in Node.js

In Node.js, you can require entire directories as modules. When a directory is required, Node.js looks for an `index.js` file within that directory and uses it as the entry point for the module. This feature is particularly useful for organizing code into modular components.

#### Example: Requiring a Directory
Suppose you have the following directory structure:
```
/myModule
    ├── index.js
    ├── helper.js
```

**index.js**
```javascript
const helper = require('./helper');

module.exports = {
        greet: () => {
                console.log('Hello from myModule!');
                helper.sayHello();
        }
};
```

**helper.js**
```javascript
module.exports.sayHello = () => {
        console.log('Hello from helper!');
};
```

**app.js**
```javascript
// Requiring the directory
const myModule = require('./myModule');

// Using the module
myModule.greet();
```

#### Output:
```
Hello from myModule!
Hello from helper!
```

### Benefits of Requiring Directories
- **Code Organization**: Helps in grouping related functionality into a single directory.
- **Simplified Imports**: Reduces the need to import individual files manually.
- **Scalability**: Makes it easier to manage larger projects by modularizing code.

By leveraging this feature, you can create clean and maintainable code structures in your Node.js applications.

# Node Package Manager (NPM)

Node Package Manager (NPM) is the default package manager for Node.js. It is a powerful tool that allows developers to manage dependencies, share reusable code, and streamline the development process.

### Key Features of NPM
- **Package Management**: Install, update, and uninstall packages (libraries or modules) for your Node.js applications.
- **Version Control**: Manage specific versions of packages to ensure compatibility and stability.
- **Global and Local Installation**: Install packages globally (available system-wide) or locally (specific to a project).
- **Publishing Packages**: Share your own packages with the community by publishing them to the NPM registry.
- **Scripts**: Automate tasks using custom scripts defined in the `package.json` file.

### Common NPM Commands
- **`npm init`**: Initializes a new Node.js project and creates a `package.json` file.
- **`npm install <package>`**: Installs a package and adds it to the `node_modules` directory.
- **`npm install <package> --save`**: Installs a package and adds it as a dependency in `package.json`.
- **`npm install <package> --save-dev`**: Installs a package as a development dependency.
- **`npm uninstall <package>`**: Removes a package from the project.
- **`npm update`**: Updates all installed packages to their latest versions.
- **`npm run <script>`**: Executes a custom script defined in `package.json`.

### Example: Installing and Using a Package
```bash
# Initialize a new project
npm init -y

# Install a package (e.g., lodash)
npm install lodash

# Using the installed package in your code
```

**app.js**
```javascript
const _ = require('lodash');

// Example usage of lodash
const numbers = [1, 2, 3, 4, 5];
const reversed = _.reverse(numbers.slice());
console.log(reversed); // Output: [5, 4, 3, 2, 1]
```

### `package.json` File
The `package.json` file is the heart of a Node.js project. It contains metadata about the project, including its dependencies, scripts, and other configurations.

#### Example `package.json`
```json
{
    "name": "my-app",
    "version": "1.0.0",
    "description": "A sample Node.js application",
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    },
    "dependencies": {
        "lodash": "^4.17.21"
    },
    "devDependencies": {}
}
```

### Benefits of Using NPM
- **Time-Saving**: Access a vast ecosystem of pre-built packages to speed up development.
- **Community Support**: Leverage contributions from a large and active developer community.
- **Project Management**: Simplify dependency management and ensure consistency across environments.

NPM is an essential tool for modern Node.js development, enabling developers to build robust and scalable applications efficiently.

## `package.json` File in Node.js

The `package.json` file is a critical component of any Node.js project. It serves as the manifest file for the project, containing essential metadata and configuration details. This file helps manage dependencies, scripts, and other project-specific settings.

### Key Fields in `package.json`
- **`name`**: The name of the project. It must be unique if the project is published to the NPM registry.
- **`version`**: The version of the project, following semantic versioning (e.g., `1.0.0`).
- **`description`**: A brief description of the project.
- **`main`**: The entry point of the application (e.g., `index.js` or `app.js`).
- **`scripts`**: Custom scripts that can be executed using `npm run <script-name>`.
- **`dependencies`**: Lists the packages required for the project to run. These are installed using `npm install`.
- **`devDependencies`**: Lists the packages needed only for development purposes (e.g., testing tools, linters).
- **`keywords`**: An array of keywords to help identify the project in the NPM registry.
- **`author`**: The name of the project's author.
- **`license`**: Specifies the license under which the project is distributed.

### Benefits of `package.json`
- **Dependency Management**: Automatically tracks and installs required packages.
- **Project Metadata**: Provides essential information about the project.
- **Script Automation**: Simplifies repetitive tasks through custom scripts.
- **Version Control**: Ensures compatibility by specifying package versions.

The `package.json` file is indispensable for managing and maintaining Node.js projects, making it easier to collaborate and deploy applications effectively.

# Local vs Global Installation in NPM

When working with Node.js, you can install packages either locally or globally using NPM. Understanding the difference between these two installation methods is crucial for managing dependencies effectively.

### Local Installation
- A package is installed locally when it is added to the `node_modules` directory within the project folder.
- Local packages are only accessible within the project where they are installed.
- Use the following command to install a package locally:
    ```bash
    npm install <package-name>
    ```
- Example:
    ```bash
    npm install express
    ```
    This will install the `express` package locally and add it to the `dependencies` section of the `package.json` file.

### Global Installation
- A package is installed globally when it is available system-wide and can be used across multiple projects.
- Global packages are typically used for command-line tools or utilities.
- Use the following command to install a package globally:
    ```bash
    npm install -g <package-name>
    ```
- Example:
    ```bash
    npm install -g nodemon
    ```
    This will install the `nodemon` package globally, allowing you to use it as a command-line tool.

### Key Differences
| Feature                | Local Installation                  | Global Installation                |
|------------------------|-------------------------------------|------------------------------------|
| Scope                  | Project-specific                   | System-wide                        |
| Location               | `node_modules` in the project folder | Global `node_modules` directory    |
| Use Case               | Application dependencies           | CLI tools and utilities            |
| Command                | `npm install <package-name>`       | `npm install -g <package-name>`    |

### Linking Local Packages Globally
You can use the `npm link` command to link a local package globally. This is useful for testing packages during development.

#### Example:
1. Navigate to the package directory:
     ```bash
     cd my-package
     ```
2. Link the package globally:
     ```bash
     npm link
     ```
3. Use the package in another project:
     ```bash
     npm link my-package
     ```

By understanding local and global installations, you can better manage your project's dependencies and tools.


# `require` vs `import`

In Node.js, both `require` and `import` are used to include modules, but they have key differences in usage and functionality.

### `require`
- CommonJS module system.
- Synchronous loading of modules.
- Can be used anywhere in the code.
- Example:
    ```javascript
    const fs = require('fs');
    console.log(fs.readFileSync);
    ```

### `import`
- ES6 module system.
- Asynchronous loading of modules.
- Must be used at the top level of the file.
- Example:
    ```javascript
    import { readFileSync } from 'fs';
    console.log(readFileSync);
    ```

### Key Differences
| Feature                | `require`                          | `import`                          |
|------------------------|-------------------------------------|------------------------------------|
| Module System          | CommonJS                           | ES6 Modules                       |
| Loading                | Synchronous                        | Asynchronous                      |
| Usage                  | Can be used anywhere               | Must be at the top level          |
| Selective Import       | Not supported                      | Supported                         |

### When to Use
- Use `require` for older Node.js versions or CommonJS-based projects.
- Use `import` for modern ES6-based projects or when working with tools like Babel or TypeScript.

By understanding these differences, you can choose the appropriate module system for your Node.js application.