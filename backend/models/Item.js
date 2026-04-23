const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["Electronics", "Clothing", "Food", "Furniture", "Other"],
    },
    // TODO (Task 2.1): Add the `category` field here
    // It should be a required String with enum values:
    // ["Electronics", "Clothing", "Food", "Furniture", "Other"]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
