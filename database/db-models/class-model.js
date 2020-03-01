const db = require("../db-config.js");

module.exports = {
  getClass,
  getClassById,
  searchByName,

  addClass,
  updateClass,
  removeClass,
  getGroups,
  getGroupById,
  addGroup,
  updateGroup,
  removeGroup
};

function getClass() {
  return db("classes as c")
    .join("groups as g", "g.id", "c.group_id")
    .select(
      "c.id",
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
    .orderBy("c.id");
}

function getClassById(id) {
  return db("classes as c")
    .join("groups as g", "g.id", "c.group_id")
    .select(
      "c.id",
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
    .where("c.id", id)
    .first();
}

function searchByName(filter) {
  return db("classes").where("name", "like", `%${filter}%`);
}

// funtions only for instructor roles

async function addClass(newClass) {
  const { rowCount } = await db("classes").insert({
    name: newClass.name,
    group_id: db("groups")
      .select("id")
      .where("name", newClass.group),
    class_date: newClass.class_date,
    start_time: newClass.start_time,
    duration: newClass.duration,
    intensity_level: newClass.intensity_level,
    location: newClass.location,
    current_size: newClass.current_size,
    max_size: newClass.max_size
  });

  return rowCount;
}

// async function addClass(newClass) {
//   const [id] = await db("classes").insert({
//     name: newClass.name,
//     group_id: db("groups")
//       .select("id")
//       .where("name", newClass.group),
//     class_date: newClass.class_date,
//     start_time: newClass.start_time,
//     duration: newClass.duration,
//     intensity_level: newClass.intensity_level,
//     location: newClass.location,
//     current_size: newClass.current_size,
//     max_size: newClass.max_size
//   });

//   return getClassById(id);
// }

async function updateClass(id, newClass) {
  await db("classes")
    .where({ id })
    .update({
      name: newClass.name,
      group_id: db("groups")
        .select("id")
        .where("name", newClass.group),
      class_date: newClass.class_date,
      start_time: newClass.start_time,
      duration: newClass.duration,
      intensity_level: newClass.intensity_level,
      location: newClass.location,
      current_size: newClass.current_size,
      max_size: newClass.max_size
    });

  return getClassById(id);
}

function removeClass(id) {
  return db("classes")
    .where({ id })
    .del();
}

function getGroups() {
  return db("groups");
}

function getGroupById(id) {
  return db("groups")
    .where({ id })
    .first();
}

async function addGroup(newGroup) {
  const { rowCount } = await db("groups").insert(newGroup);
  return rowCount;
}

// async function addGroup(newGroup) {
//   const [id] = await db("groups").insert(newGroup);
//   return getGroupById(id);
// }

async function updateGroup(id, changes) {
  await db("groups")
    .where({ id })
    .update(changes);

  return getGroupById(id);
}

function removeGroup(id) {
  return db("groups")
    .where({ id })
    .del();
}
