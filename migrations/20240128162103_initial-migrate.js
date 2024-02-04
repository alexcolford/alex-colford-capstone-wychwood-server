/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
    })
    .createTable("elements", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description", 1000).notNullable();
    })
    .createTable("products", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("size").notNullable();
      table.integer("price").notNullable();
      table.string("description", 1000).notNullable();
      table.string("instructions", 1000).notNullable();
      table.string("ingredients", 1000).notNullable();
      table.string("image_path", 1000).notNullable();
    })
    .createTable("comments", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table.string("title").notNullable();
      table.string("comment", 1000).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("favourites", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table.boolean("is_favourited").defaultTo(true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("elements")
    .dropTable("products")
    .dropTable("comments")
    .dropTable("favourites");
};
