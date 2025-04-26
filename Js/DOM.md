# Table of Contents

1. [DOM in JavaScript](#dom-in-javascript)
    - [Introduction to the DOM](#introduction-to-the-dom)
      - [Key Features of the DOM](#key-features-of-the-dom)
      - [Why Learn the DOM?](#why-learn-the-dom)
      - [How the DOM Works](#how-the-dom-works)
2. [Selecting Elements in the DOM](#selecting-elements-in-the-dom)
    - [`document.getElementById(id)`](#1-documentgetelementbyidid)
    - [`document.getElementsByClassName(className)`](#2-documentgetelementsbyclassnameclassname)
    - [`document.getElementsByTagName(tagName)`](#3-documentgetelementsbytagnametagname)
    - [`document.querySelector(selector)`](#4-documentqueryselectorselector)
    - [`document.querySelectorAll(selector)`](#5-documentqueryselectorallselector)
3. [Using Properties & Methods](#using-properties--methods)
    - [`innerText`](#innertext)
    - [`textContent`](#textcontent)
    - [`innerHTML`](#innerhtml)
4. [Manipulating Attributes](#manipulating-attributes)
    - [`getAttribute(attr)`](#getattributeattr)
    - [`setAttribute(attr-val)`](#setattributeattr-val)
5. [Manipulating Classes with `classList`](#manipulating-classes-with-classlist)
    - [`classList.add(className)`](#classlistaddclassname)
    - [`classList.remove(className)`](#classlistremoveclassname)
    - [`classList.contains(className)`](#classlistcontainsclassname)
    - [`classList.toggle(className-force)`](#classlisttoggleclassname-force)
6. [Navigating the DOM](#navigating-the-dom)
    - [`parentElement`](#1-parentelement)
    - [`children`](#2-children)
    - [`previousElementSibling` / `nextElementSibling`](#3-previouselementsibling--nextelementsibling)
7. [Adding Elements in JavaScript](#adding-elements-in-javascript)
    - [`document.createElement(tagName)`](#1-documentcreateelementtagname)
    - [`appendChild(element)`](#2-appendchildelement)
    - [`append(element)`](#3-appendelement)
    - [`prepend(element)`](#4-prependelement)
    - [`insertAdjacent(where-element)`](#5-insertadjacentwhere-element)


# DOM in JavaScript
--------------------------
## Introduction to the DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and styles of a webpage dynamically. The DOM is an essential part of web development, enabling interaction between JavaScript and HTML.

### Key Features of the DOM
- **Tree Structure**: The DOM represents the HTML document as a tree of nodes, where each node corresponds to an element, attribute, or text.
- **Dynamic Manipulation**: Developers can add, remove, or modify elements and attributes in real-time.
- **Event Handling**: The DOM allows attaching event listeners to elements, enabling interactive behavior.
- **Cross-Browser Compatibility**: Modern browsers implement the DOM API, ensuring consistent behavior across platforms.

### Why Learn the DOM?
Understanding the DOM is crucial for creating dynamic and interactive web applications. It provides the foundation for tasks such as:
- Updating content dynamically without reloading the page.
- Responding to user interactions like clicks, hovers, or form submissions.
- Creating animations and transitions.
- Building single-page applications (SPAs) with frameworks like React or Angular.

### How the DOM Works
When a browser loads an HTML document, it parses the HTML and constructs the DOM tree. This tree can then be accessed and manipulated using JavaScript. Each element in the tree is represented as a node, with properties and methods to interact with it.

- Example DOM Tree for a Simple HTML:
    ```html
    <html>
      <body>
        <h1>Hello, World!</h1>
        <p>This is a paragraph.</p>
      </body>
    </html>
    ```
    The DOM tree for the above HTML would look like:
    ```
    Document
    └── html
        ├── head
        └── body
            ├── h1
            └── p
    ```

By mastering the DOM, developers can unlock the full potential of JavaScript to create rich, interactive web experiences.


--------------------------------
## Selecting Elements in the DOM

Selecting elements in the DOM is a fundamental task in JavaScript for manipulating and interacting with web pages. The DOM provides several methods and properties to select elements based on their ID, class, tag, or other attributes.

### 1. `document.getElementById(id)`
- **Description**: Selects a single element by its unique `id` attribute. The `id` must be unique within the document, as it is used to identify a specific element.
- **Returns**: The first element with the specified `id`, or `null` if no such element exists.
- **Common Use Cases**:
    - Accessing specific elements like headers, footers, or sections for targeted manipulation.
    - Dynamically updating content or styles of a specific element based on user interaction or application logic.
    - Retrieving form inputs or other elements for validation or processing.
- **Properties**:
    - `id`: The unique identifier of the element.
    - `innerHTML`: Accesses or modifies the HTML content of the element, including child elements.
    - `innerText`: Accesses or modifies the text content of the element, excluding hidden elements.
    - `textContent`: Similar to `innerText`, but includes all text, even from hidden elements.
    - `style`: Allows inline CSS styles to be applied or modified directly on the element.
    - `className`: Accesses or modifies the class attribute of the element.
    - `attributes`: Provides access to all attributes of the element.
- **Methods**:
    - `focus()`: Sets focus to the element, commonly used for form inputs.
    - `scrollIntoView()`: Scrolls the element into the visible area of the browser window.
- **Example**:
    ```javascript
    // Select the element with the ID 'header'
    const element = document.getElementById('header');

    // Change the text color to blue
    element.style.color = 'blue';

    // Log the text content of the element
    console.log(element.innerText);

    // Update the HTML content of the element
    element.innerHTML = '<h2>Updated Header</h2>';

    // Add a new class to the element
    element.className = 'highlighted';

    // Scroll the element into view
    element.scrollIntoView();
    ```
- **Notes**:
    - If multiple elements share the same `id` (which is invalid HTML), `document.getElementById` will return the first matching element.
    - Using `id` is one of the fastest ways to select an element in the DOM, as it directly references the element without needing to traverse the DOM tree.
    - Avoid overusing `id` for styling or grouping elements; use classes instead for better maintainability.

### 2. `document.getElementsByClassName(className)`
- **Description**: Selects all elements in the document that have the specified class name. The class name is case-sensitive, meaning it must match exactly as it appears in the HTML.
- **Returns**: A live `HTMLCollection` of elements, or `empty HTMLCollection` if no such element exists. This means that if the document is updated and elements with the specified class are added or removed, the collection will automatically reflect those changes.
- **Common Use Cases**:
    - Applying styles or changes to multiple elements that share the same class.
    - Iterating over elements to perform batch operations, such as adding event listeners or modifying attributes.
- **Properties**:
    - `length`: The number of elements in the collection.
    - `item(index)`: Retrieves the element at the specified index in the collection.
    - `namedItem(name)`: Retrieves an element by its `name` attribute, if applicable.
- **Example**:
    ```javascript
    // Select all elements with the class 'menu-item'
    const elements = document.getElementsByClassName('menu-item');

    // Iterate through the collection and make the text bold
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontWeight = 'bold';
    }

    // Log the number of elements with the class 'menu-item'
    console.log(elements.length);
    ```
- **Important Notes**:
    - The `HTMLCollection` is live, meaning it reflects changes to the DOM in real-time.
    - Use this method when you need to select multiple elements with the same class and prefer a live collection.

### 3. `document.getElementsByTagName(tagName)`
- **Description**: Selects all elements in the document with the specified tag name, such as `div`, `p`, or `span`. The tag name is case-insensitive in HTML documents but case-sensitive in XML documents.
- **Returns**: A live `HTMLCollection` of elements. This means the collection automatically updates if elements with the specified tag name are added or removed from the document.
- **Common Use Cases**:
    - Accessing all elements of a specific type, such as all paragraphs, images, or links, for batch processing.
    - Applying consistent styles or behaviors to a group of similar elements.
    - Iterating through elements to extract or modify their content or attributes.
- **Properties**:
    - `length`: The total number of elements in the collection.
    - `item(index)`: Retrieves the element at the specified index in the collection.
- **Notes**:
    - The returned `HTMLCollection` is live, so any changes to the DOM will be reflected in the collection.
    - If no elements with the specified tag name exist, the collection will be empty.
- **Example**:
    ```javascript
    // Select all paragraph elements
    const paragraphs = document.getElementsByTagName('p');

    // Add a margin to each paragraph
    for (const paragraph of paragraphs) {
        paragraph.style.margin = '10px';
    }

    // Log the total number of paragraphs
    console.log(`Total paragraphs: ${paragraphs.length}`);
    ```
- **Important Notes**:
    - This method is efficient for selecting elements by tag name but may not be suitable for complex queries.
    - Use it when you need a live collection of elements for batch operations.

### 4. `document.querySelector(selector)`
- **Description**: Selects the first element in the document that matches the specified CSS selector. The selector can be an ID, class, tag, or a combination of these.
- **Returns**: The first matching element, or `null` if no match is found.
- **Common Use Cases**:
    - Selecting elements using complex CSS selectors, such as descendant or sibling combinators.
    - Accessing a specific element when multiple elements share the same class or tag.
- **Properties**:
    - `classList`: Provides access to the list of classes for the selected element.
    - `attributes`: Allows access to all attributes of the selected element.
    - `style`: Enables inline styles to be modified directly on the element.
- **Example**:
    ```javascript
    // Select the first element with the class 'container' that has a child with the class 'item'
    const element = document.querySelector('.container > .item');

    // Change the background color of the selected element
    element.style.backgroundColor = 'yellow';

    // Log the list of classes for the element
    console.log(element.classList);
    ```
- **Important Notes**:
    - This method is ideal for selecting a single element with a specific CSS selector.
    - It is not live, so changes to the DOM after selection will not affect the result.

### 5. `document.querySelectorAll(selector)`
- **Description**: Selects all elements in the document that match the specified CSS selector.
- **Returns**: A static `NodeList` of matching elements. Unlike `HTMLCollection`, this list does not update automatically if the document changes.
- **Common Use Cases**:
    - Selecting multiple elements using complex CSS selectors.
    - Iterating over a group of elements to apply changes or retrieve information.
- **Properties**:
    - `length`: The number of elements in the NodeList.
    - `forEach(callback)`: Iterates over each element in the NodeList, executing the provided callback function.
- **Example**:
    ```javascript
    // Select all elements with the class 'list-item'
    const items = document.querySelectorAll('.list-item');

    // Log each item to the console
    items.forEach(item => console.log(item));

    // Change the text color of all items to red
    items.forEach(item => {
        item.style.color = 'red';
    });
    ```
- **Important Notes**:
    - The `NodeList` is static, meaning it does not reflect changes to the DOM after selection.
    - Use this method for precise and complex queries involving multiple elements.

-----------------------------
## Using Properties & Methods

### `innerText`
- **Description**: Shows the visible text contained in a node.
- **Use Case**: Useful for retrieving or modifying the text content of an element as it appears to the user.
- **Example**:
    ```javascript
    const element = document.getElementById('example');
    console.log(element.innerText); // Logs the visible text
    element.innerText = 'Updated Text'; // Updates the visible text
    ```

### `textContent`
- **Description**: Shows all the full text, including hidden elements which is written in the HTML Document.
- **Use Case**: Ideal for retrieving or modifying the raw text content of an element, regardless of visibility.
- **Example**:
    ```javascript
    const element = document.getElementById('example');
    console.log(element.textContent); // Logs all text, including hidden
    element.textContent = 'New Content'; // Updates the text content
    ```

### `innerHTML`
- **Description**: Shows the full markup, including HTML tags.
- **Use Case**: Useful for retrieving or modifying the HTML structure of an element.
- **Example**:
    ```javascript
    const element = document.getElementById('example');
    console.log(element.innerHTML); // Logs the HTML content
    element.innerHTML = '<strong>Bold Text</strong>'; // Updates the HTML content
    ```

--------------------------
## Manipulating Attributes

Attributes in the DOM can be dynamically accessed and modified using JavaScript. The DOM provides methods to retrieve and update attributes of elements, enabling developers to create interactive and dynamic web applications.

### `getAttribute(attr)`
- **Description**: Retrieves the value of the specified attribute from an element.
- **Parameters**:
    - `attr`: The name of the attribute to retrieve.
- **Use Case**: Useful for retrieving the value of custom attributes or standard attributes like `href`, `src`, or `data-*`.
- **Example**:
    ```javascript
    const link = document.querySelector('a');
    const hrefValue = link.getAttribute('href');
    console.log(hrefValue); // Logs the value of the 'href' attribute
    ```

### `setAttribute(attr, val)`
- **Description**: Sets or updates the value of the specified attribute on an element.
- **Parameters**:
    - `attr`: The name of the attribute to set.
    - `val`: The value to assign to the attribute.
- **Returns**: `undefined`.
- **Use Case**: Ideal for dynamically updating attributes such as `src`, `alt`, `class`, or custom attributes.
- **Example**:
    ```javascript
    // Select the image element
    const image = document.querySelector('img');

    // Update the 'src' attribute to point to a new image
    image.setAttribute('src', 'new-image.jpg');

    // Update the 'alt' attribute to provide a new description
    image.setAttribute('alt', 'A new image description');
    ```

### Notes
- These methods work with both standard and custom attributes.
- Use `getAttribute` to ensure you retrieve the exact value of an attribute, as some properties (like `href`) may return an absolute URL when accessed directly.
- Use `setAttribute` to ensure the attribute is updated correctly, especially for custom attributes or attributes not directly accessible as properties.

By mastering these methods, developers can efficiently manipulate attributes to create dynamic and responsive web applications.

----------------------------------------
## Manipulating Classes with `classList`

The `classList` property provides a convenient way to manipulate the classes of an element. It allows you to add, remove, toggle, and check for the presence of classes without directly modifying the `className` property.

### `classList.add(className)`
- **Description**: Adds one or more classes to the element.
- **Parameters**:
    - `className`: The name(s) of the class(es) to add. Multiple class names can be provided as separate arguments.
- **Use Case**: Useful for dynamically applying styles or behaviors to elements.
- **Example**:
    ```javascript
    const element = document.querySelector('.box');
    element.classList.add('highlight', 'rounded'); // Adds 'highlight' and 'rounded' classes
    ```

### `classList.remove(className)`
- **Description**: Removes one or more classes from the element.
- **Parameters**:
    - `className`: The name(s) of the class(es) to remove. Multiple class names can be provided as separate arguments.
- **Use Case**: Ideal for removing styles or behaviors dynamically.
- **Example**:
    ```javascript
    const element = document.querySelector('.box');
    element.classList.remove('highlight', 'rounded'); // Removes 'highlight' and 'rounded' classes
    ```

### `classList.contains(className)`
- **Description**: Checks if the element has the specified class.
- **Parameters**:
    - `className`: The name of the class to check.
- **Returns**: `true` if the class exists, otherwise `false`.
- **Use Case**: Useful for conditionally applying logic based on the presence of a class.
- **Example**:
    ```javascript
    const element = document.querySelector('.box');
    if (element.classList.contains('highlight')) {
        console.log('The element is highlighted.');
    }
    ```

### `classList.toggle(className, force)`
- **Description**: Toggles the presence of a class on the element. Optionally, you can force the class to be added or removed.
- **Parameters**:
    - `className`: The name of the class to toggle.
    - `force` (optional): A boolean value. If `true`, the class will be added; if `false`, it will be removed.
- **Returns**: `true` if the class is present after the toggle, otherwise `false`.
- **Use Case**: Ideal for toggling styles or behaviors based on user interaction.
- **Example**:
    ```javascript
    const element = document.querySelector('.box');
    element.classList.toggle('highlight'); // Toggles the 'highlight' class
    element.classList.toggle('rounded', true); // Ensures the 'rounded' class is added
    ```

### Notes
- The `classList` property is a modern and efficient way to manage classes compared to directly modifying the `className` property.
- It is supported in all modern browsers, but older browsers like IE9 may require polyfills.

By leveraging `classList`, developers can easily manage the classes of elements, enabling dynamic and interactive styling in web applications.

---------------------
## Navigating the DOM

Navigating the DOM is essential for accessing and manipulating elements relative to other elements in the DOM tree. JavaScript provides several properties to traverse the DOM and interact with parent, child, and sibling elements.

### 1. `parentElement`
- **Description**: Retrieves the parent element of the current node.
- **Returns**: The parent element, or `null` if the node has no parent or is not an element.
- **Use Case**: Useful for moving up the DOM tree to access or modify parent elements.
- **Example**:
    ```javascript
    const child = document.querySelector('.child');
    const parent = child.parentElement;
    console.log(parent); // Logs the parent element
    ```

### 2. `children`
- **Description**: Returns a live `HTMLCollection` of the child elements of the current node.
- **Returns**: A collection of child elements, or an empty collection if there are no child elements.
- **Use Case**: Ideal for iterating over child elements or accessing specific children by index.
- **Example**:
    ```javascript
    const parent = document.querySelector('.parent');
    const children = parent.children;
    console.log(children); // Logs the child elements
    ```

### 3. `previousElementSibling` / `nextElementSibling`
- **Description**: Retrieves the previous or next sibling element of the current node.
- **Returns**: The sibling element, or `null` if there is no sibling in the specified direction.
- **Use Case**: Useful for navigating between sibling elements in the DOM tree.
- **Example**:
    ```javascript
    const current = document.querySelector('.current');
    const previous = current.previousElementSibling;
    const next = current.nextElementSibling;
    console.log(previous); // Logs the previous sibling element
    console.log(next); // Logs the next sibling element
    ```

### Notes
- These properties are read-only and provide a straightforward way to traverse the DOM.
- Use these properties to navigate the DOM tree dynamically and interact with related elements.

By mastering DOM navigation, developers can efficiently traverse and manipulate the structure of web pages, enabling dynamic and responsive user experiences.

-------------------------------
## Adding Elements in JavaScript

When working with the DOM (Document Object Model), adding elements dynamically to a webpage is a common task. Below are the methods used to create and insert elements into the DOM.

### 1. `document.createElement(tagName)`
The `createElement` method is used to create a new HTML element. The `tagName` parameter specifies the type of element to create (e.g., `'p'` for a paragraph, `'div'` for a division).

```javascript
const newElement = document.createElement('p');
```

This creates a `<p>` element, but it is not yet added to the DOM.

---

### 2. `appendChild(element)`
The `appendChild` method is used to add a child element to a parent node. It appends the element as the last child of the parent.

```javascript
const parent = document.getElementById('parentElement');
const child = document.createElement('p');
child.textContent = 'This is a paragraph.';
parent.appendChild(child);
```

---

### 3. `append(element)`
The `append` method is similar to `appendChild`, but it is more flexible. It allows you to add multiple elements or text nodes at once.

```javascript
const parent = document.getElementById('parentElement');
const child = document.createElement('p');
child.textContent = 'This is a paragraph.';
parent.append(child, ' Additional text.');
```

---

### 4. `prepend(element)`
The `prepend` method inserts an element or text node as the first child of a parent node.

```javascript
const parent = document.getElementById('parentElement');
const child = document.createElement('p');
child.textContent = 'This is a paragraph.';
parent.prepend(child);
```

---

### 5. `insertAdjacent(where, element)`
The `insertAdjacent` method allows you to insert an element at a specific position relative to another element. The `where` parameter can have one of the following values:
- `'beforebegin'`: Before the element itself.
- `'afterbegin'`: Inside the element, before its first child.
- `'beforeend'`: Inside the element, after its last child.
- `'afterend'`: After the element itself.

```javascript
const reference = document.getElementById('referenceElement');
const newElement = document.createElement('p');
newElement.textContent = 'This is a paragraph.';
reference.insertAdjacentElement('beforebegin', newElement);
```

---

#### Summary Table

| Method               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `createElement`      | Creates a new element but does not add it to the DOM.                      |
| `appendChild`        | Appends an element as the last child of a parent.                          |
| `append`             | Appends one or more elements or text nodes to a parent.                   |
| `prepend`            | Inserts an element or text node as the first child of a parent.           |
| `insertAdjacent`     | Inserts an element at a specific position relative to another element.     |

Use these methods to dynamically manipulate the DOM and create interactive web applications.

## Remove elements in javascript 

Removing elements from the DOM is a common task when dynamically updating a webpage. JavaScript provides several methods to remove elements efficiently.

---

### 1. `removeChild(child)`
- **Description**: Removes a specified child element from its parent node.
- **Parameters**:
    - `child`: The child element to be removed.
- **Returns**: The removed child element.
- **Use Case**: Useful when you have a reference to the parent element and need to remove one of its children.
- **Example**:
        ```javascript
        // Select the parent element
        const parent = document.getElementById('parentElement');

        // Select the child element to be removed
        const child = document.getElementById('childElement');

        // Remove the child element
        parent.removeChild(child);
        console.log('Child element removed:', child);
        ```
- **Notes**:
    - The `child` element must be a direct child of the `parent` element; otherwise, an error will be thrown.
    - This method is useful when you need to remove a specific child element while keeping the parent intact.

---

### 2. `remove()`
- **Description**: Removes the element from the DOM directly.
- **Parameters**: None.
- **Returns**: `undefined`.
- **Use Case**: Ideal for removing an element when you have a direct reference to it, without needing to reference its parent.
- **Example**:
        ```javascript
        // Select the element to be removed
        const element = document.getElementById('elementToRemove');

        // Remove the element
        element.remove();
        console.log('Element removed from the DOM');
        ```
- **Notes**:
    - The `remove()` method is simpler and more modern compared to `removeChild`.
    - It does not require a reference to the parent element, making it more convenient in many cases.
    - Supported in all modern browsers, but may require a polyfill for older browsers like IE.

---

### Key Differences Between `removeChild` and `remove`
| Method         | Requires Parent Reference | Returns Removed Element | Browser Support       |
|----------------|---------------------------|--------------------------|-----------------------|
| `removeChild`  | Yes                       | Yes                      | Supported in all browsers |
| `remove`       | No                        | No                       | Modern browsers only  |

---

By using these methods, developers can efficiently remove elements from the DOM, enabling dynamic and responsive web applications.