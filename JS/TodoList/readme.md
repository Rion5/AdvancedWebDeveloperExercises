# Todo-list Application

## Single Page Express & MongoDB application to help create and keep track of a todo list

## RESTFUL API 
*Not including **New** and **Edit** routes since this is a simple single page application*
|name        |url           |verb          |description   |
|------------|:-------------|:------------:|:-------------|
|INDEX       |/api/todos    |GET           |Display a list of all todos|
|CREATE      |/api/todos    |POST          |Create new todo to DB|
|SHOW        |/api/todo/:id |GET           |Shows info about a todo|
|UPDATE      |/api/todo/:id |PUT           |Update a particular todo, then redirect|
|DESTROY     |/api/todo/:id |DELETE        |Delete a particular todo, then redirect|