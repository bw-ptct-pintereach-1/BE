const router = require("express").Router();
const Users = require("../helpers/user-model");
const restrict = require("../auth/restrict-middleware");




router.get("/:id",validateUserId,async (req,res,next) =>{
    try{
  res.status(200).json(req.user);
    }catch(err){
next(err);
    }
})

module.exports = router;

//-------------MIDDLEWARE

async function validateUserId(req, res, next) {
    try {
      const user = await Users.findById(req.params.id);
      console.log(user);
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