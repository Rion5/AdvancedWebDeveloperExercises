# Advanced JS Notes

## **JS Async Foundation**

### Callback Functions

* Callback functions
  * A function that is passed into another function as a parameter then invoked by that other function
* Higher order functions
  * A function that accepts a callback as a parameter
```js
function callback() {
  console.log("Coming from callback");
}
function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // Callback function is invoked
  console.log("Callback has been invoked");
}
higherOrder(callback);
```

* What are callbacks used for?
  * Advanced Array Methods
  * Browser events
  * AJAX Requests
  * React Development

**Example: Code Reuse with Callbacks**
```js
function sendMessage(message, callback) {
  return callback(message);
}
sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);
var answer = sendMessage("Are you sure??", confirm);
```

---

### **forEach Function**

**Definition:** Executes a provided function once for each array element

```js
function forEach(array, callback) {
  // To be implemented
}

// Callback signature
function callback(curElement, currentIndex, array) {
  // Implemented by the caller of forEach
}
```

**Example:** forEach with all callback parameters

```js
var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});
//result = "my forEach example!!!"
```

---

### **findIndex Function**

**Definition:** Returns the index of the 1st element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.
```js
function findIndex(array, callback) {
  // findIndex code to be implemented
}
function callback(curElement, curIndex, array) {
  // callback implemented by caller of function
}
```

**Example:** Find 1st even number
```js
var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
  return num % 2 === 0;
});
//returned result: 3
```

---

## Stacks

**Definition:** An ordered data structure that keeps track of function invocations *(Part of the JavaScript runtime)*
The bottom of the stack is the first function invoked. The stack is processed from top to bottom.

* Whenever you invoke a function, the details of the invocation are *pushed* to the top of the stack
* Whenever a function returns, the information about the invocation is *popped* off the top of the stack

## Heaps

**Definition:** An area in memory where the data is stored

---

