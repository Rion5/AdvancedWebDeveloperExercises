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

**Function:** Accept an array of objects, a key and a value and returns the array passed to the function with the new key and value added for each object.

```js
function addKeyAndValue(arr,key,value){
  arr.forEach(element => {
    element[key] = value; //IE) arr[0].key = value
  });
  return arr;
}
```

---

## **map**

**Definition:** The map objects holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.

* Creates a new array
* Iterates through an array
* Runs a callback function for each value in the array.
* Pushes the result of the callback function to the new array
* Returns the new array.
* **map ALWAYS returns a new array of the SAME length as the array it is invoked on**

**Function:** Accepts an array of objects and returns a new array with the values of the key with a name of first and value of a key with in the name of last in each object

```js
var arr = [1, 2, 3];
var doubleArr = (arr) => {
  return arr.map((value, index, array) => {
    return value * 2;
  });
}
//returned: [2, 4, 6]
```

---

## **filter**

**Definition:** Create new array with all the elements that pass the test implemented by the provided function.

* Creates a new array
* Iterates through an array
* Runs a callback function on each values in the array
* If the callback function returns true, that values will pushed to the new array
* If the callback function returns false, that value will be ignored from the new array
* **The callback ALWAYS returns a boolean**

**Function:**

```js
var arr = [1,2,3];
arr.filter(function(value, index, array){
  // no need for an if statement
  // just return an expression
  // that evaluates to true or false.
  return value > 2;
})
```