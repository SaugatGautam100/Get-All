import React, { useState } from 'react';
import NavigationBar from './NavigationBar';


// BecomeSeller component
const BecomeSeller = () => {
  // State for seller registration form
  const [sellerForm, setSellerForm] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    phone: '',
    address: '',
  });

  // State for product upload form
  const [productForm, setProductForm] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '', // For simulating image upload with a URL
  });

  // Handle changes for seller form inputs
  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    setSellerForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle changes for product form inputs
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle seller registration form submission
  const handleSellerSubmit = (e) => {
    e.preventDefault();
    console.log('Seller Registration Data:', sellerForm);
    // In a real application, you would send this data to your backend
    alert('Seller registration submitted successfully!'); // Using alert for demo purposes
    setSellerForm({
      name: '',
      email: '',
      businessName: '',
      businessType: '',
      phone: '',
      address: '',
    });
  };

  // Handle product upload form submission
  const handleProductSubmit = (e) => {
    e.preventDefault(); // Corrected: Removed extraneous 'V'
    console.log('Product Upload Data:', productForm);
    // In a real application, you would send this data and the image to your backend
    alert('Product uploaded successfully!'); // Using alert for demo purposes
    setProductForm({
      productName: '',
      description: '',
      price: '',
      category: '',
      imageUrl: '',
    });
  };

  return (
    <>
    <NavigationBar />
    <div className="seller-page-container">
      <div className="seller-card">
        <h1 className="page-title">
          Become a Seller
        </h1>

        {/* Seller Registration Section */}
        <section className="form-section">
          <h2 className="section-header">
            Seller Registration
          </h2>
          <form onSubmit={handleSellerSubmit} className="form-space-y-6">
            <div className="form-grid">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={sellerForm.name}
                  onChange={handleSellerChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                  />
              </div>
              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={sellerForm.email}
                  onChange={handleSellerChange}
                  className="form-input"
                  placeholder="you@example.com"
                  required
                  />
              </div>
            </div>

            <div className="form-grid">
              {/* Business Name Input */}
              <div className="form-group">
                <label htmlFor="businessName" className="form-label">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={sellerForm.businessName}
                  onChange={handleSellerChange}
                  className="form-input"
                  placeholder="Your Shop Name"
                  required
                  />
              </div>
              {/* Business Type Select */}
              <div className="form-group">
                <label htmlFor="businessType" className="form-label">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={sellerForm.businessType}
                  onChange={handleSellerChange}
                  className="form-select"
                  required
                  >
                  <option value="">Select a type</option>
                  <option value="individual">Individual Seller</option>
                  <option value="small_business">Small Business</option>
                  <option value="large_enterprise">Large Enterprise</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              {/* Phone Input */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={sellerForm.phone}
                  onChange={handleSellerChange}
                  className="form-input"
                  placeholder="+1234567890"
                  />
              </div>
              {/* Address Textarea */}
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Business Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={sellerForm.address}
                  onChange={handleSellerChange}
                  className="form-textarea"
                  placeholder="123 Main St, Anytown, USA"
                  ></textarea>
              </div>
            </div>

            {/* Seller Submit Button */}
            <div className="button-center-container">
              <button
                type="submit"
                className="btn btn-primary"
                >
                Register as Seller
              </button>
            </div>
          </form>
        </section>

        {/* Product Upload Section */}
        <section>
          <h2 className="section-header">
            Upload Your Products
          </h2>
          <form onSubmit={handleProductSubmit} className="form-space-y-6">
            <div className="form-grid">
              {/* Product Name Input */}
              <div className="form-group">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={productForm.productName}
                  onChange={handleProductChange}
                  className="form-input"
                  placeholder="Luxury Watch"
                  required
                  />
              </div>
              {/* Price Input */}
              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productForm.price}
                  onChange={handleProductChange}
                  className="form-input"
                  placeholder="99.99"
                  step="0.01"
                  required
                  />
              </div>
            </div>

            {/* Description Textarea */}
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={productForm.description}
                onChange={handleProductChange}
                className="form-textarea"
                placeholder="A detailed description of your product..."
                required
                ></textarea>
            </div>

            <div className="form-grid">
              {/* Category Select */}
              <div className="form-group">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={productForm.category}
                  onChange={handleProductChange}
                  className="form-select"
                  required
                  >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home_goods">Home Goods</option>
                  <option value="books">Books</option>
                  <option value="toys">Toys</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Image URL Input (simulated file upload) */}
              <div className="form-group">
                <label htmlFor="imageUrl" className="form-label">
                  Product Image URL (simulated upload)
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={productForm.imageUrl}
                  onChange={handleProductChange}
                  className="form-input"
                  placeholder="https://example.com/product-image.jpg"
                  />
                <p className="help-text">
                  (In a real application, this would be a file upload field.)
                </p>
              </div>
            </div>

            {/* Product Submit Button */}
            <div className="button-center-container">
              <button
                type="submit"
                className="btn btn-success"
                >
                Upload Product
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
                  </>
  );
};

export default BecomeSeller;
