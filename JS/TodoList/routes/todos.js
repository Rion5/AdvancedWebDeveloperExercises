var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

router.route('/')
.get(helpers.getTodos)      //INDEX Route: show all todos
.post(helpers.createTodo);  //CREATE Route: create new todo 

router.route('/:todoId')
.get(helpers.getTodo)       //SHOW Route: info for a certain todo
.put(helpers.updateTodo)    //UPDATE Route: update a certain todo and redirect
.delete(helpers.deleteTodo);//Delete Route: delete a certain todo and redirect

module.exports = router;