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

// router.get("/saved/:id", validateId, restrict(), async (req, res, next) => {
//   try {
//     const list = await Articles.getSavedArticlesById(req.params.id);
//     if (!list) {
//       res.status(404).json({
//         message: "Could not get articles",
//       });
//     }
//     res.json(list);
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/:id",validateId ,validateData, async (req, res, next) => {
  try {
    const newArticle = req.body;
    newArticle.user_id = req.params.id;
    Articles.addArticle(newArticle);
    res.status(200).json(newArticle);
  } catch (err) {
    next(err);
  }
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
  } else if (!req.body.author) {
    res.status(400).json({
      message: "Missing Article Author",
    });
  } else if (!req.body.content) {
    res.status(400).json({
      message: "Missing Article Content",
    });
  } else {
    next();
  }
}
