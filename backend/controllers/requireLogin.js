const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const USER = mongoose.model("User")

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must have logged in 1" })
    }
    console.log(authorization)
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ error: "You must have logged in 2" })
        }
        const { _id } = payload
        USER.findById(_id).then(userData => {
            req.user = userData
            next()
        })
    })

}