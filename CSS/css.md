# CSS Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Selectors](#selectors)
4. [Box Model](#box-model)
5. [Positioning](#positioning)
6. [Flexbox](#flexbox)
7. [Grid](#grid)
8. [Media Queries](#media-queries)
9. [Pseudo-classes-and-Pseudo-elements](#pseudo-classes-and-pseudo-elements)
10. [Animations-and-Transitions](#animations-and-transitions)
11. [Best-Practices](#best-practices)

---

## Introduction
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows developers to control the layout, colors, fonts, and overall appearance of web pages, ensuring a consistent and visually appealing user experience.

---

## Syntax
CSS rules are written in the following format:
```css
selector {
    property: value;
}
```
- **Selector**: Specifies the HTML element(s) to style.
- **Property**: Represents the style attribute to modify (e.g., `color`, `font-size`).
- **Value**: Defines the specific style to apply (e.g., `red`, `16px`).

Example:
```css
p {
    color: blue;
    font-size: 14px;
}
```

---

## Selectors
CSS selectors are patterns used to select and style specific elements. Common types include:

- **Universal Selector (`*`)**: Targets all elements.
  ```css
  * {
      margin: 0;
      padding: 0;
  }
  ```
- **Type Selector (`h1, p`)**: Targets specific HTML tags.
  ```css
  h1 {
      font-weight: bold;
  }
  ```
- **Class Selector (`.class`)**: Targets elements with a specific class.
  ```css
  .highlight {
      background-color: yellow;
  }
  ```
- **ID Selector (`#id`)**: Targets elements with a specific ID.
  ```css
  #header {
      text-align: center;
  }
  ```
- **Attribute Selector (`[type="text"]`)**: Targets elements with specific attributes.
  ```css
  input[type="text"] {
      border: 1px solid #ccc;
  }
  ```
- **Combinators**:
  - **Descendant (` `)**: Targets elements inside another element.
    ```css
    div p {
        color: gray;
    }
    ```
  - **Child (`>`)**: Targets direct child elements.
    ```css
    ul > li {
        list-style: none;
    }
    ```
  - **Adjacent Sibling (`+`)**: Targets the next sibling element.
    ```css
    h1 + p {
        font-size: 14px;
    }
    ```
  - **General Sibling (`~`)**: Targets all siblings after an element.
    ```css
    h1 ~ p {
        color: green;
    }
    ```

---

## Box Model
The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of the following components:

1. **Content**: The innermost part of the box where text or other elements are displayed.
2. **Padding**: The space between the content and the border. It is transparent and can be adjusted using properties like `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
3. **Border**: The edge surrounding the padding. It can be styled using properties like `border-width`, `border-style`, and `border-color`.
4. **Margin**: The outermost space that separates the element from other elements. It can be adjusted using properties like `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

Example:
```css
div {
    width: 200px;
    padding: 10px;
    border: 5px solid black;
    margin: 15px;
}
```

In the example above:
- The content width is `200px`.
- The padding adds `10px` on all sides.
- The border adds `5px` on all sides.
- The margin adds `15px` of space outside the border.

The total width of the element is calculated as:
```
Total Width = Content Width + Padding + Border + Margin
```

For the example:
```
Total Width = 200px + (10px * 2) + (5px * 2) + (15px * 2) = 270px
```

To include padding and border in the element's width and height, use the `box-sizing` property:
```css
div {
    box-sizing: border-box;
}
```
This ensures the specified width and height include padding and border, simplifying layout calculations.


## Positioning
CSS positioning allows you to control the placement of elements on a web page. The `position` property can take the following values:

1. **Static** (default): Elements are positioned according to the normal document flow.
    ```css
    div {
        position: static;
    }
    ```
    - This is the default behavior for all elements.
    - The element is not affected by the `top`, `right`, `bottom`, or `left` properties.

2. **Relative**: Elements are positioned relative to their normal position. The `top`, `right`, `bottom`, and `left` properties adjust the element's position without affecting the layout of surrounding elements.

   Example:
   ```css
   div {
       position: relative;
       top: 10px;
       left: 20px;
   }
   ```
   In this example, the `div` element is moved 10px down and 20px to the right from its original position.

3. **Absolute**: Elements are positioned relative to the nearest positioned ancestor (non-static).
    ```css
    div {
         position: absolute;
         top: 50px;
         left: 100px;
    }
    ```

4. **Fixed**: Elements are positioned relative to the viewport and do not move when scrolling.
    ```css
    div {
         position: fixed;
         bottom: 0;
         right: 0;
    }
    ```

5. **Sticky**: Elements toggle between relative and fixed positioning based on the scroll position.
    ```css
    div {
         position: sticky;
         top: 0;
    }
    ```

---

## Flexbox
The CSS Flexible Box Layout (Flexbox) is a layout model designed for arranging items in a container, even when their size is dynamic. Key properties include:

- **Container Properties**:
  - `display: flex;` or `display: inline-flex;`
  - `flex-direction`: Defines the direction of the main axis (`row`, `row-reverse`, `column`, `column-reverse`).
  - `justify-content`: Aligns items along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).
  - `align-items`: Aligns items along the cross axis (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`).
  - `flex-wrap`: Controls whether items wrap (`nowrap`, `wrap`, `wrap-reverse`).

- **Item Properties**:
  - `flex`: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
  - `align-self`: Overrides `align-items` for individual items.

Example:
```css
.container {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
}
```

---

## Grid
CSS Grid Layout is a powerful layout system for creating two-dimensional designs. Key properties include:

- **Container Properties**:
    - `display: grid;` or `display: inline-grid;`: Defines the container as a grid layout.
    - `grid-template-rows` and `grid-template-columns`: Specify the structure of rows and columns in the grid. You can use values like `px`, `%`, `fr` (fractional units), or `auto`.
        ```css
        .container {
                grid-template-columns: 1fr 2fr 1fr;
                grid-template-rows: auto 100px;
        }
        ```
    - `gap`: Sets the spacing between grid items. You can use `row-gap` and `column-gap` for individual control.
        ```css
        .container {
                gap: 10px;
        }
        ```

    - `grid-auto-rows` and `grid-auto-columns`: Define the size of rows or columns that are automatically created.
        ```css
        .container {
                grid-auto-rows: 100px;
        }
        ```

    - `grid-auto-flow`: Controls how items are placed in the grid when there are more items than defined grid cells. Values include `row`, `column`, `row dense`, and `column dense`.
        ```css
        .container {
                grid-auto-flow: row dense;
        }
        ```

    - `align-items` and `justify-items`: Align grid items within their cells along the cross axis and main axis, respectively. Values include `start`, `end`, `center`, and `stretch`.
        ```css
        .container {
                align-items: center;
                justify-items: stretch;
        }
        ```

    - `align-content` and `justify-content`: Align the entire grid within the container along the cross axis and main axis, respectively.
        ```css
        .container {
                align-content: space-between;
                justify-content: center;
        }
        ```

- **Item Properties**:
    - `grid-row` and `grid-column`: Specify the item's position in the grid. You can use `start / end` syntax to span multiple rows or columns.
        ```css
        .item {
                grid-row: 1 / 3;
                grid-column: 2 / 4;
        }
        ```

    - `grid-area`: Defines a named area for the item or combines `grid-row` and `grid-column` in shorthand.
        ```css
        .item {
                grid-area: 1 / 2 / 3 / 4;
        }
        ```

    - `align-self` and `justify-self`: Override the container's alignment for a specific item.
        ```css
        .item {
                align-self: start;
                justify-self: end;
        }
        ```

    - `place-self`: Shorthand for `align-self` and `justify-self`.
        ```css
        .item {
                place-self: center;
        }
        ```

- **Named Grid Areas**:
    You can define named areas in the grid using `grid-template-areas` and assign items to those areas using `grid-area`.
        ```css
        .container {
                grid-template-areas:
                        "header header"
                        "sidebar main"
                        "footer footer";
                grid-template-columns: 1fr 3fr;
                grid-template-rows: auto 1fr auto;
        }

        .header {
                grid-area: header;
        }
        .sidebar {
                grid-area: sidebar;
        }
        .main {
                grid-area: main;
        }
        .footer {
                grid-area: footer;
        }
        ```
        This approach makes layouts more readable and easier to maintain.

Example:
```css
.container {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: auto;
     gap: 10px;
}
.item {
     grid-column: 1 / 3;
     grid-row: 2;
}
```

---

## Media Queries
Media queries enable responsive design by applying styles based on device characteristics like screen size, resolution, orientation, or aspect ratio. They allow developers to create layouts that adapt seamlessly to different devices, ensuring a better user experience.

### Syntax
Media queries are written using the `@media` rule, followed by a condition and a block of CSS rules. The condition specifies the criteria for applying the styles.

Example:
```css
@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}
```

### Common Use Cases
1. **Responsive Typography**: Adjust font sizes for smaller screens.
   ```css
   @media (max-width: 576px) {
       h1 {
           font-size: 24px;
       }
   }
   ```

2. **Layout Adjustments**: Change the layout for different screen sizes.
   ```css
   @media (min-width: 768px) and (max-width: 992px) {
       .container {
           display: flex;
           flex-direction: column;
       }
   }
   ```

3. **Hiding/Showing Elements**: Show or hide elements based on screen size.
   ```css
   @media (max-width: 480px) {
       .sidebar {
           display: none;
       }
   }
   ```

### Logical Operators
- **`and`**: Combine multiple conditions.
  ```css
  @media (min-width: 600px) and (orientation: landscape) {
      body {
          background-color: lightblue;
      }
  }
  ```

- **`or` (`,`)**: Apply styles if any condition is true.
  ```css
  @media (max-width: 768px), (orientation: portrait) {
      body {
          font-size: 16px;
      }
  }
  ```

- **`not`**: Exclude a condition.
  ```css
  @media not (min-width: 1024px) {
      body {
          background-color: lightgray;
      }
  }
  ```

### Best Practices
1. Use a **mobile-first approach** by writing base styles for smaller screens and adding media queries for larger screens.
2. Group related media queries to improve readability and maintainability.
3. Test your design on multiple devices to ensure consistent behavior.

### Common Breakpoints
- Extra small devices (phones): `max-width: 576px`
- Small devices (tablets): `max-width: 768px`
- Medium devices (desktops): `max-width: 992px`
- Large devices (large desktops): `max-width: 1200px`
- Extra-large devices: `min-width: 1201px`
- Custom breakpoints can also be defined based on your design requirements.

Common breakpoints:
- Small devices: `max-width: 576px`
- Medium devices: `max-width: 768px`
- Large devices: `max-width: 992px`
- Extra-large devices: `max-width: 1200px`

---

## Pseudo-classes and Pseudo-elements
- **Pseudo-classes**: Define the state of an element (e.g., `:hover`, `:focus`, `:nth-child()`).
  ```css
  a:hover {
        color: red;
  }
  ```

- **Pseudo-elements**: Style specific parts of an element (e.g., `::before`, `::after`).
  ```css
  p::before {
        content: "Note: ";
        font-weight: bold;
  }
  ```

---

## Animations and Transitions
CSS animations and transitions add interactivity and visual effects to web pages. Below are their definitions and basic properties:

### Transitions
Transitions allow you to smoothly change property values over a specified duration.

#### Syntax
```css
selector {
    transition: property duration timing-function delay;
}
```

#### Basic Properties
1. **`transition-property`**: Specifies the CSS property to transition (e.g., `background-color`, `transform`). Use `all` to apply to all properties.
   ```css
   transition-property: background-color;
   ```

2. **`transition-duration`**: Specifies the duration of the transition (e.g., `0.5s`, `200ms`).
   ```css
   transition-duration: 0.3s;
   ```

3. **`transition-timing-function`**: Defines the speed curve of the transition. Common values:
   - `ease` (default)
   - `linear`
   - `ease-in`
   - `ease-out`
   - `ease-in-out`
   ```css
   transition-timing-function: ease-in-out;
   ```

4. **`transition-delay`**: Specifies the delay before the transition starts (e.g., `0s`, `100ms`).
   ```css
   transition-delay: 0.2s;
   ```

#### Example
```css
button {
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: blue;
}
```

---

### Animations
Animations allow you to define keyframes for more complex effects, enabling elements to change styles over time. They provide a way to create dynamic and engaging user experiences.

#### Syntax
```css
selector {
    animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}
```

#### Basic Properties
1. **`animation-name`**: Specifies the name of the `@keyframes` to use.
   ```css
   animation-name: slideIn;
   ```

2. **`animation-duration`**: Specifies the duration of the animation (e.g., `1s`, `500ms`).
   ```css
   animation-duration: 1s;
   ```

3. **`animation-timing-function`**: Defines the speed curve of the animation. Common values:
   - `ease` (default)
   - `linear`
   - `ease-in`
   - `ease-out`
   - `ease-in-out`
   ```css
   animation-timing-function: ease-in-out;
   ```

4. **`animation-delay`**: Specifies the delay before the animation starts (e.g., `0s`, `200ms`).
   ```css
   animation-delay: 0.5s;
   ```

5. **`animation-iteration-count`**: Specifies how many times the animation should run. Values:
   - `infinite`
   - A specific number (e.g., `1`, `3`).
   ```css
   animation-iteration-count: infinite;
   ```

6. **`animation-direction`**: Specifies whether the animation should play in reverse or alternate. Values:
   - `normal` (default)
   - `reverse`
   - `alternate`
   - `alternate-reverse`
   ```css
   animation-direction: alternate;
   ```

7. **`animation-fill-mode`**: Specifies how the element should apply styles before/after the animation. Values:
   - `none` (default)
   - `forwards`
   - `backwards`
   - `both`
   ```css
   animation-fill-mode: forwards;
   ```

8. **`animation-play-state`**: Specifies whether the animation is running or paused. Values:
   - `running` (default)
   - `paused`
   ```css
   animation-play-state: paused;
   ```

#### Keyframes
The `@keyframes` rule defines the intermediate steps of an animation. Each keyframe specifies a percentage (or keywords like `from` and `to`) and the styles to apply at that point.

Example:
```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        transform: translateX(-50%);
        opacity: 0.5;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

#### Shorthand Property
The `animation` shorthand combines all the animation properties into a single declaration:
```css
animation: slideIn 1s ease-in-out 0.5s infinite alternate forwards;
```

#### Advanced Examples

1. **Bouncing Animation**:
    ```css
    @keyframes bounce {
         0%, 100% {
              transform: translateY(0);
         }
         50% {
              transform: translateY(-20px);
         }
    }
    div {
         animation: bounce 2s infinite ease-in-out;
    }
    ```

2. **Color Change Animation**:
    ```css
    @keyframes colorChange {
         0% {
              background-color: red;
         }
         50% {
              background-color: yellow;
         }
         100% {
              background-color: green;
         }
    }
    div {
         animation: colorChange 3s linear infinite;
    }
    ```

3. **Rotating Animation**:
    ```css
    @keyframes rotate {
         from {
              transform: rotate(0deg);
         }
         to {
              transform: rotate(360deg);
         }
    }
    div {
         animation: rotate 5s linear infinite;
    }
    ```

#### Best Practices

1. Use animations sparingly to avoid overwhelming users.
2. Optimize animations for performance, especially on mobile devices.
3. Test animations across different browsers to ensure compatibility.
4. Use `will-change` to hint the browser about elements that will be animated:
    ```css
    div {
         will-change: transform, opacity;
    }
    ```
5. Combine animations with transitions for smoother effects.

Animations can significantly enhance the user experience when used thoughtfully, making interfaces more interactive and visually appealing.

