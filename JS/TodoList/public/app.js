// When DOM loads, send a request to /api/todos, and display the todos in a List
$(document).ready( () =>{
    $.getJSON("/api/todos")
    .then(data => {
        console.log(data);
        addTodos(data);
    });
});

function addTodos(todos){
    todos.forEach(todo => {
        console.log(todo.name);
        var newTodo = $('<li class = "task">' + todo.name + '</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
}