exports.seed = function(knex) {
  return knex("roles").insert([{ name: "instructor" }, { name: "client" }]);
};
