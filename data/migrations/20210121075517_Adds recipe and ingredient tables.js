exports.up = function (knex) {
  return knex.schema
    .createTable("ingredients", (table) => {
      table.increments();
      table.text("ingredient_name", 128).unique().notNullable();
    })
    .createTable("recipes", (table) => {
      table.increments();
      table.text("recipe_name", 128).unique().notNullable();
    })
    .createTable("recipes_steps", (table) => {
      table.increments();
      table.integer("step").notNullable().unsigned();
      table.text("instruction", 500).notNullable();
      table
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT");
      table.integer("ingredient_amount").unsigned();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes_steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
