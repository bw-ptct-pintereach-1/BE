exports.seed = async function (knex) {
  return knex("users").insert([
    { username: "mdl518", password: "pass22", email: "mdl@aol.com" },
    { username: "gmh311", password: "pass33", email: "gmh@aol.com" },
    { username: "bella07 ", password: "pass44 ", email: "bell@aol.com" },
    { username: "cambam328", password: "pass55", email: "cam@aol.com" },
    { username: "moomoo518", password: "pass66", email: "moo@aol.com" },
  ]);
};
