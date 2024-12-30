import React, { useState } from 'react';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [categories] = useState(['Electronics', 'Fashion', 'Home']);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSuggestions(['Product 1', 'Product 2', 'Product 3']);
  };

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
      <h3>Suggestions</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
