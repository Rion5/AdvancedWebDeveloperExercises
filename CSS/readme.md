# Advanced CSS Notes

## CSS Animations: Transforms and Transitions

### Intro to Pseudo-classes

Pseudo-classes are special selectors that specifies a special state of the selected element(s)

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
