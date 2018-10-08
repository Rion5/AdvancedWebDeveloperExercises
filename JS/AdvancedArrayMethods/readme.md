# **Advanced Array Methods**

## **forEach()**

**Definition:** Executes a provided function once for each array element

* Iterates through an array
* Runs a callback function on each value in the array
* **ALWAYS** returns *'undefined'*

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
array.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);
```

**Function:** Accepts an array of strings and returns a new array with only the first and last character of each string

```js
function showFirstAndLast(arr){
  var results = [];
  arr.forEach((element, index) =>{
    var firstChar = element[0];
    var lastChar = element[element.length-1];
    var result = firstChar + lastChar;
    results.push(result);
  });
  return results;
}
```

**Function: Accept an array of objects, a key and a value and returns the array passed to the function with the new key and value added for each object.**

```js
function addKeyAndValue(arr,key,value){
  arr.forEach(element => {
    element[key] = value; //IE) arr[0].key = value
  });
  return arr;
}
```
