const db = require("../data/config");
const bcrypt = require("bcryptjs");

function findBy(user) {
  return db("users").where(user);
}

function findById(id){
    return db("users").select("id","username").where({id}).first();
}

async function add(user){
    user.password = await bcrypt.hash(user.password,14);
    const [id] = await db("users").insert(user,"id");
    return findById(id);
}




module.exports = {
    add,
    findBy,
    findById
}

// add functionality to delete a user's account