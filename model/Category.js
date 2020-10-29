import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
});

module.export = mongoose.model("Category", categorySchema);
