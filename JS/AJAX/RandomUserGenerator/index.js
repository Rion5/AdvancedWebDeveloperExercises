//Get DOM elements
var btn = document.querySelector("#btn");
var fullNameDisplay = document.getElementById("fullname");
var avatarDisplay = document.getElementById("avatar");

//Click Event
btn.addEventListener("click", function(){
    //Refactored fetch code will look similar to this
    // fetch(url)
    // .then(handleErrors)
    // .then(parseJSON)
    // .then(updateProfile)
    // .catch(error)
    
    var url = "https://randomuser.me/api/";
    fetch(url)
    .then(function(res){
        console.log(res);       //res = promise object
        console.log("Parsing!");
        return res.json();      //return parsed object
    })
    .then(function(data){
        console.log(data);      //data = parsed JSON object
        //Get values from parsed object (named data)
        var fullName = data.results[0].name.first + " " + data.results[0].name.last;
        fullNameDisplay.textContent = fullName;
        var avatar = data.results[0].picture.large;
        avatarDisplay.src = avatar;
        console.log(fullName);
    })
    .catch(function(err){
        console.log(err);
    });
});