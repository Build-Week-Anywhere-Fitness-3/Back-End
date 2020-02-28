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
      tbl.date("class_date");
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
      tbl.increments();
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("class_id")
        .notNullable()
        .unsigned()
        .references("classes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  tbl.primary("user_id", "class_id");
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("groups")
    .dropTableIfExists("classes")
    .dropTableIfExists("roles")
    .dropTableIfExists("users")
    .dropTableIfExists("class_users");
};
