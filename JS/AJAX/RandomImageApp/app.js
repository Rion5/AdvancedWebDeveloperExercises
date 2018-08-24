//Select button
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

//Listen for click
btn.addEventListener("click", function(){
    //Make a request
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            console.log(XHR.responseText);              //.responseText is a JSON string
            var data = JSON.parse(XHR.responseText);    //Parse JSON into data obj
            console.log(data.message);                  //Access data obj's message
            var url = data.message;
            img.src = url;
        }
    };
    XHR.open("GET","https://dog.ceo/api/breeds/image/random");
    XHR.send();
});