exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then( function () {
      // Inserts seed entries
      return knex("categories").insert([
        { category_name: "Health" },
        { category_name: "Fitness/Exercise" },
        { category_name: "Music" },
        { category_name: "Gaming" },
        { category_name: "Technology" },
        { category_name: "Home" },
        { category_name: "News" },
        { category_name: "Other" },
      ]);
    });
};
