import React, { useState } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';

interface EmailCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  darkMode: boolean;
  title?: string;
  description?: string;
  redirectUrl?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  darkMode, 
  title = "Get Instant Access",
  description = "Enter your email to access this content immediately.",
  redirectUrl 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      
      try {
        // Submit to Formspree
        const response = await fetch('https://formspree.io/f/xdkzwyyn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            source: title || 'Category Access',
            timestamp: new Date().toISOString(),
            redirectUrl: redirectUrl
          }),
        });
        
        if (response.ok) {
          onSubmit(email);
          
          // Redirect after email submission
          if (redirectUrl) {
            setTimeout(() => {
              window.open(redirectUrl, '_blank');
              onClose();
              setEmail('');
              setIsSubmitting(false);
            }, 1500);
          } else {
            setTimeout(() => {
              onClose();
              setEmail('');
              setIsSubmitting(false);
            }, 1000);
          }
        } else {
          console.error('Failed to submit email');
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        description="Enter your email to get instant access to our complete AI bundle for just $49. Includes all 1,200+ prompts!"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md p-8 rounded-3xl shadow-2xl ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <X className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </button>
        
        <div className="text-center mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-4`}>
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h3 className={`text-2xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          
          <p className={`${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
            }`}
            required
            disabled={isSubmitting}
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Get Instant Access'}
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
        
        <div className="flex justify-center items-center space-x-6 text-xs mt-4">
          <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span>No spam</span>
          </div>
          <div className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span>Instant access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;