const express = require("express");
const bodyParser = require("body-parser");

const math = require("./math.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const middleware = (req, res, next) => {
    console.log(`Middleware: ${JSON.stringify(req.body)}`)
    next();
};

app.use(middleware);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/handleSum", (req, res) => {
    console.log(req.body);
    const counter = req.body.counter || "10";
    if (counter < 100000) {
        res.send(math(counter));
    } else {
        res.status(411).send("We only calculate the sum up to 100000, sir!");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
