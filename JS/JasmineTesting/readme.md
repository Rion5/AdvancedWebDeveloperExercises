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
* **toBeCloseTo:**
* **toBeDefined:**
* **toBeTruthy / toBeFalsey:**
* **toBeGreaterThan / toBeLessThan:**
* **toContain**
* **toEqual**
