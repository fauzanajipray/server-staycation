import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: String,
});

module.export = mongoose.model("Image", imageSchema);
