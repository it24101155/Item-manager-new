const Item = require("../models/Item");

// GET all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single item
const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create item
const createItem = async (req, res) => {
  // TODO (Task 2.2): Make sure `category` is extracted from req.body
  const { name, quantity, price } = req.body;

  try {
    const item = new Item({ name, quantity, price });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update item
const updateItem = async (req, res) => {
  // TODO (Task 2.2): Make sure `category` is included in the update
  const { name, quantity, price } = req.body;

  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, quantity, price },
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE item
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
