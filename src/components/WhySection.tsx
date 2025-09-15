import React from 'react';
import { Users, TrendingUp, Edit3 } from 'lucide-react';

interface WhySectionProps {
  darkMode: boolean;
}

const WhySection: React.FC<WhySectionProps> = ({ darkMode }) => {
  const cards = [
    {
      icon: Users,
      title: 'Business Owners',
      description: 'Scale your operations, automate workflows, and make data-driven decisions with AI-powered insights.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Side Hustlers',
      description: 'Launch and grow your side business faster with AI tools for marketing, customer service, and optimization.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Edit3,
      title: 'Content Creators',
      description: 'Generate engaging content, optimize for SEO, and build your audience with AI-powered creative tools.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why UseAIToGrow.com?
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you're building a business, launching a side hustle, or creating content, we have the AI tools you need to succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900 shadow-xl hover:shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6`}>
                <card.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </h3>
              <p className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;