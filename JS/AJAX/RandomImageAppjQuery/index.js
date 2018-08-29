//jQuery Click Event
$("#btn").click(function(){
    $.getJSON("http://aws.random.cat/meow")
    .done(function(data){
        console.log(data.file);
        $("#photo").attr("src", data.file);
    })
    .fail(function(){
        alert("Request is not pawsible");
    });
});