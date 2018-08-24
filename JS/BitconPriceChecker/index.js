//Get button and span into an object
//.querySelector will return the first element found
var btn = document.querySelector("button");
var price = document.querySelector("#price");

//Listen for click
btn.addEventListener("click", function(){
    alert("button clicked");
});