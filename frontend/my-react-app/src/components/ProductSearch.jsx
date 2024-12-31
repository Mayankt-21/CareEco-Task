/*import React, { useState } from 'react';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products] = useState([
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Fashion' },
    { name: 'Product 3', category: 'Home' },
    { name: 'Product 4', category: 'Electronics' },
    { name: 'Product 5', category: 'Fashion' },
    { name: 'Product 6', category: 'Home' },
  ]);
  const [categories] = useState(['Electronics', 'Fashion', 'Home']);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
      <h3>Categories</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px' }}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategorySelect(category)}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          >
            {category}
          </li>
        ))}
        <li
          onClick={() => setSelectedCategory('')}
          style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f0f0'}
        >
          All Categories
        </li>
      </ul>

      <h3>Products</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={{
              width: '150px',
              height: '150px',
              margin: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>{product.name}</div>
            <div>{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
*/

/*import React, { useState } from 'react';

const ProductSearch = ({onAddToCart}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTile, setSelectedTile] = useState(null); // State to track selected tile
  const [products] = useState([
    { name: 'Jewelry Box', category: 'Fashion',price:50 },
    { name: 'Jeweled Watch', category: 'Fashion',price:100 },
    { name: 'Home Decor', category: 'Home',price:30 },
    { name: 'Smartphone', category: 'Electronics',price:500 },
    { name: 'Headphones', category: 'Electronics',price:80},
    { name: 'Fashion Jacket', category: 'Fashion',price:150 },
  ]);
  const [categories] = useState(['Electronics', 'Fashion', 'Home']);

  // Filter suggestions based on query (startsWith match)
  const suggestions = products.filter(product =>
    product.name.toLowerCase().startsWith(query.toLowerCase())
  );

  // Filter products based on category and query (startsWith match)
  const filteredProducts = products.filter(product => {
    const matchesQuery = product.name.toLowerCase().startsWith(query.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesQuery && matchesCategory;
  });

  // Default suggestions when no products match the query
  const defaultSuggestions = [
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'Fashion Jacket', category: 'Fashion' },
    { name: 'Headphones', category: 'Electronics' },
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTileSelect = (product) => {
    setSelectedTile(product.name === selectedTile ? null : product.name); // Deselect if same tile is clicked
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', 
      margin: '0', 
      padding: '0', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Search Products</h2>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search products..."
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            transition: 'border-color 0.3s ease',
          }}
        />

        {}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Categories</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategorySelect(category)}
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '50%',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e0e0e0';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {category}
            </li>
          ))}
          <li
            onClick={() => setSelectedCategory('')}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e0e0e0';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.transform = 'scale(1)';
            }}
          >
            All Categories
          </li>
        </ul>

        {}
        {query && suggestions.length === 0 ? (
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
              We couldn't find what you're looking for, but you can surely check these out!
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {defaultSuggestions.map((product, index) => (
                <div
                  key={index}
                  onClick={() => handleTileSelect(product)} // Handle tile selection
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: '10px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: product.name === selectedTile ? '#d3e0e9' : '#fff', // Highlight selected tile
                    cursor: 'pointer',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{product.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#777' }}>{product.category}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Display matched suggestions
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Suggestions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleTileSelect(suggestion)} // Handle tile selection
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: '10px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: suggestion.name === selectedTile ? '#d3e0e9' : '#fff', // Highlight selected tile
                    cursor: 'pointer',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{suggestion.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#777' }}>{suggestion.category}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        <h3 style={{ fontSize: '1.5rem', marginTop: '30px' }}>Products</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => handleTileSelect(product)} // Handle tile selection
                style={{
                  width: '150px',
                  height: '150px',
                  margin: '10px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: product.name === selectedTile ? '#d3e0e9' : '#fff', // Highlight selected tile
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{product.name}</div>
                <div style={{ fontSize: '0.9rem', color: '#777' }}>{product.category}</div>
              </div>
            ))
          ) : (
            <p style={{ color: '#888', fontSize: '1.2rem' }}>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
*/
/*
import React, { useState } from 'react';

const ProductSearch = ({ onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTile, setSelectedTile] = useState(null);

  const [products] = useState([
    { name: 'Jewelry Box', category: 'Fashion', price: 50 },
    { name: 'Jeweled Watch', category: 'Fashion', price: 100 },
    { name: 'Home Decor', category: 'Home', price: 30 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Headphones', category: 'Electronics', price: 80 },
    { name: 'Fashion Jacket', category: 'Fashion', price: 150 },
  ]);

  const [categories] = useState(['Electronics', 'Fashion', 'Home']);

  // Filter suggestions based on query
  const suggestions = products.filter(product =>
    product.name.toLowerCase().startsWith(query.toLowerCase())
  );

  // Filter products based on category and query
  const filteredProducts = products.filter(product => {
    const matchesQuery = product.name.toLowerCase().startsWith(query.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesQuery && matchesCategory;
  });

  // Default suggestions for when no products match the query
  const defaultSuggestions = [
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Fashion Jacket', category: 'Fashion', price: 150 },
    { name: 'Headphones', category: 'Electronics', price: 80 },
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTileSelect = (product) => {
    setSelectedTile(product.name === selectedTile ? null : product.name);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2>Search Products</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
      />

      <h3>Categories</h3>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '10px' }}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategorySelect(category)}
            style={{
              padding: '10px',
              backgroundColor: selectedCategory === category ? '#d3e0e9' : '#fff',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            {category}
          </li>
        ))}
        <li
          onClick={() => setSelectedCategory('')}
          style={{
            padding: '10px',
            backgroundColor: selectedCategory === '' ? '#d3e0e9' : '#fff',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          All Categories
        </li>
      </ul>

      {}
      {query && suggestions.length === 0 ? (
        <div>
          <h3>We couldn't find what you're looking for, but you can surely check these out!</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {defaultSuggestions.map((product, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: product.name === selectedTile ? '#d3e0e9' : '#fff',
                  width: '150px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{product.name}</div>
                <div style={{ color: '#777' }}>{product.category}</div>
                <div>${product.price}</div>
                <button
                  onClick={() => onAddToCart(product)}
                  style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display matched suggestions
        <div>
          <h3>Suggestions</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: suggestion.name === selectedTile ? '#d3e0e9' : '#fff',
                  width: '150px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{suggestion.name}</div>
                <div style={{ color: '#777' }}>{suggestion.category}</div>
                <div>${suggestion.price}</div>
                <button
                  onClick={() => onAddToCart(suggestion)}
                  style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {}
      <h3>Products</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: product.name === selectedTile ? '#d3e0e9' : '#fff',
                width: '150px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{product.name}</div>
              <div style={{ color: '#777' }}>{product.category}</div>
              <div>${product.price}</div>
              <button
                onClick={() => onAddToCart(product)}
                style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

*/

