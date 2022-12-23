const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../controllers/requireLogin");
const POST = mongoose.model("POST")
const USER = mongoose.model("User")

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
    POST.findOne({_id: postId})
    .populate("postedBy", "_id userName")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
            post.remove()
            .then(result =>{
                res.json({message:"Successfully deleted the post !"})
            }).catch(err =>{
                console.log(err)
            })
        }
    })

    // console.log(posts)
})

// Community 
router.put("/like/:postId",requireLogin, async (req, res) => {
    const post_id = req.params.postId;
    const userId = req.user._id

    const post = await POST.findById(post_id);
    const user = await USER.findById(userId);

    if (user === null || post === null) {
        return res.status(400).send({ message: "Not valid params" });
      } else if (post.likes.includes(userId)) {
        post.likes = post.likes.filter((idOfUser) => {
          return idOfUser.toString() !== userId.toString();
        });
        await post.save();
        const posts = await POST.find({}).populate("postedBy", "_id userName").sort({"createdAt": -1});
        return res
          .status(200)
          .send({ sameUser: true, liked: false, count: post.likes.length,posts : posts });
      } else {
        post.likes.push(userId);
        await post.save();
        const posts = await POST.find({}).populate("postedBy", "_id userName").sort({"createdAt": -1});
        res
          .status(200)
          .send({ sameUser: false, liked: true, count: post.likes.length,posts : posts });
      }
})
// profile landing 
router.put("/likes/:postId",requireLogin, async (req, res) => {
    const post_id = req.params.postId;
    const userId = req.user._id;

    const post = await POST.findById(post_id);
    const user = await USER.findById(userId);

    if (user === null || post === null) {
        return res.status(400).send({ message: "Not valid params" });
      } else if (post.likes.includes(userId)) {
        post.likes = post.likes.filter((idOfUser) => {
          return idOfUser.toString() !== userId.toString();
        });
        await post.save();
        const posts = await POST.find({postedBy:req.user._id}).populate("postedBy", "_id userName").sort({"createdAt": -1});
        return res
          .status(200)
          .send({ sameUser: true, liked: false, count: post.likes.length,posts : posts });
      } else {
        post.likes.push(userId);
        await post.save();
        const posts = await POST.find({postedBy: req.user._id}).populate("postedBy", "_id userName").sort({"createdAt": -1});
        res
          .status(200)
          .send({ sameUser: false, liked: true, count: post.likes.length,posts : posts });
      }
})


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
