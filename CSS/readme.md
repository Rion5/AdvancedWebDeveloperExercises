# Advanced CSS Notes

## CSS Animations: Transforms and Transitions

### **Pseudo-classes**

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

### **Transforms**

**Definition:** Lets you manipulate the coordinate space of the CSS visual formatting model *(move, warp, rotate, and scale elements)*

* **:translate** - Move an element

```css
/*Move all divs 100px right*/
div{
    transform: translateX(100px);
}
```

* **:scale** - Alter the size of an element

```css
/*Double the size of all divs*/
div{
    transform: scale(2);
}
```

* **:transform-origin** - Modify the origin for transformations of an element

```css
/*Sets the origin at the top left which is the same as (0, 0)*/
.transformed{
    transform-origin: left top;
}
```

* **:rotate** - Rotate element at the element's origin point

```css
div{
    transform: rotate(90deg);
}
```

---