import React, { useState } from 'react';

const ProductSearch = ({ onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTile, setSelectedTile] = useState(null);

  const [products] = useState([
    { name: 'Jewelry Box', category: 'Fashion', price: 50 },
    { name: 'Jeweled Watch', category: 'Fashion', price: 100 },
    { name: 'Home Decor', category: 'Home', price: 30 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Headphones', category: 'Electronics', price: 80 },
    { name: 'Fashion Jacket', category: 'Fashion', price: 150 },
  ]);

  const [categories] = useState(['Electronics', 'Fashion', 'Home']);

  // Filter suggestions based on query
  const suggestions = products.filter(product =>
    product.name.toLowerCase().startsWith(query.toLowerCase())
  );

  // Filter products based on category and query
  const filteredProducts = products.filter(product => {
    const matchesQuery = product.name.toLowerCase().startsWith(query.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesQuery && matchesCategory;
  });

  // Default suggestions for when no products match the query
  const defaultSuggestions = [
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Fashion Jacket', category: 'Fashion', price: 150 },
    { name: 'Headphones', category: 'Electronics', price: 80 },
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTileSelect = (product) => {
    setSelectedTile(product.name === selectedTile ? null : product.name);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Search Products</h2>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search products..."
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            transition: 'border-color 0.3s ease',
          }}
        />

        {/* Categories Section */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Categories</h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategorySelect(category)}
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '50%',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e0e0e0';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {category}
            </li>
          ))}
          <li
            onClick={() => setSelectedCategory('')}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e0e0e0';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.transform = 'scale(1)';
            }}
          >
            All Categories
          </li>
        </ul>

        {/* Suggestions Section */}
        {query && suggestions.length === 0 ? (
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
              We couldn't find what you're looking for, but you can surely check these out!
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {defaultSuggestions.map((product, index) => (
                <div
                  key={index}
                  onClick={() => onAddToCart(product)}
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: '10px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{product.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#777' }}>{product.category}</div>
                  <div>${product.price}</div>
                  <button>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Suggestions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => onAddToCart(suggestion)}
                  style={{
                    width: '150px',
                    height: '150px',
                    margin: '10px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{suggestion.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#777' }}>{suggestion.category}</div>
                  <div>${suggestion.price}</div>
                  <button>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filtered Products Section */}
        <h3 style={{ fontSize: '1.5rem', marginTop: '30px' }}>Products</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => onAddToCart(product)}
                style={{
                  width: '150px',
                  height: '150px',
                  margin: '10px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0,0,0.1)',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }} > <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{product.name}</div> <div style={{ fontSize: '0.9rem', color: '#777' }}>{product.category}</div> <div>${product.price}</div> <button>Add to Cart</button> </div>))) : (<p style={{ fontSize: '1rem', color: '#777' }}>No products match your search.</p>)} </div> </div> </div>);
};
export default ProductSearch;




