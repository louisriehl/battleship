
const PORT          = 8000;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Battleship listening on port " + PORT);
});