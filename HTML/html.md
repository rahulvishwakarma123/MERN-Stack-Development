# HTML Tags and Their Frequently Used Attributes

HTML (HyperText Markup Language) is the standard language for creating web pages. Below are some of the most necessary HTML tags and their frequently used attributes, along with examples.

## Document Structure

### 1. `<!DOCTYPE html>`
Defines the document type and version of HTML.

```html
<!DOCTYPE html>
```

### 2. `<html>`
The root element of an HTML document.

```html
<html lang="en">
```

#### Attributes:
- `lang`: Specifies the language of the document.
- `dir`: Specifies the text direction of the document (ltr for left-to-right, rtl for right-to-left).

### 3. `<head>`
Contains meta-information about the HTML document.

```html
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
```

#### Attributes:
- `charset`: Specifies the character encoding for the HTML document.

### 4. `<title>`
Defines the title of the document, shown in the browser's title bar or tab.

```html
<title>My Web Page</title>
```

### 5. `<body>`
Contains the content of the HTML document.

```html
<body>
    <h1>Welcome to My Web Page</h1>
</body>
```

#### Attributes:
- `bgcolor`: Specifies the background color of the document.
- `text`: Specifies the color of the text.
- `link`: Specifies the color of unvisited links.
- `vlink`: Specifies the color of visited links.

## Text Content

### 6. `<h1>` to `<h6>`
Defines HTML headings, with `<h1>` being the highest (or most important) level and `<h6>` the least.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

#### Attributes:
- `align`: Specifies the alignment of the heading (left, right, center, justify).

### 7. `<p>`
Defines a paragraph.

```html
<p>This is a paragraph.</p>
```

#### Attributes:
- `align`: Specifies the alignment of the paragraph (left, right, center, justify).

### 8. `<a>`
Defines a hyperlink.

```html
<a href="https://www.example.com">Visit Example</a>
```

#### Attributes:
- `href`: Specifies the URL of the page the link goes to.
- `target`: Specifies where to open the linked document.
- `title`: Specifies extra information about the link.
- `rel`: Specifies the relationship between the current document and the linked document.

### 9. `<img>`
Embeds an image in the HTML document.

```html
<img src="image.jpg" alt="Description of image">
```

#### Attributes:
- `src`: Specifies the path to the image.
- `alt`: Provides alternative text for the image.
- `width`: Specifies the width of the image.
- `height`: Specifies the height of the image.
- `title`: Provides additional information about the image.

## Lists

### 10. `<ul>` and `<ol>`
Defines unordered (bulleted) and ordered (numbered) lists, respectively.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>
```

### 11. `<li>`
Defines a list item.

```html
<li>List item</li>
```

#### Attributes:
- `value`: Specifies the value of a list item in an ordered list.

## Sections

### 12. `<div>`
Defines a division or section in an HTML document.

```html
<div>
    <p>This is a section.</p>
</div>
```

#### Attributes:
- `id`: Specifies a unique id for the element.
- `class`: Specifies one or more class names for the element.
- `style`: Specifies inline CSS styles for the element.

### 13. `<span>`
Defines a section in a document for inline elements.

```html
<span>This is a span element.</span>
```

#### Attributes:
- `id`: Specifies a unique id for the element.
- `class`: Specifies one or more class names for the element.
- `style`: Specifies inline CSS styles for the element.

## Forms

### 14. `<form>`
Defines an HTML form for user input.

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
```

#### Attributes:
- `action`: Specifies where to send the form data.
- `method`: Specifies the HTTP method to use when sending form data.
- `enctype`: Specifies how the form data should be encoded when submitting it to the server.

### 15. `<input>`
Defines an input control.

```html
<input type="text" name="username">
```

#### Attributes:
- `type`: Specifies the type of input (text, password, submit, etc.).
- `name`: Specifies the name of the input.
- `value`: Specifies the initial value of the input.
- `placeholder`: Specifies a short hint that describes the expected value of the input.
- `required`: Specifies that the input field must be filled out before submitting the form.

### 16. `<button>`
Defines a clickable button.

```html
<button type="button">Click Me!</button>
```

#### Attributes:
- `type`: Specifies the type of button (button, submit, reset).
- `disabled`: Specifies that the button should be disabled.

### 17. `<label>`
Defines a label for an `<input>` element.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

#### Attributes:
- `for`: Specifies which form element a label is bound to.

### 18. `<textarea>`
Defines a multi-line text input control.

```html
<textarea id="message" name="message" rows="4" cols="50"></textarea>
```

#### Attributes:
- `rows`: Specifies the number of visible text lines.
- `cols`: Specifies the visible width of the text area.

### 19. `<select>`
Defines a drop-down list.

```html
<select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>
```

#### Attributes:
- `name`: Specifies the name of the drop-down list.
- `id`: Specifies a unique id for the drop-down list.
- `multiple`: Specifies that multiple options can be selected.

