const router = require("express").Router();
const Classes = require("../../database/db-models/class-model.js");

router.get("/", (req, res) => {
  Classes.getClass()
    .then(myClasses => {
      res.json(myClasses);
    })
    .catch(err =>
      res.status(500).json({ message: "Failed to get lists of classes" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Classes.getClassById(id)
    .then(myClass => {
      res.json(myClass);
    })
    .catch(err => res.status(500).json({ message: "Failed to get class" }));
});

router.post("/search", (req, res) => {
  const { name } = req.body;
  Classes.searchByName(name)
    .then(searchResults => {
      res.json(searchResults);
    })
    .catch(err => res.status(500).json({ message: "Failed to get classes" }));
});
module.exports = router;
