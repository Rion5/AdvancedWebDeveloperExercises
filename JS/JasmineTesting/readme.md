# **Jasmine Testing**

## **What is Jasmine?**

**Definition:** Jasmine is an open source testing framework for JavaScript.

## **Essential Keywords**

**Describe:** "Let me describe ___ to you."

**It:** "Let me tell you about ___"

**Expect:** "Here's what I expect"

## **Example**
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