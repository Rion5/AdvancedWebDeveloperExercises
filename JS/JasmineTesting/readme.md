# **Jasmine Testing**

## **What is Jasmine?**

**Definition:** Jasmine is an open source testing framework for JavaScript.

## **Essential Keywords**

**Describe:** "Let me describe ___ to you."

**It:** "Let me tell you about ___"

**Expect:** "Here's what I expect"

## **Example**
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.2.1/jasmine.css">
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.2.1/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.2.1/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.2.1/boot.js"></script>
  <script>
  <!-- JasmineTesting goes here -->
  </script>
</body>
</html>
```
JasmineTesting Script
```js
var earth = {
    numberOfPlanetsAwayFromSun: 3
}
//Describe, It, Expect
describe("Earth", function(){
    it("is the 3rd planet from the sun", function(){
        expect(earth.numberOfPlanetsAwayFromSun).toBe(3)
    });
});
```

![image](https://user-images.githubusercontent.com/31965265/45632606-b4a85d80-ba6b-11e8-9395-60a69b5940ac.png)

## **Matchers**

**Definition: Matchers are the functions that we attach to the result of the expect function**

* **toBe / not.toBe**
  * Will use === to compare a value with another
  * NOTE: Different from toEquals.
* **toBeCloseTo**
  * Compare 2 values and accepts a 2nd parameter for precision
* **toBeDefined**
  * Used to make sure certain variables have a specific values and not undefined
* **toBeTruthy / toBeFalsey**
  * Used when we expect a value (when converted t o a boolean) to be true or false
* **toBeGreaterThan / toBeLessThan**
  * Used to check a value or greater or less than the 2nd parameter
* **toContain**
  * Used to see if a value is contained in an array.
* **toEqual**
  * Used to compare reference in memory

## **Hooks**

* **beforeEach / afterEach**
  * Run before/after each "it" callback
* **beforeAll / afterAll**
  * Run before/after all test! Does not reset in between

## **Spies**

**Definition:**
Mock is a fake object that poses as function, without having to go through te overhead of creating the real object. When you create a mock object ite create a fake object that takes the place of the real object. This can speed up the time it takes to run a test.

Mocks can be used to retrieve certain values like how many times the mock function was called. What value the function returned. And how many parameters the function was called with In Jasmine, mocks are referred to as Spies

* A spy can stub (mimic) any function and track calls to it and all arguments.
* Spies only exists in the describe or it block in which it is defined.

**Example**

```js
function add(a, b, c){
  return a+b+c;
}

describe("add", function(){
  var addSpy, result;       //Lexical Scoping
  beforeEach(function(){
    addSpy = spyOn(window, 'add');
    result add spy(1, 2, 3);
  });
  it("can have params tested", function(){
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1,2, 3);
  });
});
```

## **Clock**

**Definition:** Jasmine Clock is available for testing time dependent code. It is installed by invoking ...

```js
jasmine.clock().install
```

**Example:**

```js
describe("a simple setTimeout", function(){
  var sample;
  beforeEach(function(){
    sample = jasmine.createSpy("sampleFunction");
    jasmine.clock().install();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });
  it("is only invoked after 1000 milliseconds", function(){
    setTimeout(function(){
      sample();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sample.not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });
})
```

**Async Tests:**
```js
function getUserInfo(username){
  return $.getJSON('https://api.github.com/users/' + username);
}

describe("#getUserInfo", function(){
  it("returns the correct name for the user", function(done){
    getUserInfo('Rion5').then(function(data){
      expect(data.name).toBe('Chai Grindean');
      done();   //Note: done is being passed and used in the callback function
    });
  });
});
```

---

## **TDD - Test Driven Development**

### Red - Green - Refactor

1) Write the Tests
2) See the tests fail
3) Write code to pass the tests
4) Refactor code as necessary
5) Repeat

## **BDD - Behavior Driven Development**

### A subset of TDD

* Involves being verbose with our style and describing the behavior of the functionality.
* Helpful when testing the design of the software

---

## **Other kinds of tests**

* Unit Tests
  * Tests individual parts of the application.
* Integration tests
  * Tests how our units behave together.
* Acceptance tests
  * Involves performing tests on the full system.
  * This could mean using the application in the browser or on a device to see whether the application functionality satisfies a specification provided.
  * Main purpose is to evaluate the entire business or system requirements
* Stress test
  * Help determine how effective our application can be under unfavorable conditions such as systems going down, high traffic, etc.