import React from 'react';
import InventoryItem from './InventoryItem';

const InventoryList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <InventoryItem key={index} item={item} />
    ))}
  </ul>
);

export default InventoryList;
