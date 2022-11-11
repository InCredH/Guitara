const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../controllers/requireLogin");
const POST = mongoose.model("POST")
const USER = mongoose.model("User")
var passport = require("../strategy/JwtStrategy");
// Route

//get all posts to render on community_landing
router.get("/allposts",requireLogin, (req, res) => {
    POST.find().sort({"createdAt": -1})
        .populate("postedBy", "_id userName")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
    // console.log(posts)
})

router.get("/profileposts",requireLogin, (req, res) => {
    // console.log(req)
    // console.log(req.user._id)
    // console.log("USER:\n" + req.user)
    console.log(req.headers["userId"]);
    const user = req.user;
    console.log(user)
    POST.find({postedBy: user}).sort({"createdAt": -1})
        .populate("postedBy", "_id userName")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
})
router.delete("/postdelete/:postId", requireLogin, (req, res) => {
    // console.log(req);
    var postId = req.params.postId
    POST.deleteOne({_id: postId})
    .catch(err => console.log(err))
    // console.log(posts)
})


// router.put("/like",passport.authenticate("jwt", { session: false }), (req, res) => {
//     POST.findByIdAndUpdate(req.body.postId, {
//         $push:{likes: req.user._id}
//     },{
//         new:true
//     }.exec((err, result) =>{
//         if(err){
//             return res.status(422).json({error:err})
//         }
//         else{
//             res.json(result)
//         }
//     }))
// })

// router.put("/unlike",passport.authenticate("jwt", { session: false }), (req, res) => {
//     POST.findByIdAndUpdate(req.body.postId, {
//         $pull:{likes: req.user._id}
//     },{
//         new:true
//     }.exec((err, result) =>{
//         if(err){
//             return res.status(422).json({error:err})
//         }
//         else{
//             res.json(result)
//         }
//     }))
// })


//create post
router.post("/createPost", requireLogin, (req, res) => {
//router.post("/createPost",(req, res) => {
    const { body, pic } = req.body;
    // console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    // console.log(req.user)
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
