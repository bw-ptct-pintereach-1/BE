exports.seed = async function (knex) {
  return knex("categories").insert([
    { category_name: "Health" },
    { category_name: "Fitness/Exercise" },
    { category_name: "Music" },
    { category_name: "Gaming" },
    { category_name: "Technology" },
    { category_name: "Home" },
    { category_name: "News/CurrentEvents" },
    { category_name: "Politics" },
  ]);
};
