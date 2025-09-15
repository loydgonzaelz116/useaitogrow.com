import React from 'react';
import { TrendingUp, MessageCircle, Search, ShoppingCart, Calendar, FileText } from 'lucide-react';

interface UseCasesProps {
  darkMode: boolean;
}

const UseCases: React.FC<UseCasesProps> = ({ darkMode }) => {
  const useCases = [
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'AI-powered strategies to identify new revenue streams and optimize pricing models for maximum profitability.',
      category: 'Business Growth',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Customer Support Automation',
      description: 'Deploy intelligent chatbots and automated responses to handle 80% of customer inquiries instantly.',
      category: 'Automation',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Search,
      title: 'SEO Content Generation',
      description: 'Create high-ranking, SEO-optimized content that drives organic traffic and converts visitors into customers.',
      category: 'Content Creation',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Personalization',
      description: 'Implement AI-driven product recommendations and personalized shopping experiences to boost sales.',
      category: 'E-commerce',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Social Media Scheduling',
      description: 'Automate your social media presence with AI-generated content and optimal posting schedules.',
      category: 'Marketing',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: FileText,
      title: 'Business Report Generation',
      description: 'Generate comprehensive business reports and insights automatically from your data sources.',
      category: 'AI Tools',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="use-cases" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Top Use Cases of the Week
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover the most powerful AI applications that are transforming businesses right now.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900 shadow-xl hover:shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6`}>
                <useCase.icon className="h-8 w-8 text-white" />
              </div>
              <div className={`text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {useCase.category}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {useCase.title}
              </h3>
              <p className={`text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;