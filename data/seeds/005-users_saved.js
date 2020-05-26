exports.seed = async function (knex) {
  await knex("users_saved").insert([
    { user_id: 1, article_id: 1 },
    { user_id: 2, article_id: 1 },
    { user_id: 3, article_id: 2 },
    { user_id: 2, article_id: 3 },
    { user_id: 5, article_id: 3 },
  ])
};
