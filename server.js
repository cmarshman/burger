var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.get("/", function(req, res){
    connection.query("SELECT * FROM burgers", function(err, data){
        if (err) {
            return res.status(500).end();
        }
        res.render("index", { burgers: data });
    });
});

app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

app.put("/api/movie/:id", function(req, res){
    connection.query()
})
