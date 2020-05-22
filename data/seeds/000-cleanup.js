exports.seed = async function (knex) {
  await knex("users_articles").truncate();
  await knex("articles_categories").truncate();
  await knex("articles").truncate();
  await knex("categories").truncate();
  await knex("users").truncate();
};
