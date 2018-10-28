let router = require("express").Router();
let path = require("path");

router.get("/index", function(req, res) {
	//Get out of routes folder (1 folder back), then get into public folder and find html file
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", function(req, res) {
	//Get out of routes folder (1 folder back), then get into public folder and find html file
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
