import React from 'react';
import { Brain, Twitter, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Use AI to grow...</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your smart best friend for practical AI that makes everyday life easier, more organized, and more fulfilling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Life Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family & Parenting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meal Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faith & Spirituality</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Journaling & Mindset</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Growth Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Side Hustles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Growth</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Life Organization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Relationships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Learning & Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Use AI to grow... Made with <Heart className="h-4 w-4 text-red-400" /> for families and dreamers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;