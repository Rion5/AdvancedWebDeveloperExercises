//import { updateTodo } from "../helpers/todos";

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

        $('.list').on('click', 'li', function(){
            updateTodo($(this));
        });

        $('.list').on('click', 'span', function(event){
            event.stopPropagation();    //When you click on span, it will not trigger the above li event
            removeTodo($(this).parent());
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
    var newTodo = $('<li class = "task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
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

function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(data =>{
        todo.remove();
    })
    .catch(err =>{
        console.log(err);
    });
}

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isComplete = !todo.data('completed');
    var updateData = {completed: isComplete};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(data =>{
        todo.toggleClass("done");
        todo.data('completed', isComplete);
    });
}