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
    .then(parseJSON)            //returns parsed promise object
    .then(updateProfile)        //Updates html with retrieved values
    .catch(function(err){
        console.log(err);
    });
});

function parseJSON(res){
    console.log(res);       //res = promise object
    console.log("Parsing!");
    return res.json()      //return parsed object
    .then(function(parsedData){
        return parsedData.results[0];
    });
}

function updateProfile(data){
    console.log(data);      //data = parsed JSON object
    //Get values from parsed object (named data)
    //Values include, fullName, avatar, username, email, city
    var fullName = data.results[0].name.first + " " + data.results[0].name.last;
    var avatar = data.results[0].picture.large;
    var username = data.results[0].login.username;
    var email = data.results[0].email;
    var city = data.results[0].location.city;
    fullNameDisplay.textContent = fullName;
    avatarDisplay.src = avatar;

    console.log(fullName);
}