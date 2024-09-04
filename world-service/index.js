const express = require("express");
const PORT = 3001;

const app = express();

app.get("/world", (req, res) => {
    res.send("World");
});

app.all('*', (req, res) => {
    res.status(404).send("Endpoint not found");
});

app.listen(PORT, () => {
    console.log("World service is up and running at port", PORT);
})