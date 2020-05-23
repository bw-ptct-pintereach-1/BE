exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("username", 128).notNull().unique();

    tbl.string("password", 128).notNull();

    tbl.string("email").notNull().unique();
  });

  await knex.schema.createTable("categories", (tbl) => {
    tbl.increments("id");
    tbl.string("category_name").notNull().unique();
  });

  await knex.schema.createTable("articles", (tbl) => {
    tbl.increments("id");
    tbl.string("title").notNull();
    tbl.string("author").notNull();
    tbl.date("date_written").notNull();
  });

  await knex.schema.createTable("articles_categories", (tbl) => {
    tbl
      .integer("article_id")
      .references("id")
      .inTable("articles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("category_id")
      .references("id")
      .inTable("category")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.primary(["article_id" , "category_id"]);
  });
  await knex.schema.createTable("users_articles", (tbl) => {
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("article_id")
      .references("id")
      .inTable("articles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.primary(["user_id" , "article_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users_articles");
  await knex.schema.dropTableIfExists("articles_categories");
  await knex.schema.dropTableIfExists("articles");
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("users");
};
