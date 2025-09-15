import React from 'react';
import { ShoppingCart, Star, Download, Zap } from 'lucide-react';
import EmailCapture from './EmailCapture';

interface ProductsProps {
  darkMode: boolean;
}

const Products: React.FC<ProductsProps> = ({ darkMode }) => {
  const [emailModal, setEmailModal] = React.useState({ isOpen: false, url: '', title: '', price: '' });

  const products = [
    {
      emoji: "💼",
      title: "Complete AI Growth Bundle",
      subtitle: "The Whole Dang Toolbox",
      description: "Everything you need to go full upgrade mode:",
      price: "$49",
      originalPrice: "$199",
      priceNote: "because we're not monsters",
      features: [
        "1,200+ AI prompts for life & business",
        "10 categories so you don't get lost",
        "Business growth tools that don't suck",
        "Lifetime updates (because AI never sleeps)",
        "Instant download — no fluff, no delays"
      ],
      gumroadUrl: "https://growai7.gumroad.com/l/lmgte?_gl=1*fnkhi8*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzc4MjY4JGo1NiRsMCRoMA..",
      popular: true,
      color: "from-emerald-500 to-blue-500"
    },
    {
      emoji: "🧩",
      title: "AI Prompts by Category",
      subtitle: "Pick Your Flavor",
      description: "Organized chaos turned into organized prompts:",
      price: "$89",
      originalPrice: "$149",
      priceNote: "now it's mildly less outrageous",
      features: [
        "1,200+ categorized prompts",
        "Easy to navigate (even for your uncle)",
        "Search function so you look smart",
        "Ongoing updates",
        "Delivered in beautiful PDF form. You're welcome."
      ],
      gumroadUrl: "https://growai7.gumroad.com/l/uhuqh?_gl=1*1u8hn79*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzc4MjgxJGo0MyRsMCRoMA..",
      popular: false,
      color: "from-purple-500 to-indigo-500"
    },
    {
      emoji: "📬",
      title: "Weekly AI Drop",
      subtitle: "The 5-Minute Brain Boost",
      description: "Fresh AI fire delivered every week:",
      price: "$5",
      originalPrice: "$15",
      priceNote: "now cheaper than your fancy coffee",
      features: [
        "5 new ideas that slap",
        "Cool tools trending now",
        "How-to guides so you actually use them",
        "Access to the smart crowd",
        "Straight to your inbox like a friendly productivity punch"
      ],
      gumroadUrl: "https://growai7.gumroad.com/l/qduzis?_gl=1*1km42e3*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzc4MzE3JGo3JGwwJGgw",
      popular: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      emoji: "🆓",
      title: "Starter Kit",
      subtitle: "The Free Taste That Hooks You",
      description: "Perfect if you're AI-curious or commitment-phobic:",
      price: "$0",
      originalPrice: "",
      priceNote: "yes, really — we double-checked",
      features: [
        "50 practical AI uses",
        "Beginner-friendly, no judgment",
        "Real-life examples so you're not guessing",
        "Quick-start guide for max momentum",
        "Instant access (because patience is overrated)"
      ],
      gumroadUrl: "#hero-email", // This will scroll to the email signup
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleProductClick = (product: any) => {
    if (product.gumroadUrl === "#hero-email") {
      // Scroll to the hero section email signup
      const heroSection = document.querySelector('section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Open email capture modal for paid products
      setEmailModal({
        isOpen: true,
        url: 'https://growai7.gumroad.com/l/lmgte?_gl=1*1p4e4rk*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzgwMTM2JGo2MCRsMCRoMA..',
        title: `Get ${product.title}`,
        price: '$49'
      });
    }
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted for product purchase:', email);
    // Here you would send the email to your email service with purchase intent
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your AI Growth Path
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From free starter guides to complete transformation bundles - find the perfect AI toolkit for your journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-3xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 shadow-xl hover:shadow-2xl' 
                  : 'bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl'
              } ${product.popular ? 'ring-2 ring-emerald-500' : ''}`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{product.emoji}</div>
                <h3 className={`text-lg font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  "{product.subtitle}"
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className={`text-lg line-through ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      was {product.originalPrice}
                    </span>
                  )}
                </div>
                <p className={`text-xs text-center ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  ({product.priceNote})
                </p>
              </div>
              
              <p className={`text-sm mb-4 font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-start text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Zap className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleProductClick(product)}
                className={`w-full py-3 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                  product.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600'
                    : darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                {product.price === '$0' ? 'Get Free Access' : 'Buy Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <EmailCapture
        isOpen={emailModal.isOpen}
        onClose={() => setEmailModal({ isOpen: false, url: '', title: '', price: '' })}
        onSubmit={handleEmailSubmit}
        darkMode={darkMode}
        title={emailModal.title}
        description={`Enter your email to proceed to checkout for ${emailModal.price}. We'll send you updates and bonus content!`}
        redirectUrl={emailModal.url}
      />
    </section>
  );
};

export default Products;