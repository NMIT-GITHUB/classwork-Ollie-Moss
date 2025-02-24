const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// :setup
const app = express();
const PORT = 3000;

const entries = [];
app.locals.entries = entries;

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

// :routes
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/new-entry", (req, res) => {
    res.render("new-entry");
});

app.post("/new-entry", (req, res) => {
    // validation
    if (!req.body.title || !req.body.body) {
        res.status(400).send(
            "Entries must have a title and an information body. Please etner your details.",
        );
        return;
    }

    // add to entries
    entries.push({
        title: req.body.title,
        body: req.body.body,
        published: new Date(),
    });

    // redirect to home page
    res.redirect("/");
});

app.use((req, res) => {
    res.status(404).render("404");
});

// :server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
