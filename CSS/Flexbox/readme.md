# **CSS: Flexbox Layouts**

## **Definition:** Flexbox Layout aims to provide a more efficient way to lay out, align, and distribute space among items in a container

## **Terminology**

Items will be laid out following either the main axis (from main-start to main-end) or the cross axis (from cross-start to cross-end)
![image](https://user-images.githubusercontent.com/31965265/45821937-6045ed80-bcb8-11e8-9fab-43e51c175e67.png)

* **main axis:** The main axis of a flex container in which flex items are laid out.
  * Note: Does not necessarily flow left to right, but depends on *flex-direction*
* **main-start | main-end:** The flex items are placed within the container starting from main-start and going to main-end
* **main size:** A flex item's width or height, whichever is in the main dimension, is the item's main size. The fle item's main size property is either the width or height property, whichever is in the main dimension.

### **Properties for the Parent (flex container)**

* **display:** Defines a flex container. Enables a flex context for all its direct children.

  ```css
  .container {
  display: flex;  /*makes this container a 'flex container' */
  }
  ```

* **flex-direction:** Specifies how items are placed in the flex container,  establishing the main-axis and its direction.

  ![image](https://user-images.githubusercontent.com/31965265/45904271-910e4b80-bdba-11e8-9497-f1821b192efe.png)

  ```css
  .container {
  flex-direction: row | row-reverse | column | column-reverse;
  }
  ```

* **flex-wrap:** Specifies whether items are forced into a single line or wrapped into multiple lines .By default, flex items will try to fit onto one line.

  ![image](https://user-images.githubusercontent.com/31965265/45904316-ab482980-bdba-11e8-99d4-6e336917b5b2.png)

  ```css
  .container {
  flex-wrap: nowrap | wrap | wrap-reverse;
  }
  ```

* **justify-content:** Defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over alignment of items when they overflow the line

  ![image](https://user-images.githubusercontent.com/31965265/45904574-7e484680-bdbb-11e8-90ca-d4908d9e3b99.png)

  ```css
  .container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
  ```

* **align-items:** Defines how space is distributed between items in flex container **(Along the cross axis)**
  * Functions that same as justify-content, but works on the Cross Axis
  * Default is 'stretch'

  ![image](https://user-images.githubusercontent.com/31965265/45904802-1e05d480-bdbc-11e8-8cc1-65dbbf156ba4.png)

  ```css
  .container {
  align-items: flex-start | flex-end | center | baseline | stretch;
  }
  ```

* **align-content:** Defines how space is distributed BETWEEN ROWS in a flex container, Along the cross axis.

  ![image](https://user-images.githubusercontent.com/31965265/45905103-332f3300-bdbd-11e8-9d01-be0b63e45754.png)

  ```css
  .container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
  ```

  ---

### **Properties for the Children (flex items)**

* **order:** Specifies the order used to lay out items in their flex container

  ![image](https://user-images.githubusercontent.com/31965265/46249902-15864d00-c3ff-11e8-86b8-61c604045755.png)

  ```css
  .item {
  order: <integer>; /* default is 0 */
  }
  ```

* **align-self:** Allows you to override align-items on individual flex items

  ![image](https://user-images.githubusercontent.com/31965265/46249913-3a7ac000-c3ff-11e8-96b9-a85e1b4b70cf.png)

  ```css
  .item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
  ```

* **flex:** Defines how a flex item will grow or shrink to fit the available space in a container. Flex is the shorthand property for 3 other properties (***flex-grow***, ***flex-shrink***, ***flex-basis***)

  ![image](https://user-images.githubusercontent.com/31965265/46249909-2cc53a80-c3ff-11e8-9873-61a940b3f7b3.png)

  ```css
  .item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  ```

  * **flex-grow:** Dictates how the unused space should be spread amongst flex items
  * **flex-shrink:** Dictates how items should shrink when there isn't enough space in container
  * **flex-basis:** Specifies the ideal size of a flex item, BEFORE its placed into a flex container
