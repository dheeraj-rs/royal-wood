"use client";

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Filter, Star, ShoppingCart, Eye, X, Menu } from 'lucide-react';

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining Room' },
    { id: 'office', label: 'Office' },
    { id: 'outdoor', label: 'Outdoor' },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-1000', label: 'Under $1,000' },
    { id: '1000-2500', label: '$1,000 - $2,500' },
    { id: '2500-5000', label: '$2,500 - $5,000' },
    { id: 'over-5000', label: 'Over $5,000' },
  ];

  const products = [
    {
      id: 1,
      name: "Royal Oak Dining Set",
      category: "dining",
      price: 2899,
      originalPrice: 3299,
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      reviews: 28,
      inStock: true,
      sale: true,
      description: "Elegant 8-piece dining set crafted from premium oak wood"
    },
    {
      id: 2,
      name: "Premium Leather Sofa",
      category: "living",
      price: 3499,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      reviews: 42,
      inStock: true,
      sale: false,
      description: "Luxurious full-grain leather sofa with deep comfort seating"
    },
    {
      id: 3,
      name: "Executive Desk Collection",
      category: "office",
      price: 1899,
      originalPrice: null,
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      reviews: 15,
      inStock: true,
      sale: false,
      description: "Professional desk with built-in storage and cable management"
    },
    {
      id: 4,
      name: "Modern Platform Bed",
      category: "bedroom",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      reviews: 67,
      inStock: true,
      sale: true,
      description: "Sleek platform bed with integrated nightstands"
    },
    {
      id: 5,
      name: "Outdoor Teak Dining Set",
      category: "outdoor",
      price: 2199,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      reviews: 23,
      inStock: true,
      sale: false,
      description: "Weather-resistant teak dining set for outdoor entertaining"
    },
    {
      id: 6,
      name: "Vintage Bookshelf",
      category: "living",
      price: 899,
      originalPrice: null,
      image: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      reviews: 31,
      inStock: false,
      sale: false,
      description: "Handcrafted bookshelf with vintage-inspired design"
    },
    {
      id: 7,
      name: "Luxury Armchair",
      category: "living",
      price: 1599,
      originalPrice: null,
      image: "https://images.pexels.com/photos/586922/pexels-photo-586922.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      reviews: 19,
      inStock: true,
      sale: false,
      description: "Elegant armchair upholstered in premium fabric"
    },
    {
      id: 8,
      name: "Rustic Coffee Table",
      category: "living",
      price: 799,
      originalPrice: 999,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      reviews: 45,
      inStock: true,
      sale: true,
      description: "Reclaimed wood coffee table with industrial accents"
    },
    {
      id: 9,
      name: "Office Chair Pro",
      category: "office",
      price: 699,
      originalPrice: null,
      image: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      reviews: 88,
      inStock: true,
      sale: false,
      description: "Ergonomic office chair with lumbar support"
    }
  ];

  const filterProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = priceRange === 'all' ||
        (priceRange === 'under-1000' && product.price < 1000) ||
        (priceRange === '1000-2500' && product.price >= 1000 && product.price <= 2500) ||
        (priceRange === '2500-5000' && product.price >= 2500 && product.price <= 5000) ||
        (priceRange === 'over-5000' && product.price > 5000);

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section - Hidden when scrolled */}
      <section className={`relative pt-20 pb-16 overflow-hidden transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 pb-0' : ''}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Furniture
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Catalog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Explore our complete collection of premium furniture pieces,
              carefully crafted to transform your living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filters Section */}
      <section className={`${isScrolled ? 'fixed top-16 left-0 right-0 z-40' : ''} py-4 bg-slate-800 border-b border-slate-700 transition-all duration-300`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden mb-4">
            <h2 className="text-lg font-semibold text-white">Filters</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 text-white hover:text-amber-400 transition-colors"
            >
              {showFilters ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} w-full lg:flex lg:justify-between`}>
            {/* Search */}
            <div className="relative w-full lg:max-w-md mb-4 lg:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search furniture..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 lg:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all text-sm lg:text-base"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2 lg:gap-4 mt-4 lg:mt-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400/50 appearance-none cursor-pointer text-sm lg:text-base"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400/50 appearance-none cursor-pointer text-sm lg:text-base"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id} className="bg-slate-800">
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 lg:px-4 lg:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400/50 appearance-none cursor-pointer text-sm lg:text-base"
              >
                <option value="name" className="bg-slate-800">Sort by Name</option>
                <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`${isScrolled ? 'pt-32' : 'pt-20'} pb-20 bg-slate-900 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-white">
              {filteredProducts.length} Products Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.sale && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sale
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-400 text-sm font-medium capitalize">{product.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-gray-300 text-sm">{product.rating}</span>
                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <button
                        disabled={!product.inStock}
                        onClick={() => {
                          if (product.inStock) {
                            // Add to cart functionality
                            const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                            const existingItem = cartItems.find((item: any) => item.id === product.id);

                            if (existingItem) {
                              existingItem.quantity += 1;
                            } else {
                              cartItems.push({ ...product, quantity: 1 });
                            }

                            localStorage.setItem('cart', JSON.stringify(cartItems));

                            // Show success message (you can implement a toast here)
                            alert('Item added to cart!');
                          }
                        }}
                        className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group text-sm lg:text-base"
                      >
                        <ShoppingCart size={14} className="mr-1 lg:mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No products found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-amber-400 hover:text-amber-300 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Can&apos;t find exactly what you&apos;re looking for? Our expert craftsmen can create custom pieces tailored to your exact specifications.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Request Custom Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CatalogPage;