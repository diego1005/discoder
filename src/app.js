const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index.routes");
const codeRouter = require("./routes/code.routes");
const userRouter = require("./routes/user.routes");

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
app.use("/code", codeRouter);
app.use("/user", userRouter);


//Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})