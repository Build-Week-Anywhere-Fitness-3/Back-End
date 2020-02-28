const db = require("../db-config.js");

module.exports = {
  addReservation,
  findReservation,
  findReservationById,
  removeReservation
};

async function addReservation(userId, classId) {
  const { current_size } = await db("classes")
    .select("current_size")
    .where("id", classId)
    .first();

  const newSize = current_size + 1;
  await db("classes")
    .where("id", classId)
    .update({
      current_size: newSize
    });

  return db("class_users").insert({
    user_id: userId,
    class_id: classId
  });
}

function findReservation(userId) {
  return db("class_users as cu")
    .join("classes as c", "c.id", "cu.class_id")
    .join("users as u", "u.id", "cu.user_id")
    .join("groups as g", "g.id", "c.group_id")
    .select(
      "cu.id as reservation_id",
      "c.name",
      "g.name as group",
      "c.class_date",
      "c.start_time",
      "c.duration",
      "c.intensity_level",
      "c.location",
      "c.current_size",
      "c.max_size",
      "c.created_at"
    )
    .where("u.id", userId);
}

function findReservationById(userId, reservationId) {
  return db("class_users as cu")
    .join("classes as c", "c.id", "cu.class_id")
    .join("users as u", "u.id", "cu.user_id")
    .join("groups as g", "g.id", "c.group_id")
    .select(
      "cu.id as reservation_id",
      "c.name",
      "g.name as group",
      "c.class_date",
      "c.start_time",
      "c.duration",
      "c.intensity_level",
      "c.location",
      "c.current_size",
      "c.max_size",
      "c.created_at"
    )
    .where("u.id", userId)
    .andWhere("cu.id", reservationId)
    .first();
}

function removeReservation(userId, reservationId) {
  console.log("hit");
  return db("class_users")
    .where("user_id", userId)
    .andWhere("id", reservationId)
    .del();
}
