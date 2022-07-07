const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index.routes");

// Settings
let port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
//-Routes
app.use("/", indexRouter);


//Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})