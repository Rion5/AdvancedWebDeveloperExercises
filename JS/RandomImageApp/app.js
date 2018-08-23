//Select button
var btn = document.querySelector("#btn");

//Listen for click
btn.addEventListener("click", function(){
    //Make a request
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            console.log(XHR.responseText);
        }
    };
    XHR.open("GET","https://dog.ceo/api/breeds/image/random");
    XHR.send();
});