# **CSS Animations: Transforms and Transitions**

## **Pseudo-classes**

**Definition:** Pseudo-classes are special selectors that specifies a special state of the selected element(s)

* **:hover** - Can be used to apply a style when the user hovers over a button.

```css
/*If the User hovers over a div, make the background purple*/
div:hover {
    background: purple;
}
```

* **:focus** - Triggers when an element "receives focus"
  * Generally triggered when the user clicks or taps on an element

```css
/*Select any input that has the 'focus' state, make the text red*/
input:focus{
    color: red;
}
```

* **:active** - Triggers when an element is "being activated"

```css
/*When a button is being held down it is active and will change the text color to green*/
button:active{
    color: green;
}
```

---

## **Transforms**

**Definition:** Lets you manipulate the coordinate space of the CSS visual formatting model *(move, warp, rotate, and scale elements)*

* **:translate()** - Move an element

```css
/*Move all divs 100px right*/
div{
    transform: translateX(100px);
}
```

* **:rotate()** - Rotate element at the element's origin point

```css
div{
    transform: rotate(90deg);
}
```

* **:scale()** - Alter the size of an element

```css
/*Double the size of all divs*/
div{
    transform: scale(2);
}
```

* **:transform-origin()** - Modify the origin for transformations of an element

```css
/*Sets the origin at the top left which is the same as (0, 0)*/
.transformed{
    transform-origin: left top;
}
```

---

## **Transitions**

**Definition:** Allows user to control animation speed when changing CSS properties (duration, property, delay, timing-function)

* **transition-duration: (time);** - How long should the transition last?

```css
.transition{
    transition-duration: 1s;
}
```

* **transition-property: (property);** - What properties should be transitioned?
  * background, color, opacity, transform, all

```css
.transition{
    transition-property: border-radius;
}
```

* **transition-delay: (time);** - How long of a delay before the transition starts?

```css
.transition{
    transition-delay: 4s;
}
```

* **transition-duration: (time);** - What is the 'acceleration curve' for the transition?

```css
.transition{
    transition-timing-function: /* ease-in , linear, etc.. */
}
```

## **Shorthand Transitions**

**Example:**

```css
div{
 /* transition: <property> <duration> <timing-function> <delay> */
    transition: transform 1.5s ease-in 1;
}
```