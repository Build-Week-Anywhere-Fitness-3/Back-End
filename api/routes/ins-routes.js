const router = require("express").Router();

const Class = require("../../database/db-models/class-model.js");
router.use("/groups/:id", validateGroupId);
router.use("/classes/:id", validateClassId);

router.get("/groups", (req, res) => {
  Class.getGroups()
    .then(groups => {
      res.json(groups);
    })
    .catch(err =>
      res.status(500).json({ message: "error retriving group list" })
    );
});
router.get("/groups/:id", (req, res) => {
  const { id } = req.group;
  Class.getGroupById(id)
    .then(group => {
      res.json(group);
    })
    .catch(err => res.status(500).json({ message: "error retriving group" }));
});

router.put("/groups/:id", (req, res) => {
  const { id } = req.group;
  Class.updateGroup(id, req.body)
    .then(updatedGroup => {
      res.json(updatedGroup);
    })
    .catch(err => res.status(500).json({ message: "error updating group" }));
});

router.delete("/groups/:id", (req, res) => {
  const { id } = req.group;
  Class.removeGroup(id)
    .then(deletedGroup => {
      res.json(`You removed ${deletedGroup} group`);
    })
    .catch(err => res.status(500).json({ message: "error removing group" }));
});
router.post("/create-group", (req, res) => {
  const groupData = req.body;
  Class.addGroup(groupData)
    .then(newGroup => {
      res.json(newGroup);
    })
    .catch(err => res.status(500).json({ message: "error creating group" }));
});

router.post("/create-class", (req, res) => {
  const classData = req.body;
  Class.addClass(classData)
    .then(newClass => {
      res.status(201).json(newClass);
    })
    .catch(err => {
      res.status(500).json({ message: "error adding new class" });
    });
});

router.put("/classes/:id", (req, res) => {
  const { id } = req.class;
  Class.updateClass(id, req.body)
    .then(updatedClass => {
      res.json(updatedClass);
    })
    .catch(err => res.status(500).json({ message: "error updating class" }));
});

router.delete("/classes/:id", (req, res) => {
  const { id } = req.class;
  Class.removeClass(id)
    .then(deletedClass => {
      res.json(`you have removed ${deletedClass} class`);
    })
    .catch(err => res.status(500).json({ message: "error removing class" }));
});

function validateGroupId(req, res, next) {
  const { id } = req.params;
  Class.getGroupById(id)
    .then(group => {
      if (group) {
        req.group = group;
        next();
      } else {
        res.status(404).json({ message: "invalid group id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "exception", err });
    });
}

function validateClassId(req, res, next) {
  const { id } = req.params;
  Class.getClassById(id)
    .then(myClass => {
      if (myClass) {
        req.class = myClass;
        next();
      } else {
        res.status(404).json({ message: "invalid class id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "exception", err });
    });
}

module.exports = router;
