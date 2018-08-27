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

---

## **Keyframe Animations**

**Reminder:** Transitions allow us to animate a single state change (From state A to state B)

**Note:** Keyframes allow for much more complex multi-state animations (From state A to state B to state C ... )

![image](https://user-images.githubusercontent.com/31965265/44663649-23e7e000-a9df-11e8-9bc6-376a6eadea1c.png)

### **Keyframe Syntax**

* **Step 1:** Define

**Note:** Must start with '@keyframes name' (name can be anything)
```css
@keyframes rainbowtext{
    0%{
        color: red;
        font-size: 20px;
    }
    25%{
        color: orange;
    }
    50%{
        color: yellow;
        font-size: 40px;
    }
    75%{
        color: green;
    }
    100%{
        color: blue;
        font-size: 20px;
    }
}
```

* **Step 2:** Apply
```css
p{
    animation-name: rainbowtext;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}
```

---

## **Other Common CSS Animation Properties**

* **animation-iteration-count:** *number|infinite|initial|inherit;*
  * How many times should it repeat?

**Example:** Play the animation forever
```css
div {
    animation-iteration-count: infinite;
}
```

* **animation-fill-mode:** *none|forwards|backwards|both|initial|inherit;*
  * Specifies how an animation should apply styles before and after the animation (when the animation is not playing)

**Example:** Let the div element get the style values set by the 1st keyframe before the animation starts, and retain the style values from the last keyframe when the animation ends
```css
div {
    animation-fill-mode: both;
}
```

* **animation-direction:** *normal|reverse|alternate|alternate-reverse|initial|inherit;*
  * Whether an animation should be played forwards, backwards or in a alternate cycles (forwards and backwards)?

**Example:** Play the animation backwards first, then forwards
```css
div {
    animation-direction: alternate-reverse;
}
```

* **animation-play-state:** *paused|running|initial|inherit;*
  * Specifies whether the animation is running or paused

**Example:** Pause an animation on hover
```css
div:hover {
    animation-play-state: paused;
}
```
