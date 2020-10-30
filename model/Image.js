import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
});

module.export = mongoose.model("Image", imageSchema);
