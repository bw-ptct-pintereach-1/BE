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
    tbl.date("date_written");
    tbl.string("content").notNull();
    tbl.string("url");
    tbl
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
      tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });

 
 

    await knex.schema.createTable("users_saved", (tbl) => {
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

    tbl.primary(["user_id", "article_id"]);
  });
 
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users_saved");
  await knex.schema.dropTableIfExists("articles");
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("users");
};
