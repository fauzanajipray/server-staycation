import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
});

module.export = mongoose.model("Activity", activitySchema);
