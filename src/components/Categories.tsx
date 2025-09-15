import React, { useState } from 'react';
import { Baby, ChefHat, Heart, BookOpen, Activity, DollarSign, MessageCircle, Calendar, Bot, TrendingUp, Search } from 'lucide-react';
import EmailCapture from './EmailCapture';

interface CategoriesProps {
  darkMode: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [emailModal, setEmailModal] = useState({ isOpen: false, url: '', title: '' });
  
  const categories = [
    { icon: Baby, title: 'Family Life & Parenting', count: '80+ Prompts', color: 'from-pink-500 to-rose-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: ChefHat, title: 'Meal Planning & Home Life', count: '75+ Prompts', color: 'from-orange-500 to-red-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: Heart, title: 'Faith, Scripture & Spiritual Growth', count: '60+ Prompts', color: 'from-purple-500 to-indigo-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: BookOpen, title: 'Journaling & Mindset', count: '90+ Prompts', color: 'from-blue-500 to-cyan-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: Activity, title: 'Health & Wellness', count: '65+ Prompts', color: 'from-green-500 to-emerald-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: DollarSign, title: 'Side Hustles & Monetization', count: '85+ Prompts', color: 'from-emerald-500 to-teal-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: MessageCircle, title: 'Relationships & Communication', count: '55+ Prompts', color: 'from-rose-500 to-pink-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: Calendar, title: 'Life Planning & Organization', count: '70+ Prompts', color: 'from-indigo-500 to-purple-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: Bot, title: 'AI Agents & Personal Assistants', count: '45+ Prompts', color: 'from-cyan-500 to-blue-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' },
    { icon: TrendingUp, title: 'Business Growth & Automation', count: '95+ Prompts', color: 'from-yellow-500 to-orange-500', gumroadUrl: 'https://growaif.gumroad.com/l/uhuqh' }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category: any) => {
    setEmailModal({
      isOpen: true,
      url: 'https://growai7.gumroad.com/l/lmgte?_gl=1*1p4e4rk*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzgwMTM2JGo2MCRsMCRoMA..',
      title: `Access ${category.title} Prompts`
    });
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted for category access:', email);
    // Here you would send the email to your email service
  };
  return (
    <section id="categories" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Categories
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore our comprehensive collection of AI prompts organized by life areas. Find exactly what you need to make your daily life easier and more productive.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`group p-6 rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750 shadow-xl hover:shadow-2xl' 
                  : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-xl'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <p className={`text-sm font-medium ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {category.count}
              </p>
            </div>
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No categories found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
      
      <EmailCapture
        isOpen={emailModal.isOpen}
        onClose={() => setEmailModal({ isOpen: false, url: '', title: '' })}
        onSubmit={handleEmailSubmit}
        darkMode={darkMode}
        title={emailModal.title}
        description="Enter your email to get instant access to these AI prompts."
        redirectUrl={emailModal.url}
      />
    </section>
  );
};

export default Categories;