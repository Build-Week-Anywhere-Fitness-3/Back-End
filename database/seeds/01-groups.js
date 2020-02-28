exports.seed = function(knex) {
  return knex("groups").insert([
    { name: "yoga" },
    { name: "insanity" },
    { name: "ripped" }
  ]);
};
