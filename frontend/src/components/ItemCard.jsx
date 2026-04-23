import React from "react";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: LKR {item.price}</p>
        <p>Category: {item.category}</p
        >
        {/* TODO (Task 2.4): Display the `category` field here */}
        {/* e.g. <p>Category: {item.category}</p> */}
      </div>
      <button className="btn btn-danger" onClick={() => onDelete(item._id)}>
        Delete
      </button>
    </div>
  );
}

export default ItemCard;
