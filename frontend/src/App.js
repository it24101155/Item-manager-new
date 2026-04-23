import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemCard from "./components/ItemCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/items`);
      setItems(res.data);
    } catch (err) {
      setError("Failed to fetch items. Is the backend running?");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async (formData) => {
    try {
      await axios.post(`${API_URL}/api/items`, formData);
      fetchItems();
    } catch (err) {
      setError("Failed to add item.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/items/${id}`);
      fetchItems();
    } catch (err) {
      setError("Failed to delete item.");
    }
  };

  return (
    <div className="container">
      <h1>Item Manager</h1>
      {error && <p className="error">{error}</p>}
      <ItemForm onAdd={handleAdd} />
      <h2 style={{ marginBottom: "15px" }}>Items ({items.length})</h2>
      {items.length === 0 ? (
        <p>No items found. Add one above!</p>
      ) : (
        items.map((item) => (
          <ItemCard key={item._id} item={item} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default App;
