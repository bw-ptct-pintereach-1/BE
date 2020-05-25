const db = require("../data/config");

function getArticles() {
  return db("articles as a")
    .leftJoin("categories as c", "c.id", "a.category_id")
    .select("a.id", "a.title", "c.category_name");
}

function findById(id){
  return db("articles").where({id}).first();
}


function getWrittenArticlesById(id) {
  return db("users as u")
    .join("articles as a", "u.id", "a.user_id")
    .select("a.author as author", "a.title","a.content","a.date_written")
    .where("a.user_id", id);
}

function getSavedArticlesById(id){
  return db("users as u")
    .join("articles as a", "a.id", "us.article_id")
    .join("users_saved as us", "u.id", "us.user_id")
    .select("a.author as author", "a.title","a.content","a.date_written")
    .where("us.user_id", id);
}

async function addToSaved(article){
const [id] = await db("users_saved").insert(article.user_id,article.article_id)
return findById(id)
}

async function addArticle(article) {
  const [id] = await db("articles").insert(article)
  return findById(id);
}

async function updateArticle(id, changes) {
  await db("articles").where({id}).update(changes);
  return findById(id);
}

function removeArticle(id) {
  return db("articles").where({id}).del();
}

module.exports = {
  getArticles,
  getWrittenArticlesById,
  getSavedArticlesById,
  addArticle,
  updateArticle,
  addToSaved

};
