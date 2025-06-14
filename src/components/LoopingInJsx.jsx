// ✅ Topic: Looping in JSX - Full Guide by Huzaifa Mushtaq

import React from "react";

const products = [
  { id: 1, name: "Laptop", price: "$1000" },
  { id: 2, name: "Mouse", price: "$25" },
  { id: 3, name: "Keyboard", price: "$50" },
  { id: 4, name: "Monitor", price: "$200" },
];

const LoopingInJSX = () => {
  // 🔁 1. Using map() for looping through array
  const renderProductList = products.map((product) => (
    <li key={product.id}>
      📦 {product.name} - <strong>{product.price}</strong>
    </li>
  ));

  // 🔁 2. Optional: Creating reusable function for looping
  const renderWithFunction = () => {
    return products.map((product) => (
      <div
        key={product.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h4>{product.name}</h4>
        <p>Price: {product.price}</p>
      </div>
    ));
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>🔁 Looping in JSX</h2>
      <hr />

      {/* ✅ Using map directly */}
      <h3>📝 Product List (ul + li)</h3>
      <ul>{renderProductList}</ul>

      {/* ✅ Loop using function */}
      <h3>📦 Product Cards (div blocks)</h3>
      {renderWithFunction()}
    </div>
  );
};

export default LoopingInJSX;
// Loop Type	JSX ke andar	Outside JSX
// map()	     ✅ YES	             ✅ YES
// for	         ❌ NO	             ✅ YES
// while	     ❌ NO	             ✅ YES
// do-while	     ❌ NO	             ✅ YES