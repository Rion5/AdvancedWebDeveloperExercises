//Get button and span into an object
//.querySelector will return the first element found
var btn = document.querySelector("button");
var price = document.querySelector("#price");

//Listen for click
btn.addEventListener("click", function(){
    //Make a request
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        // 0 - Unsent, 1 - Opened, 2 - Headers received, 3 - Loading, 4 - Done
        if(XHR.readyState == 4 && XHR.status == 200){
            var parsedJSON = JSON.parse(XHR.responseText);
            console.log(parsedJSON); //Entire parsed JSON object
            console.log(parsedJSON.bpi.USD.rate);
            price.textContent = "$"+parsedJSON.bpi.USD.rate;
        }
    };
    XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});