// import jwt from "jsonwebtoken";
const jwt = require('jsonwebtoken')

// const generateRefreshToken = (email, userId, duration, token_secret) => {
//    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
//  };


exports.createJWT = (email, userId, duration, key) => {
   const payload = {
      email,
      userId,
      duration
   };
   return jwt.sign(payload, key, {
     expiresIn: duration,
   });
};

// exports.createRefreshJWT = (email, userId, duration) => {
//    const payload = {
//       email,
//       userId,
//       duration
//    };
//    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
//      expiresIn: duration,
//    });
// };

