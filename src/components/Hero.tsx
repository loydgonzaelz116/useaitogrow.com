import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Submit to Formspree
      fetch('https://formspree.io/f/xdkzwyyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'Hero Section - Free Guide',
          timestamp: new Date().toISOString()
        }),
      })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
          // Redirect to Gumroad after a short delay
          setTimeout(() => {
            window.open('https://growai7.gumroad.com/l/qxejbf?_gl=1*1ikownr*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcwJHQxNzUxNzc2MzkxJGo2MCRsMCRoMA..', '_blank');
          }, 1500);
        } else {
          console.error('Failed to submit email');
        }
      })
      .catch(error => {
        console.error('Error submitting email:', error);
      });
    }
  };

  return (
    <section className={`pt-24 pb-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">1,200+ Prompts Ready to Use</span>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Grow Your Life.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Not Just Your Inbox.
            </span>{' '}
          </h1>
          
          <div className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p className="mb-4">
              Want to use AI without feeling like you need a PhD or a panic attack?
            </p>
            <p className="mb-6">
              We've got tools that help you adult better, parent smarter, hustle harder — or just remember what day it is.
            </p>
            <p className="mb-8 font-medium">
              👇 Drop your email and we'll send you AI stuff that actually helps.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="📥 Your Email"
                className={`flex-1 px-6 py-4 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
                disabled={isSubmitted}
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg ${
                  isSubmitted ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitted ? 'Redirecting...' : "Let's Grow →"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className={`mb-6 p-4 rounded-2xl ${
              darkMode ? 'bg-emerald-900/30 border border-emerald-500/30' : 'bg-emerald-50 border border-emerald-200'
            }`}>
              <p className={`text-center font-medium ${
                darkMode ? 'text-emerald-300' : 'text-emerald-700'
              }`}>
                ✅ Success! Opening your free guide now...
              </p>
            </div>
          )}
          
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Free forever</span>
            </div>
            <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No spam</span>
            </div>
            <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;