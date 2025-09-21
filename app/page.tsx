import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Oak Dining Set",
      price: "$2,899",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Dining Room"
    },
    {
      id: 2,
      name: "Premium Leather Sofa",
      price: "$3,499",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Living Room"
    },
    {
      id: 3,
      name: "Executive Desk Collection",
      price: "$1,899",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Office"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Premium Materials",
      description: "Only the finest woods and fabrics sourced from sustainable suppliers worldwide."
    },
    {
      icon: CheckCircle,
      title: "Expert Craftsmanship",
      description: "Each piece is meticulously handcrafted by skilled artisans with decades of experience."
    },
    {
      icon: CheckCircle,
      title: "Lifetime Warranty",
      description: "We stand behind our quality with comprehensive warranty coverage."
    },
    {
      icon: CheckCircle,
      title: "Custom Design",
      description: "Personalize your furniture to match your unique style and space requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      
      {/* Featured Products */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most popular furniture pieces that combine elegance with functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-12 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 text-sm font-medium">{product.category}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <ArrowRight className="text-amber-400 group-hover:translate-x-2 transition-transform" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/catalog"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Royalwood?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference that quality craftsmanship and attention to detail make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let our design experts help you create the perfect living environment with our premium furniture collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;