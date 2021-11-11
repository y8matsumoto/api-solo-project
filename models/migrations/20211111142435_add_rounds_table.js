exports.up = function(knex, Promise) {
  // create the 'users' table with three columns
  return knex.schema.createTable("courses", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("name", 50) // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("place", 15) // maximum length of 15 characters
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.integer("best_score"); // maximum length of 15 characters

    t.integer("last_score"); // maximum length of 15 characters

    t.string("memo", 100); // maximum length of 15 characters
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("users");
};
