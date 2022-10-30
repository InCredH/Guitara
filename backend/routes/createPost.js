const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../controllers/requireLogin");
const POST = mongoose.model("POST")
var passport = require("../strategy/JwtStrategy");
// Route
router.get("/allposts", passport.authenticate("jwt", { session: false }), (req, res) => {
    POST.find()
        .populate("postedBy", "_id userName")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
    // console.log(posts)
})

router.post("/createPost", passport.authenticate("jwt", { session: false }), (req, res) => {
//router.post("/createPost",(req, res) => {
    const { body, pic } = req.body;
    console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
})

module.exports = router
