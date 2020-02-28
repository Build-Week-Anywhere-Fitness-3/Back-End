const router = require("express").Router();

const Reserve = require("../../database/db-models/reserve-model.js");

router.use("/reservations/:id", validateId);

router.post("/add-reservation", (req, res) => {
  const { userid } = req.decodedJWT;

  Reserve.addReservation(userid, req.body.id)
    .then(myResev => {
      res.json(myResev);
    })
    .catch(err =>
      res.status(500).json({ message: "error reserving the class" })
    );
});

router.get("/reservations", (req, res) => {
  const { userid } = req.decodedJWT;
  Reserve.findReservation(userid)
    .then(myReservations => {
      res.json(myReservations);
    })
    .catch(err =>
      res.status(500).json({ message: "error getting reservations" })
    );
});

router.get("/reservations/:id", (req, res) => {
  const { userid } = req.decodedJWT;
  const id = req.reservation.reservation_id;

  Reserve.findReservationById(userid, id)
    .then(myReservations => {
      res.json(myReservations);
    })
    .catch(err =>
      res.status(500).json({ message: "error getting your reservations" })
    );
});

router.delete("/reservations/:id", (req, res) => {
  const { userid } = req.decodedJWT;
  const id = req.reservation.reservation_id;

  Reserve.removeReservation(userid, id)
    .then(deletedReservation => {
      res.json(`you have removed ${deletedReservation} reservation`);
    })
    .catch(err =>
      res.status(500).json({ message: "error removing your reservations" })
    );
});

function validateId(req, res, next) {
  const { userid } = req.decodedJWT;
  const { id } = req.params;
  Reserve.findReservationById(userid, id)
    .then(myRervations => {
      if (myRervations) {
        req.reservation = myRervations;
        next();
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch(err => res.status(500).json({ message: "exception", err }));
}

module.exports = router;
