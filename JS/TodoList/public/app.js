// When DOM loads, send a request to /api/todos, and display the todos in a List
$(document).ready( () =>{
    $.getJSON("/api/todos")
    .then(data => {
        console.log(data);
        addTodos(data);

        $('#todoInput').keypress(event => {
            //check if 'Enter' key was pressed
            if(event.which == 13){
                createTodo();
            }
        });
    });
});

function addTodos(todos){
    todos.forEach(todo => {
        addTodo(todo);
    });
}
function addTodo(todo){
    console.log(todo.name);
    var newTodo = $('<li class = "task">' + todo.name + '</li>');
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo(){
    // Set userInput == text input box and
    // Send post request to '/api/todos' to create a new todo
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(newTodo =>{
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(err =>{
        console.log(err);
    });
}