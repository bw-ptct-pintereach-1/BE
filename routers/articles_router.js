const router = require("express").Router();
const Articles = require("../helpers/articles-model");
const Users = require("../helpers/user-model");
const restrict = require("../auth/restrict-middleware");

router.get("/", restrict(), async (req, res, next) => {
  try {
    const articleList = await Articles.getArticles();
    if (!articleList) {
      res.status(404).json({
        message: "could not retreive User list",
      });
    }
    res.status(200).json(articleList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateId, restrict(), async (req, res, next) => {
  try {
    const list = await Articles.getWrittenArticlesById(req.params.id);
    if (!list) {
      res.status(404).json({
        message: "Could not get articles",
      });
    }
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/saved", validateId, restrict(), async (req, res, next) => {
  try {
    const list = await Articles.getSavedArticlesById(req.params.id);
    if (!list) {
      res.status(404).json({
        message: "Could not get articles",
      });
    }
    res.json(list);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/:id",
  validateId,
  validateData,
  findUser,
  async (req, res, next) => {
    try {
      const newArticle = req.body;
      newArticle.user_id = req.params.id;
      newArticle.author = req.author;
      Articles.addArticle(newArticle);
      res.status(200).json(newArticle);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/:id/saved", validateId, async (req, res, next) => {
  try {
    const payload = {
      user_id: req.params.id,
      article_id: req.body.article_id,
    };

    const saved = await Articles.addToSaved(payload);
    res.status(200).json(saved);
  } catch (err) {
    next(err);
  }
});

router.put("/:id/user/:user_id", async (req, res, next) => {
  try {
    console.log(req.params);
    const editedArticle = req.body;
    const user = await Users.findById(req.params.user_id);
    editedArticle.edited_by = user.username;
    const article = Articles.updateArticle(req.params.id, editedArticle);
    res.status(200).json(article);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Articles.removeArticle(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find article with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete article" });
    });
});

module.exports = router;

//----------------- MIDDLEWARE ------------------------

async function validateId(req, res, next) {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        message: "Invalid User ID Given",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

async function validateData(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      message: "Missing all required article information",
    });
  } else if (!req.body.title) {
    res.status(400).json({
      message: "Missing Article Title",
    });
  } else if (!req.body.content) {
    res.status(400).json({
      message: "Missing Article Content",
    });
  } else if (!req.body.category) {
    res.status(400).json({ message: "Missing category id" });
  } else if (req.body.category_id > 10 || req.body.category_id < 1) {
    res.status(400).json({ message: "select category id from 1-8" });
  } else {
    next();
  }
}

async function findUser(req, res, next) {
  try {
    const author = await Users.findById(req.params.id);
    if (author) {
      req.author = author.username;
    }
    next();
  } catch (err) {
    next(err);
  }
}