### 20. `<option>`
Defines an option in a drop-down list.

```html
<option value="volvo">Volvo</option>
```

#### Attributes:
- `value`: Specifies the value to be sent to a server.
- `selected`: Specifies that the option should be pre-selected when the page loads.

### 21. `<fieldset>`
Groups related elements in a form.

```html
<fieldset>
    <legend>Personal Information</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname">
</fieldset>
```

#### Attributes:
- `disabled`: Specifies that the group of form elements should be disabled.
- `form`: Specifies the form the fieldset belongs to.
- `name`: Specifies a name for the fieldset.

### 22. `<legend>`
Defines a caption for a `<fieldset>` element.

```html
<fieldset>
    <legend>Personal Information</legend>
    <!-- form elements -->
</fieldset>
```

### 23. `<datalist>`
Specifies a list of pre-defined options for an `<input>` element.

```html
<input list="browsers" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
</datalist>
```

#### Attributes:
- `id`: Specifies a unique id for the datalist.

### 24. `<output>`
Defines the result of a calculation.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="a" value="50"> +
    <input type="number" id="b" value="50">
    = <output name="result" for="a b">100</output>
</form>
```

#### Attributes:
- `for`: Specifies the relationship between the result and the elements used in the calculation.
- `name`: Specifies a name for the output element.

## Tables

### 25. `<table>`
Defines a table.

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

#### Attributes:
- `border`: Specifies the width of the border around the table.
- `cellpadding`: Specifies the space between the cell content and its borders.
- `cellspacing`: Specifies the space between cells.

### 26. `<tr>`
Defines a row in a table.

```html
<tr>
    <td>Row data</td>
</tr>
```

#### Attributes:
- `align`: Specifies the alignment of the content in the row.
- `bgcolor`: Specifies the background color of the row.

### 27. `<th>`
Defines a header cell in a table.

```html
<th>Header</th>
```

#### Attributes:
- `scope`: Specifies whether the header cell is for a row, column, or group of rows or columns.

### 28. `<td>`
Defines a cell in a table.

```html
<td>Cell data</td>
```

#### Attributes:
- `colspan`: Specifies the number of columns a cell should span.
- `rowspan`: Specifies the number of rows a cell should span.

## Metadata

### 29. `<meta>`
Defines metadata about an HTML document.

```html
<meta name="description" content="Free Web tutorials">
```

#### Attributes:
- `name`: Specifies the name of the metadata.
- `content`: Specifies the value of the metadata.
- `http-equiv`: Provides an HTTP header for the information/value of the content attribute.

### 30. `<link>`
Defines the relationship between the current document and an external resource.

```html
<link rel="stylesheet" href="styles.css">
```

#### Attributes:
- `rel`: Specifies the relationship between the current document and the linked resource.
- `href`: Specifies the URL of the linked resource.
- `type`: Specifies the MIME type of the linked resource.

## Scripts and Styles

### 31. `<script>`
Defines a client-side script.

```html
<script src="script.js"></script>
```

#### Attributes:
- `src`: Specifies the URL of an external script file.
- `type`: Specifies the MIME type of the script.
- `async`: Specifies that the script will be executed asynchronously.
- `defer`: Specifies that the script will be executed when the page has finished parsing.

### 32. `<style>`
Defines style information for an HTML document.

```html
<style>
    body {
        background-color: lightblue;
    }
</style>
```

#### Attributes:
- `type`: Specifies the MIME type of the style sheet.

## Media

### 33. `<iframe>`
Defines an inline frame.

```html
<iframe src="https://www.example.com" width="300" height="200"></iframe>
```

#### Attributes:
- `src`: Specifies the URL of the page to embed.
- `width`: Specifies the width of the iframe.
- `height`: Specifies the height of the iframe.
- `frameborder`: Specifies whether or not to display a border around the iframe.
- `allowfullscreen`: Allows the iframe to be displayed in fullscreen mode.

### 34. `<audio>`
Defines sound content.

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

#### Attributes:
- `src`: Specifies the URL of the audio file.
- `controls`: Specifies that audio controls should be displayed (such as a play/pause button).
- `autoplay`: Specifies that the audio will start playing as soon as it is ready.
- `loop`: Specifies that the audio will start over again, every time it is finished.

### 35. `<video>`
Defines a video or movie.

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

#### Attributes:
- `src`: Specifies the URL of the video file.
- `width`: Specifies the width of the video player.
- `height`: Specifies the height of the video player.
- `controls`: Specifies that video controls should be displayed (such as a play/pause button).
- `autoplay`: Specifies that the video will start playing as soon as it is ready.
- `loop`: Specifies that the video will start over again, every time it is finished.

These are some of the most commonly used HTML tags and their attributes. They form the building blocks of any HTML document.