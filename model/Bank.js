import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: string,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("Bank", bankSchema);
