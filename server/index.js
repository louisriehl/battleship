
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (res, req) => {
});

app.listen(PORT, () => {
  console.log("Battleship listening on port " + PORT);
});