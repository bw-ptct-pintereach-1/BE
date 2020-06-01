const bcrypt = require("bcryptjs");

// exports.seed = async function (knex) {
//   return knex("users").insert([
//     { username: "mdl518", password: await bcrypt.hash("pass22", 14), email: "mdl@aol.com" },
//     { username: "gmh311", password: await bcrypt.hash("test2", 14), email: "gmh@aol.com" },
//     { username: "bella07 ", password: await bcrypt.hash("test3", 14), email: "bell@aol.com" },
//     { username: "cambam328", password: await bcrypt.hash("test4", 14), email: "cam@aol.com" },
//     { username: "moomoo518", password: await bcrypt.hash("test5", 14), email: "moo@aol.com" },
//   ]);
// };


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(async function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "mdl518",
          password: await bcrypt.hash("pass22", +process.env.HASH_ROUNDS),
          email: "mdl@aol.com",
        },
        {
          username: "gmh311",
          password: await bcrypt.hash("test2", +process.env.HASH_ROUNDS),
          email: "gmh@aol.com",
        },
        {
          username: "bella07 ",
          password: await bcrypt.hash("test3", +process.env.HASH_ROUNDS),
          email: "bell@aol.com",
        },
        {
          username: "cambam328",
          password: await bcrypt.hash("test4", +process.env.HASH_ROUNDS),
          email: "cam@aol.com",
        },
        {
          username: "moomoo518",
          password: await bcrypt.hash("test5", +process.env.HASH_ROUNDS),
          email: "moo@aol.com",
        },
      ]);
    });
};
