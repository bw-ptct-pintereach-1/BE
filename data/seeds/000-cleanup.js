exports.seed = async function (knex) {
  await knex("users_saved").truncate();
  await knex("articles").truncate();
  await knex("categories").truncate();
  await knex("users").truncate();
};
