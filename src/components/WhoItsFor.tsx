import React from 'react';
import { Baby, BookOpen, Rocket, Calendar, Heart } from 'lucide-react';
import EmailCapture from './EmailCapture';

interface WhoItsForProps {
  darkMode: boolean;
}

const WhoItsFor: React.FC<WhoItsForProps> = ({ darkMode }) => {
  const [emailModal, setEmailModal] = React.useState({ isOpen: false, url: '', title: '' });

  const audiences = [
    {
      icon: Baby,
      title: 'Busy Parents',
      description: 'Streamline family life with AI-powered meal planning, activity ideas, and parenting support.',
      color: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:from-pink-600 hover:to-rose-600'
    },
    {
      icon: BookOpen,
      title: 'Lifelong Learners',
      description: 'Accelerate your learning with personalized study plans, research assistance, and skill development.',
      color: 'from-purple-500 to-indigo-500',
      hoverColor: 'hover:from-purple-600 hover:to-indigo-600'
    },
    {
      icon: Rocket,
      title: 'Side Hustle Builders',
      description: 'Launch and grow your business faster with AI tools for marketing, content, and automation.',
      color: 'from-emerald-500 to-teal-500',
      hoverColor: 'hover:from-emerald-600 hover:to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Organizers & Planners',
      description: 'Master your schedule, goals, and projects with intelligent planning and productivity systems.',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    },
    {
      icon: Heart,
      title: 'Faith-Driven Thinkers',
      description: 'Deepen your spiritual journey with AI-assisted scripture study, prayer, and reflection tools.',
      color: 'from-yellow-500 to-orange-500',
      hoverColor: 'hover:from-yellow-600 hover:to-orange-600'
    }
  ];

  const handleAudienceClick = (audience: any) => {
    setEmailModal({
      isOpen: true,
      url: 'https://growai7.gumroad.com/l/lmgte?_gl=1*1p4e4rk*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzgwMTM2JGo2MCRsMCRoMA..',
      title: `AI Tools for ${audience.title}`
    });
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted for audience access:', email);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Choose Your AI Growth Path (No Robots Required)
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you're after a quick win or a full-on glow-up,
            we've got AI kits to help you grow — without frying your brain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              onClick={() => handleAudienceClick(audience)}
              className={`group p-6 rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'bg-gray-900 shadow-xl hover:shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${audience.color} ${audience.hoverColor} flex items-center justify-center mb-6 transition-all duration-300`}>
                <audience.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {audience.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <EmailCapture
        isOpen={emailModal.isOpen}
        onClose={() => setEmailModal({ isOpen: false, url: '', title: '' })}
        onSubmit={handleEmailSubmit}
        darkMode={darkMode}
        title={emailModal.title}
        description="Enter your email to get instant access to our complete AI toolkit for just $49."
        redirectUrl={emailModal.url}
      />
    </section>
  );
};

export default WhoItsFor;