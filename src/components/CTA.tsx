import React, { useState } from 'react';
import { ArrowRight, Sparkles, Gift, Users, Zap } from 'lucide-react';

interface CTAProps {
  darkMode: boolean;
}

const CTA: React.FC<CTAProps> = ({ darkMode }) => {
  const [email, setEmail] = useState('');

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
          source: 'CTA Section - Newsletter',
          timestamp: new Date().toISOString()
        }),
      })
      .then(response => {
        if (response.ok) {
          setEmail('');
          // You could show a success message here
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
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute top-32 right-16 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-16 left-20 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full backdrop-blur-sm">
                <Gift className="h-5 w-5" />
                <span className="font-semibold">1,200+ Prompts Available Now</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Growing with AI Today
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant access to our complete collection of AI prompts. Transform your daily life with practical AI that actually works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <button
                onClick={() => window.open('https://growai7.gumroad.com/l/lmgte?_gl=1*fnkhi8*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzc4MjY4JGo1NiRsMCRoMA..', '_blank')}
                className="flex-1 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Complete Bundle - $49
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('https://growai7.gumroad.com/l/uhuqh?_gl=1*1u8hn79*_ga*MzQ2OTU0OTQ3LjE3NDk3NzE4NDQ.*_ga_6LJN6D94N6*czE3NTE3NzYzOTEkbzEzJGcxJHQxNzUxNzc4MjgxJGo0MyRsMCRoMA..', '_blank')}
                className="flex-1 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                By Category - $89
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">1,200+ Prompts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-blue-300" />
                <span className="font-medium">Instant Download</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-emerald-300" />
                <span className="font-medium">Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;