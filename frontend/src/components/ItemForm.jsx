import React, { useState } from "react";

function ItemForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    // TODO (Task 2.3): Add `category` to the initial state here
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity || !formData.price) {
      alert("Please fill in all fields");
      return;
    }
    onAdd(formData);
    setFormData({ name: "", quantity: "", price: "" });
    // TODO (Task 2.3): Reset `category` to "" in the line above as well
  };

  return (
    <div className="form-section">
      <h2>Add New Item</h2>
      <div className="form-group">
        <label>Item Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Laptop"
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g. 5"
        />
      </div>
      <div className="form-group">
        <label>Price (LKR)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="e.g. 1200"
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Electronics"
        />
      </div>

      {/* TODO (Task 2.3): Add a <select> dropdown for `category` here */}
      {/* Options: Electronics, Clothing, Food, Furniture, Other */}

      <button className="btn btn-submit" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
}

export default ItemForm;
