var mongoose = require('mongoose');
//Model Schema
var todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name can not be blank'
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
});
//Compile into a model
var Todo = mongoose.model('Todo', todoSchema);
//Return Todo
module.exports = Todo;