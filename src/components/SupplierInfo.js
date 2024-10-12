import React from 'react';

const SupplierInfo = ({ supplier }) => (
  <div>
    <strong>Supplier:</strong> {supplier.name} <br />
    <strong>Contact:</strong> {supplier.contact}
  </div>
);

export default SupplierInfo;
