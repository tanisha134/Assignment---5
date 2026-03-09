# GitHub Issues Tracker

This project is a simple issue tracker dashboard built using HTML, TailwindCSS, DaisyUI, and JavaScript. It loads issues from an API and displays them as cards. Users can filter issues by status, search for issues, and view detailed information in a modal.

---

## 1. Difference between var, let, and const

`var`, `let`, and `const` are used to declare variables in JavaScript.

* **var** is the old way of declaring variables. It can be re-declared and updated, and it has function scope.
* **let** is used for variables that can change later. It cannot be re-declared in the same scope and it has block scope.
* **const** is used for values that should not change. Once declared, the value cannot be reassigned.

---

## 2. What is the spread operator (...)

The spread operator (`...`) is used to expand elements from arrays or objects.
It is commonly used to copy or merge data.

Example:

```javascript
const numbers = [1,2,3]
const newNumbers = [...numbers,4]
```

---

## 3. Difference between map(), filter(), and forEach()

These are array methods used to work with lists of data.

* **map()** creates a new array by transforming each element.
* **filter()** creates a new array with elements that match a condition.
* **forEach()** simply loops through the array but does not return a new array.

---

## 4. What is an arrow function?

Arrow functions are a shorter way to write functions in JavaScript.

Example:

```javascript
const add = (a,b) => a + b
```

They make the code cleaner and are commonly used in modern JavaScript.

---

## 5. What are template literals?

Template literals are strings written using backticks (`` ` ``).
They allow embedding variables and expressions directly inside a string.

Example:

```javascript
const name = "Tanisha"
console.log(`Hello ${name}`)
```

They make string formatting easier and more readable.
