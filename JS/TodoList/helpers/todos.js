var db = require("../models");

//INDEX Route: show all todos
//GET
exports.getTodos = (req, res) => {
    db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
};

//CREATE Route: new todo 
//POST
exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then(newTodo => {
        console.log(req.body);
        res.status(201).json(newTodo);
    })
    .catch(err => {
        res.send(err);
    });
};

//SHOW Route: info for a certain todo
//GET
exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then(foundTodo => {
        res.json(foundTodo);
    })
    .catch(err => {
        res.send(err);
    });
};

//UPDATE Route: update a certain todo and redirect
//PUT
exports.updateTodo = (req, res) => {
    //Find the _id in the MongoDb | id == req.params.todoId
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body,{new: true})
    .then(foundTodo => {
        res.json(foundTodo);
    })
    .catch(err => {
        res.send(err);
    });
};

//Delete Route: delete a certain todo and redirect
//DELETE
exports.deleteTodo = (req, res) => {
    //Find the _id in the MongoDb | id == req.params.todoId
    db.Todo.remove({_id: req.params.todoId})
    .then(()=>{
        res.json({message: "Todo Deleted!"});
    })
    .catch(err => {
        res.send(err);
    });
};

module.exports = exports;