const express = require("express");
const PORT = 3000;

const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.all('*', (req, res) => {
    res.status(404).send("Endpoint not found");
});


app.listen(PORT, () => {
    console.log("Hello service is up and running at port", PORT);
})