# **AJAX:** Asynchronous JavaScript and XML

**Definition:** AJAX is not a technology, but several technologies coming together in a powerful new way. With AJAX, websites can send and request data from a server in the background without disturbing the current page

**Example:** Compare Reddit and Pintrest. Reddit uses the older method of getting more content; by making a browser request. Pintrest on the other hand uses AJAX to load more content when a User scrolls to the bottom of the page.

---

## **XML: Extended Markup Language**

**Example:** XML is syntactically similar to HTML, but it does not describe presentation like HTML does

```XML
<book>
    <title>Eragon</title>
    <author>Christopher Paolin</author>
</book>

```

## **JSON: JavaScript Object Notation**

**Example:** JSON looks (almost) exactly like JavaScript objects
```JSON
"book":{
    "title": "Eragon",
    "author": "Christopher Paolini"
}
```

---

## **Making Requests with JavaScript**

* [XMLHTTP Request](#xmlhttp-requests)
* [The Fetch API](#fetch-api)
* [3rd Party Libraries](#ajax-with-jquery)
  * jQuery, Axios, etc.

## **XMLHTTP Requests**

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

**Problems with XHR:**

* Ugly, Bulky Syntax
  * Over 15+ years old
* Can't support streaming data

---

## **Fetch API**

**Definition:** The Fetch API provides an interface for fetching resources. Similar to XMLHttpRequests, but hte new API provides a more powerful and flexible feature set.
```js
fetch(url)
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.log(error)
});
```

**Example:**

```js
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
fetch(url)
//1st .then returns a promise object
.then(function(response){
    console.log(response);
    return response.json();
})
//2nd .then returns parsedJSON data
.then(function(data){
    console.log(data);
});
```

### **Fetch Options**

**Definition:** Fetch API provides a JS interface for accessing and manipulating parts of the HTTP pipeline, such as request and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
**Note** The fetch() API only rejects a promise when a network error is encountered, although this usually mean permissions issues

```js
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        name: "Joe",
        login: "Joe123"
    })
})
.then(function(data){
    //do something
})
.catch(function (error){
    //handle error
});
```

### **Fetch API Error Handling**

**Example:** Fetch url, if response is invalid, throw an error, and proceed to the .catch() for error handling

```js
fetch(url)
.then(function(data){
    if(!res.ok){
        throw Error(404); //Number is up to user. 404 is standard
    }
    return res;
})
.then(function(response){
    //do something
})
.catch(function (error){
    //handle error
});
```
**Note:** It is very common to create a general purpose error handling function to help keep error checking code DRY
```js
fetch(url)
.then(handleErrors)         //Generic error handling function
.then(function(data){
    if(!res.ok){
        throw Error(404);   //Number is up to user. 404 is standard
    }
    return res;
})
.then(function(response){
    //do something
})
.catch(function (error){
    //handle error
});

var handleErrors = function(request){
    if(!request.ok){
        throw Error(request.status);
    }
    return request;
}
```

**Problems with Fetch**
* Main problem is lack of browser support

---

## **AJAX With jQuery**

### **jQuery AJAX Methods**
* $.ajax
  * $.get
  * $.post
  * $.getJSON
* $.get, $.post, $.getJSON are shorthand methods that call $.ajax

**Example $.ajax:** The 'base' jQuery Method. Creates an XMLHttpRequest under the hood
```js
$.ajax({
    method: "GET",
    url: "some.api.com",
})
.done(function(res){
    console.log(res);
})
.fail(function(){
    //do something
})
```

### **Shorthand Methods**

* **jQuery.get** *( url [, data ] [, success ] [, dataType ] )*

**Example:** Load data from the server using a HTTP GET request
```js
$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
```

* **jQuery.post** *( url [, data ] [, success ] [, dataType ] )*

**Example:** Load data from the server using a HTTP POST request
```js
$.post( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
});
```

* **jQuery.getJSON** *( url [, data ] [, success ] )*

**Example:** Load JSON-encoded data from the server using a GET HTTP request.

```js
$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
```

---

## **Axios**

**Definition:** Promise based HTTP client for browser and node.js

**Example:** Performing a GET request

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
```

**Example:** Performing a POST request

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

[back to top](#ajax-asynchronous-javascript-and-xml)

---