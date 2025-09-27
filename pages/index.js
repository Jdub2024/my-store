import React, { useState } from 'react'
import { ShoppingBag, Heart, Star, Package } from 'lucide-react'

export default function LuxuryEcommercePreview() {
  const [activeTab, setActiveTab] = useState('storefront')

  // ✅ Current live products (Stripe + Affiliate)
  const products = [
    {
      id: 1,
      name: 'The Ultimate Coaching Guide',
      price: 19,
      image: '/ultimate-coaching-guide.jpg',
      alt: 'The Ultimate Coaching Guide ebook cover',
      stock: 50,
      rating: 4.9,
      link: 'https://buy.stripe.com/bJeeVcgB4dgmdvN9Bz77O20'
    },
    {
      id: 2,
      name: 'Grow Your Business with Digital Marketing',
      price: 18,
      image: '/grow-your-business-digital-marketing.jpg',
      alt: 'Grow Your Business with Digital Marketing ebook cover',
      stock: 50,
      rating: 4.8,
      link: 'https://buy.stripe.com/4gM4gy1Ga6RYgHZ9Bz77O1Q'
    },
    {
      id: 3,
      name: 'Digital Growth Planner',
      price: 17,
      image: '/digital-growth-planner.jpg',
      alt: 'Digital Growth Planner ebook cover',
      stock: 50,
      rating: 4.8,
      link: 'https://buy.stripe.com/14A8wOckOdgmajB4hf77O1L'
    },
    // Affiliate offers as special “products”
    {
      id: 4,
      name: '5 Best Weight Loss Program',
      price: null,
      image: '/affiliate-weightloss.jpg',
      alt: '5 Best Weight Loss affiliate offer',
      stock: null,
      rating: 4.7,
      link: 'https://5bestweightloss.com/?id=68d695c1ac517ed67474c4a2'
    },
    {
      id: 5,
      name: 'Mitolyn Science Supplement',
      price: null,
      image: '/affiliate-mitolyn.jpg',
      alt: 'Mitolyn Science affiliate offer',
      stock: null,
      rating: 4.7,
      link: 'https://mitolyn.com/science/?affiliate=cellular20'
    }
  ]

  const StorefrontView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                LuxuryMarket
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 font-serif">Luxury Redefined</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium digital products and exclusive affiliate offers.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Instant access to premium eBooks and trusted affiliate programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.stock && product.stock <= 10 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Only {product.stock} left
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">Instant digital download or secure affiliate checkout.</p>
                <div className="flex justify-between items-center">
                  {product.price
                    ? <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                    : <span className="text-xl font-semibold text-purple-600">Special Offer</span>
                  }
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-600">Stripe-powered checkout with buyer protection</p>
            </div>
            <div>
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Delivery</h4>
              <p className="text-gray-600">Immediate access after payment</p>
            </div>
            <div>
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium Support</h4>
              <p className="text-gray-600">Dedicated help for every purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('storefront')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'storefront'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Storefront View
            </button>
          </nav>
        </div>
      </div>
      {activeTab === 'storefront' && <StorefrontView />}
    </div>
  )
      }
