const express = require("express");
const app = express();
const path = require("path");

// Public DIR definition //
app.use(express.static(path.join(__dirname, "public")));

// Main route //
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "./")});
});

// Server //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running at ${ PORT }`)});