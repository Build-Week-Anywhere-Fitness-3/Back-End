exports.up = function(knex) {
  return knex.schema
    .createTable("groups", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
    })
    .createTable("classes", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl
        .integer("group_id")
        .notNullable()
        .unsigned()
        .references("groups.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.date("class_date", { precision: 6 });
      tbl.string("start_time");
      tbl.integer("duration");
      tbl.integer("intensity_level");
      tbl.string("location");
      tbl.integer("current_size");
      tbl.integer("max_size");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("roles", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl
        .integer("role_id")
        .notNullable()
        .unsigned()
        .references("roles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("class_users", tbl => {
      tbl.increments().primary(["user_id", "class_id"]);
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("class_id")
        .unique()
        .notNullable()
        .unsigned()
        .references("classes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("class_users")
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
    .dropTableIfExists("classes")
    .dropTableIfExists("groups");
};
