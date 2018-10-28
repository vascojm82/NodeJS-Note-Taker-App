let router = require("express").Router();
let connection = require("../db/connection");

//Get all Notes
router.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM notes", function(err, data) {
      res.json(data);
    });
});

//Add new Note
router.post("/api/addNote", function(req, res) {
    console.log("req.body:", req.body);

    connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Update existing Note
router.post("/api/addNote/:noteId", function(req, res) {
    console.log("req.body:", req.body);

    connection.query("UPDATE notes SET ? WHERE id=?", [req.body, req.params.noteId], function(err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Delete certain Note
router.delete("/api/notes/:noteId", function(req, res) {
  console.log(req.params.noteId);
  connection.query("DELETE FROM notes WHERE id=?", req.params.noteId, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
