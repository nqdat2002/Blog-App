const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const authRouter = require("./routers/authRouter");
const categoryRouter = require("./routers/categoryRouter");

dotenv.config({path: "./config.env" });
const connect = require("./db/connection");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(
    cors({
        origin : ["http://localhost:3000"],
        credentials: true, 
    })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);

// Test API Main URL
app.get("/", (req, res) => {
    return res.send("Hello World");
});

const port = process.env.PORT || 8080;

connect.then((req, res) =>{
    app.listen(port, () => {
        console.log(`Server is runing on PORT: ${port}`);
    });
}).catch((err) =>{
    console.log(`DB has error: ${err}`);
});