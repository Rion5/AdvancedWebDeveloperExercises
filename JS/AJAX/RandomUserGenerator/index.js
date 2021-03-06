//Get DOM elements
var btn = document.querySelector("#btn");
var fullNameDisplay = document.getElementById("fullname");
var avatarDisplay = document.getElementById("avatar");
var usernameDisplay = document.getElementById("username");
var emailDisplay = document.getElementById("email");
var cityDisplay = document.getElementById("city");
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
    .then(handleErrors)
    .then(parseJSON)            //returns parsed promise object
    .then(updateProfile)        //Updates html with retrieved values
    .catch(displayErrors);
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
    var fullName = data.name.first + " " + data.name.last;
    var avatar = data.picture.large;
    var username = data.login.username;
    var email = data.email;
    var city = data.location.city;
    fullNameDisplay.innerHTML = fullName;
    avatarDisplay.src = avatar;
    usernameDisplay.innerHTML = username;
    emailDisplay.innerHTML = email;
    cityDisplay.innerHTML = city;
    console.log(fullName);
}

function handleErrors(res){
    //If the status code != 200, then throw an error
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function displayErrors(err){
    console.log(err);
}