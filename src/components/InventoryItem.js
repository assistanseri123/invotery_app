import React from 'react';

const InventoryItem = ({ item }) => (
  <li>
    <div>
      <strong>{item.name}</strong> - Quantity: {item.quantity}
    </div>
    <div>
      <em>Supplier: {item.supplier.name} - Contact: {item.supplier.contact}</em>
    </div>
  </li>
);

export default InventoryItem;
