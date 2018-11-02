var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();

//Routes
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);


app.get("/", function(req, res){
    res.send("Home Page");
});

//========================
///Start Server
//========================
app.listen(5500,function(){
    console.log("Server has Started");
    console.log("Go to 'localhost:5500'");
});