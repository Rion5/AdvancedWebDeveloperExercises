# **AJAX:** Asynchronous JavaScript and XML

**Definition:** AJAX is not a technology, but several technologies coming together in a powerful new way. With AJAX, websites can send and request data from a server in the background without disturbing the current page

**Example:** Compare Reddit and Pintrest. Reddit uses the older method of getting more content; by making a browser request. Pintrest on the other hand uses AJAX to load more content when a User scrolls to the bottom of the page.

---

## XML: Extended Markup Language

**Example:** XML is syntactically similar to HTML, but it does not describe presentation like HTML does
```XML
<book>
    <title>Eragon</title>
    <author>Christopher Paolin</author>
</book>

```
## JSON: JavaScript Object Notation

**Example:** JSON looks (almost) exactly like JavaScript objects
```JSON
"book":{
    "title": "Eragon",
    "author": "Christopher Paolini"
}
```

---

## Making Requests with JavaScript

* XMLHTTP Request
* The Fetch API
* 3rd Party Libraries
  * jQuery, Axios, etc.

## XMLHTTP Requests
**Definition:** XMLHttpRequest objects can be used to request data from a web server. You can:

* Update a web
* Request data from a server - after the page has loaded
* Receive data from a server - after the page has loaded
* Send data to a server - in the background

**Example:** XMLHTTP Request to Github zen API
```js
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    //Ready States ranging from 0 - 4
    // 0 - Unsent, 1 - Opened, 2 - Headers received, 3 - Loading, 4 - Done
    if(XHR.readyState ==4){
        if(XHR.status == 200){
            console.log(XHR.responseText);
        } else{
            console.log("There was a problem");
        }
    }
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```
