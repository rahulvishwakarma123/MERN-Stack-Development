# Table of Contents

1. [Event Bubbling and Propagation in JavaScript](#event-bubbling-and-propagation-in-javascript)
    - [Event Bubbling](#event-bubbling)
      - [Example](#example)
    - [Event Propagation Phases](#event-propagation-phases)
    - [Stopping Propagation](#stopping-propagation)
      - [Example](#example-1)
2. [Event Delegation](#event-delegation)
    - [Why Use Event Delegation?](#why-use-event-delegation)
    - [Example](#example-2)
      - [How It Works](#how-it-works)
    - [Event Delegation in JavaScript DOM](#event-delegation-in-javascript-dom)
      - [Benefits of Event Delegation](#benefits-of-event-delegation)
      - [How Event Delegation Works](#how-event-delegation-works)
      - [Example](#example-3)
      - [Key Points](#key-points)

      
# Event Bubbling and Propagation in JavaScript

## Event Bubbling
Event bubbling is a concept in the DOM (Document Object Model) where an event triggered on a child element propagates up to its parent elements. The event starts from the target element and moves up through its ancestors in the DOM hierarchy.

### Example:
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById('parent').addEventListener('click', () => {
        console.log('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', () => {
        console.log('Child clicked');
    });
</script>
```
**Output when clicking the button:**
1. "Child clicked"
2. "Parent clicked"

## Event Propagation Phases
Event propagation occurs in three phases:
1. **Capturing Phase**: The event travels from the root to the target element.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase**: The event bubbles up from the target element to the root.

## Stopping Propagation
You can stop event propagation using:
- `event.stopPropagation()`: Stops the event from propagating further.
- `event.stopImmediatePropagation()`: Stops propagation and prevents other listeners on the same element from executing.

### Example:
```html
<button id="child">Click Me</button>

<script>
    document.getElementById('child').addEventListener('click', (event) => {
        console.log('Child clicked');
        event.stopPropagation();
    });

    document.body.addEventListener('click', () => {
        console.log('Body clicked');
    });
</script>
```
**Output when clicking the button:**
1. "Child clicked" (Body's event listener won't execute due to `stopPropagation()`).

Understanding event bubbling and propagation is crucial for managing event handling effectively in JavaScript.

# Event Delegation
Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of adding individual event listeners to each child, the parent listens for events and determines the target element using the `event.target` property.

### Why Use Event Delegation?
1. **Improved Performance**: Reduces the number of event listeners, especially for dynamically created elements.
2. **Dynamic Elements**: Handles events for elements added to the DOM after the event listener is attached.

### Example:
```html
<div id="parent">
    <button class="child">Button 1</button>
    <button class="child">Button 2</button>
</div>

<script>
    document.getElementById('parent').addEventListener('click', (event) => {
        if (event.target.classList.contains('child')) {
            console.log(`${event.target.textContent} clicked`);
        }
    });
</script>
```
**Output when clicking a button:**
- "Button 1 clicked" (if Button 1 is clicked)
- "Button 2 clicked" (if Button 2 is clicked)

### How It Works:
1. The event listener is attached to the parent element (`#parent`).
2. When a child button is clicked, the event bubbles up to the parent.
3. The `event.target` property identifies the specific child element that triggered the event.

Event delegation is a powerful pattern for efficient event handling, especially in scenarios involving dynamic content.

### Event Delegation in JavaScript DOM

Event delegation is a design pattern in JavaScript that allows you to handle events efficiently by attaching a single event listener to a parent element, which listens for events on its child elements. This approach leverages the concept of event bubbling, where events propagate from the target element up through its ancestors.

### Benefits of Event Delegation
1. **Improved Performance**: Reduces the number of event listeners, especially when dealing with a large number of child elements.
2. **Dynamic Content Handling**: Enables event handling for elements that are dynamically added to the DOM after the event listener is attached.

### How Event Delegation Works
1. Attach an event listener to a parent element.
2. Use the `event.target` property to determine which child element triggered the event.
3. Apply the desired logic based on the target element.

### Example:
```html
<div id="container">
    <button class="child">Button 1</button>
    <button class="child">Button 2</button>
</div>

<script>
    document.getElementById('container').addEventListener('click', (event) => {
        if (event.target.classList.contains('child')) {
            console.log(`${event.target.textContent} clicked`);
        }
    });
</script>
```

**Output when clicking a button:**
- "Button 1 clicked" (if Button 1 is clicked)
- "Button 2 clicked" (if Button 2 is clicked)

### Key Points:
- The event listener is attached to the parent element (`#container`).
- When a child button is clicked, the event bubbles up to the parent.
- The `event.target` property identifies the specific child element that triggered the event.

Event delegation is particularly useful in scenarios where child elements are created dynamically or when managing a large number of elements. It simplifies code and improves performance by minimizing the number of event listeners in your application.
