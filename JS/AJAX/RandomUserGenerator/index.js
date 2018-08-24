//Get Button
var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    var url = "https://randomuser.me/api/";
    //Refactored fetch code will look similar to this
    // fetch(url)
    // .then(handleErrors)
    // .then(parseJSON)
    // .then(updateProfile)
    // .catch(error)

    fetch(url)
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });
});