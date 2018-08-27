# **JS Async Foundation**

## **Callback Functions**

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

## **forEach Function**

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

## **findIndex Function**

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

## **Stacks**

**Definition:** An ordered data structure that keeps track of function invocations *(Part of the JavaScript runtime)*
The bottom of the stack is the first function invoked. The stack is processed from top to bottom.

* Whenever you invoke a function, the details of the invocation are *pushed* to the top of the stack
* Whenever a function returns, the information about the invocation is *popped* off the top of the stack

## **Heaps**

**Definition:** An area in memory where the data is stored

---

## **setTimeout Function**

**Definition:** A function that asynchronously invokes a callback after a delay in milliseconds
```js
 // setTimeout usage
 function callback() {
   console.log("callback function");
 }
 var delay = 1000;  // Delay is in ms
 setTimeout(callback, delay); //setTimeout will invoke callback after delay 
```

**Example:**
```js
setTimeout(function(){
    console.log("Runs in approx. 30s");
}, 30000)
```

**Canceling setTimeout**
```js
//setTimeout returns an timeoutId
 var timerId = setTimeout(function() {
   console.log("This function runs in 30 seconds");
 }, 30000);

 setTimeout(function() {
   console.log("Canceling the first setTimeout", timerId);
   //clearTimeout, given the timeoutId
   clearTimeout(timerId);
 }, 2000);

```

---

## **setInterval Function**

**Definition:** A function that invokes a callback after every x milliseconds, where x is provided to setInterval
```js
 // setInterval usage
 function callback() {
   console.log("callback is called continuously");
 }
 var repeat = 3000;
 setInterval(callback, repeat);
```

**Example:** Increments num, and console.log it every 1s
```js
 var num = 0;
 setInterval(function() {
   num++;
   console.log("num:", num);
 }, 1000);
 //result: num: 1
 //        num: 2
```

**Canceling setInterval**
```js
//Similar to setTimeout, setInterval returns an intervalId
 var num = 0;
 //num will increment until 3, then clearInterval
 var intervalId = setInterval(function() {
   num++;
   console.log("num:", num);
   if (num === 3) {
     clearInterval(intervalId);
   }
 }, 1000);
```

**Practice:** countDown function will accept 1 param which is a time in seconds to count down. The function should console.log the time remaining every second. Once timer get to 0, timer should be stopped and display a message
```js
function countDown(seconds){
  var intervalId = setInterval(function(){
    seconds--;
    if(seconds > 0){
      console.log("Timer:" + seconds);
    }
    if(seconds == 0){
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}
```

---

## **Queues**

**Definition:** An ordered list of functions waiting to be placed on the stack. Functions in the queue are processed on a first in, first out basis (FIFO)

## **Event Loops**

**Definition:** Functionality in the JavaScript runtime that checks the queue when the stack is empty. If the stack is empty, the front of the queue is placed in the stack.

Note: When we make a callback, the callback function is placed in the Queue. The Event Loop waits until the Stack is empty to move the function from the Queue to the Stack

## **JavaScript is Single Threaded**

**Definition:** Has only one call-stack. Code execution is linear. Code that is running cannot be interrupted by something else going on in the program.
```js
// This will not run after '0' seconds as we might assume
// Only after the Stack is empty and the Event Loop moves the callback from the Queue to the Stack
 setTimeout(function() {
   console.log("Hello from the timeout");
 }, 0);

 for (var i = 0; i < 1000000000; i++) {
   var x = i * 2;
 }
 console.log("Done with loop");
```

---

## **Promises**

**Definition:** Is an object that represents a task that will be completed in the future

**Analogy:** Taking a number at a deli. The piece of paper you get is similar to a promise. The help you get at the counter is like the invocation of a callback.

**Example:** Creating a Promise
```js
// Promise Constructor takes a single callback function as a parameter
// the callback has 2 parameters, either a resolve or reject function
 var p1 = new Promise(function(resolve, reject) {
   resolve([1,2,3,4]);
 });

 p1.then(function(arr) {
   console.log("Promise p1 resolved with data:", arr);
 });
```

**Example:** Error Handling
```js
 var p1 = new Promise(function(resolve, reject) {
   var num = Math.random();
   if (num < 0.5) {
     resolve(num);
   } else {
     reject(num);
   }
 });

 p1.then(function(result) {
   console.log("Success:", result);
 }).catch(function(error) {
   console.log("Error:", error);
 });
```

---