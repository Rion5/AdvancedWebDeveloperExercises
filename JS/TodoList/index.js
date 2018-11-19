var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();

//Routes
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get("/", function(req, res){
    res.sendFile("index.html");
});

//========================
///Start Server
//========================
app.listen(5500,function(){
    console.log("Server has Started");
    console.log("Go to 'localhost:5500'");
});