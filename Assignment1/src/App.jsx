import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Products from './productData.json';
import Product from './Components/Product';  // Corrected component name
import './App.css';

// Correcting the component rendering and using the correct property name
const productList = Products.map((product, index) => (
  <Product
    key={index}
    pTitle={product.Title}
    price={product.price}  // Ensure this matches the JSON key
    rating={product.Rating}
    pDescription={product.Description}
    size={product.size}
  />
));

function App() {
  return (
    <div>
      {productList}
    </div>
  );
}

export default App;
