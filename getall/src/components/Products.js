import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';

// Mock product data
const mockProducts = [
  { id: 1, name: 'Wireless Bluetooth Earbuds', description: 'High-quality sound with comfortable fit.', price: 49.99, category: 'Electronics', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Earbuds' },
  { id: 2, name: 'Stylish Leather Handbag', description: 'Elegant and durable handbag for daily use.', price: 89.00, category: 'Fashion', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Handbag' },
  { id: 3, name: 'Smart Home Speaker', description: 'Voice-controlled speaker with smart assistant.', price: 129.99, category: 'Electronics', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Speaker' },
  { id: 4, name: 'Men\'s Casual Shirt', description: 'Comfortable cotton shirt for everyday wear.', price: 29.50, category: 'Fashion', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Shirt' },
  { id: 5, name: 'Organic Coffee Beans (1lb)', description: 'Premium fair-trade organic coffee beans.', price: 15.75, category: 'Groceries', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Coffee' },
  { id: 6, name: 'Ergonomic Office Chair', description: 'Adjustable chair for maximum comfort and support.', price: 199.00, category: 'Home Goods', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=OfficeChair' },
  { id: 7, name: 'Adventure Novel Book', description: 'A thrilling story of discovery and courage.', price: 12.99, category: 'Books', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Novel' },
  { id: 8, name: 'Kids Building Blocks Set', description: 'Creative building blocks for imaginative play.', price: 35.00, category: 'Toys', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Blocks' },
  { id: 9, name: 'Portable Power Bank', description: 'Fast charging power bank for all your devices.', price: 39.99, category: 'Electronics', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=PowerBank' },
  { id: 10, name: 'Women\'s Running Shoes', description: 'Lightweight and breathable for optimal performance.', price: 75.00, category: 'Fashion', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Shoes' },
  { id: 11, name: 'Handcrafted Ceramic Mug', description: 'Unique, artisan-made mug for your favorite beverage.', price: 18.00, category: 'Home Goods', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=Mug' },
  { id: 12, name: 'Fantasy eBook Series', description: 'Immerse yourself in an epic fantasy world.', price: 24.99, category: 'Books', imageUrl: 'https://placehold.co/400x300/F0F8FF/000000?text=eBook' },
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('name-asc'); // Default sort by name ascending

  // Load mock products on component mount
  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  // Get unique categories from the products
  const categories = ['All', ...new Set(mockProducts.map(product => product.category))];

  // Filter and sort products based on selected criteria
  const filteredAndSortedProducts = () => {
    let currentProducts = [...products]; // Create a mutable copy

    // 1. Filter by category
    if (selectedCategory !== 'All') {
      currentProducts = currentProducts.filter(product => product.category === selectedCategory);
    }

    // 2. Filter by price range
    if (minPrice !== '') {
      currentProducts = currentProducts.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice !== '') {
      currentProducts = currentProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    // 3. Sort products
    currentProducts.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      return 0; // No sort or invalid sort option
    });

    return currentProducts;
  };

  const currentProducts = filteredAndSortedProducts();

  return (
    // Embed the CSS directly within the component's render method
    <>
    <NavigationBar />
      <style>
        {`
        /* ProductPage.css */

        /* Base container for the entire product page */
        .product-page-container {
          min-height: 100vh;
          background-color: #f3f4f6; /* Equivalent to bg-gray-100 */
          padding: 1.5rem; /* Equivalent to p-6 */
          font-family: Inter, sans-serif; /* Equivalent to font-sans */
          box-sizing: border-box;
        }

        /* Main card for the product display */
        .product-main-card {
          max-width: 80rem; /* Custom max-width for wider content */
          margin: 0 auto; /* Center horizontally */
          background-color: #ffffff; /* Equivalent to bg-white */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-lg */
          border-radius: 0.75rem; /* Equivalent to rounded-xl */
          padding: 1.5rem; /* Equivalent to p-6 */
          display: flex; /* Flex container for title and content-area */
          flex-direction: column; /* Stack vertically always at this level */
          gap: 1.5rem; /* Gap between title and content-area */
        }

        /* Responsive padding for the main card */
        @media (min-width: 768px) { /* md: */
          .product-main-card {
            padding: 2rem; /* md:p-8 */
          }
        }

        /* Page title styling */
        .product-page-title {
          font-size: 2.25rem; /* Equivalent to text-4xl */
          font-weight: 800; /* Equivalent to font-extrabold */
          color: #1f2937; /* Equivalent to text-gray-800 */
          margin-bottom: 0.5rem; /* Reduced margin as it's now directly flexed */
          text-align: center; /* Equivalent to text-center */
          width: 100%; /* Occupy full width at top */
        }

        /* Wrapper for sidebar and main product content */
        .content-wrapper {
          display: flex; /* Flex container for sidebar and product grid */
          flex-direction: column; /* Stack vertically on small screens */
          gap: 1.5rem; /* Gap between sidebar and content */
          width: 100%; /* Occupy full width within product-main-card */
        }

        @media (min-width: 768px) { /* md: */
          .content-wrapper {
            flex-direction: row; /* Row direction on larger screens */
            align-items: flex-start; /* Align items to the top */
          }
        }


        /* Sidebar styling */
        .sidebar {
          width: 100%; /* Full width on small screens */
          min-width: 12rem; /* Minimum width for sidebar */
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: #f9fafb; /* Light gray background */
          border: 1px solid #e5e7eb;
          flex-shrink: 0; /* Prevent shrinking */
        }

        @media (min-width: 768px) { /* md: */
          .sidebar {
            width: 16rem; /* Fixed width on larger screens */
          }
        }

        /* Main content area (products) */
        .main-content {
          flex-grow: 1; /* Take remaining space */
        }

        .filter-section {
          margin-bottom: 1.5rem;
        }

        .filter-section-title {
          font-weight: 700;
          color: #374151;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .filter-input, .filter-select {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        .filter-input:focus, .filter-select:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: 0 0 0 2px #d1d5db, 0 0 0 4px #3b82f6;
          border-color: #3b82f6;
        }

        /* Category navigation container */
        .category-nav {
          display: flex;
          flex-direction: column; /* Stack category buttons vertically */
          gap: 0.5rem; /* Smaller gap for vertical buttons */
          margin-bottom: 1rem; /* Adjust margin as it's inside sidebar now */
          border-bottom: none; /* Remove border from here as it's inside sidebar */
          padding-bottom: 0; /* Remove padding as it's inside sidebar */
        }

        /* Category button base styles */
        .category-btn {
          padding: 0.625rem 1.25rem; /* Equivalent to px-5 py-2.5 */
          border-radius: 0.5rem; /* Equivalent to rounded-lg */
          font-weight: 600; /* Equivalent to font-semibold */
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          cursor: pointer;
          white-space: nowrap; /* Prevent text wrapping */
          text-align: left; /* Align text to the left */
        }

        /* Default category button styles */
        .category-btn.default {
          background-color: #e0e7ff; /* Equivalent to bg-indigo-100 */
          color: #4338ca; /* Equivalent to text-indigo-700 */
        }

        .category-btn.default:hover {
          background-color: #c7d2fe; /* Equivalent to hover:bg-indigo-200 */
        }

        /* Active category button styles */
        .category-btn.active {
          background-color: #4f46e5; /* Equivalent to bg-indigo-600 */
          color: #ffffff; /* Equivalent to text-white */
        }

        .category-btn.active:hover {
          background-color: #4338ca; /* Equivalent to hover:bg-indigo-700 */
        }

        /* Product grid container */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr)); /* Equivalent to grid-cols-1 */
          gap: 1.5rem; /* Equivalent to gap-6 */
        }

        /* Responsive product grid columns */
        @media (min-width: 640px) { /* sm: */
          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* sm:grid-cols-2 */
          }
        }

        @media (min-width: 1024px) { /* lg: */
          .product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)); /* lg:grid-cols-3 */
          }
        }

        @media (min-width: 1280px) { /* xl: */
          .product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)); /* xl:grid-cols-4 */
          }
        }

        /* Product card styles */
        .product-card {
          background-color: #ffffff; /* Equivalent to bg-white */
          border-radius: 0.75rem; /* Equivalent to rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* Equivalent to shadow-md */
          overflow: hidden; /* Ensure image corners are rounded */
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .product-card:hover {
          transform: translateY(-0.25rem); /* Equivalent to hover:-translate-y-1 */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Stronger shadow on hover */
        }

        /* Product image container */
        .product-image-container {
          width: 100%;
          height: 12rem; /* Equivalent to h-48 */
          overflow: hidden;
          background-color: #e2e8f0; /* Placeholder background */
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b; /* Text color for placeholder */
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Equivalent to object-cover */
        }

        /* Product details section */
        .product-details {
          padding: 1rem; /* Equivalent to p-4 */
        }

        /* Product name */
        .product-name {
          font-size: 1.125rem; /* Equivalent to text-lg */
          font-weight: 600; /* Equivalent to font-semibold */
          color: #1f2937; /* Equivalent to text-gray-800 */
          margin-bottom: 0.5rem; /* Equivalent to mb-2 */
        }

        /* Product description */
        .product-description {
          font-size: 0.875rem; /* Equivalent to text-sm */
          color: #4b5563; /* Equivalent to text-gray-600 */
          margin-bottom: 0.75rem; /* Equivalent to mb-3 */
          height: 3rem; /* Fixed height for description */
          overflow: hidden; /* Hide overflow content */
          text-overflow: ellipsis; /* Add ellipsis for overflow */
        }

        /* Product price - now red! */
        .product-price {
          font-size: 1.25rem; /* Equivalent to text-xl */
          font-weight: 700; /* Equivalent to font-bold */
          color: #dc2626; /* Changed to red: Equivalent to text-red-600 */
        }

        /* Add to cart button */
        .add-to-cart-btn {
          display: block; /* Equivalent to block */
          width: 100%; /* Equivalent to w-full */
          margin-top: 1rem; /* Equivalent to mt-4 */
          padding: 0.625rem 1rem; /* Equivalent to py-2.5 px-4 */
          background-color: #4f46e5; /* Equivalent to bg-indigo-600 */
          color: #ffffff; /* Equivalent to text-white */
          font-weight: 600; /* Equivalent to font-semibold */
          border-radius: 0.5rem; /* Equivalent to rounded-lg */
          text-align: center; /* Equivalent to text-center */
          transition: background-color 0.2s ease-in-out;
          cursor: pointer;
        }

        .add-to-cart-btn:hover {
          background-color: #4338ca; /* Equivalent to hover:bg-indigo-700 */
        }
        `}
      </style>
      <div className="product-page-container">
        <div className="product-main-card">
          <h1 className="product-page-title">Our Products</h1>

          <div className="content-wrapper"> {/* Wraps sidebar and product grid for horizontal layout */}
            {/* Sidebar for filters */}
            <aside className="sidebar">
              <div className="filter-section">
                <h3 className="filter-section-title">Categories</h3>
                <nav className="category-nav">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`category-btn ${selectedCategory === category ? 'active' : 'default'}`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="filter-section">
                <h3 className="filter-section-title">Price Range</h3>
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="filter-input"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="filter-input"
                  min="0"
                />
              </div>

              <div className="filter-section">
                <h3 className="filter-section-title">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>
            </aside>

            {/* Main Product Container (Product Grid) */}
            <main className="main-content">
              <div className="product-grid">
                {currentProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image-container">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="product-image"
                        onError={(e) => {
                          // Fallback for broken images: replace with a placeholder
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/400x300/cccccc/000000?text=Image+Error`;
                        }}
                      />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                      <button className="add-to-cart-btn">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
                {currentProducts.length === 0 && (
                  <p className="text-center col-span-full text-gray-600">No products found matching your criteria.</p>
                )}
              </div>
            </main>
          </div> {/* End content-wrapper */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
