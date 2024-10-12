
import React, { useState } from 'react';
import InventoryList from './components/InventoryList';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [supplierContact, setSupplierContact] = useState('');

  const addItem = () => {
    if (itemName && itemQuantity > 0 && supplierName && supplierContact) {
      const newItem = {
        name: itemName,
        quantity: Number(itemQuantity),
        supplier: { name: supplierName, contact: supplierContact },
      };
      setItems([...items, newItem]);
      resetForm();
    }
  };

  const resetForm = () => {
    setItemName('');
    setItemQuantity('');
    setSupplierName('');
    setSupplierContact('');
  };

  return (
    <div className="App">
      <h1>Inventory App</h1>
      <div className="form">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <input
          type="text"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          placeholder="Supplier Name"
        />
        <input
          type="text"
          value={supplierContact}
          onChange={(e) => setSupplierContact(e.target.value)}
          placeholder="Supplier Contact"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <InventoryList items={items} />
    </div>
  );
};

export default App;
