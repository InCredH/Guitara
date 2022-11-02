const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "no photo",
      // required: true
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("POST", postSchema);
