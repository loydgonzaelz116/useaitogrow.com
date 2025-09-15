import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Copy, Check } from 'lucide-react';

interface TopPromptsProps {
  darkMode: boolean;
}

const TopPrompts: React.FC<TopPromptsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const prompts = [
    {
      title: "Weekly Meal Planner",
      category: "Meal Planning",
      description: "Create a personalized weekly meal plan based on dietary preferences, budget, and family size.",
      prompt: "Create a 7-day meal plan for a family of 4 with a $150 budget, including 2 vegetarian meals and 1 slow-cooker recipe. Include a shopping list organized by store section.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Bedtime Story Creator",
      category: "Parenting",
      description: "Generate personalized bedtime stories featuring your child as the main character.",
      prompt: "Write a 5-minute bedtime story about [child's name], age [age], who loves [favorite animal/hobby]. Include a gentle lesson about kindness and make it magical but calming.",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Daily Reflection Journal",
      category: "Mindset",
      description: "Structure meaningful daily reflection with guided questions for personal growth.",
      prompt: "Create 5 thoughtful reflection questions for today focusing on gratitude, lessons learned, and tomorrow's intentions. Make them personal and growth-oriented.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Side Hustle Validator",
      category: "Business",
      description: "Analyze and validate your side hustle idea with market research and action steps.",
      prompt: "Analyze my side hustle idea: [describe idea]. Provide market validation, potential challenges, target audience, and 3 specific next steps to test viability.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Scripture Study Guide",
      category: "Faith",
      description: "Create personalized Bible study plans with reflection questions and practical applications.",
      prompt: "Create a 7-day study guide for [Bible verse/passage]. Include daily reflection questions, practical applications, and prayer prompts for deeper understanding.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Workout Routine Builder",
      category: "Health",
      description: "Design custom workout plans based on your fitness level, goals, and available time.",
      prompt: "Create a 4-week workout plan for [fitness level] focusing on [goals] with [time available] per session. Include progression and modification options.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Email Response Templates",
      category: "Communication",
      description: "Generate professional yet warm email templates for common situations.",
      prompt: "Write 3 email templates for [situation]: one formal, one casual, and one for difficult conversations. Keep them authentic and relationship-focused.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Monthly Budget Optimizer",
      category: "Finance",
      description: "Analyze spending patterns and create actionable budget improvements.",
      prompt: "Review my monthly expenses: [list expenses]. Identify 5 optimization opportunities and create a realistic savings plan without sacrificing quality of life.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Learning Path Creator",
      category: "Education",
      description: "Design structured learning plans for any skill with milestones and resources.",
      prompt: "Create a 90-day learning plan for [skill/topic]. Include weekly milestones, recommended resources, practice exercises, and progress tracking methods.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Relationship Check-in Guide",
      category: "Relationships",
      description: "Facilitate meaningful conversations with structured questions for deeper connection.",
      prompt: "Create 10 thoughtful questions for a monthly relationship check-in covering appreciation, concerns, goals, and fun plans. Make them conversation starters, not interrogation.",
      color: "from-rose-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [prompts.length]);

  const nextPrompt = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };

  const prevPrompt = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + prompts.length) % prompts.length);
  };

  const copyPrompt = async (prompt: string, index: number) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  return (
    <section id="prompts" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Top 10 Prompts of the Week
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our greatest hits — like Spotify Wrapped, but for people trying to get their life together with AI.
          </p>
          <p className={`text-lg mt-2 font-medium ${
            darkMode ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            New prompt every 8 seconds. Blink and you'll miss greatness.
          </p>
        </div>
        
        <div className="relative">
          <div className={`p-8 md:p-12 rounded-3xl transition-all duration-500 ${
            darkMode 
              ? 'bg-gray-900 shadow-2xl' 
              : 'bg-white shadow-xl'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${prompts[currentIndex].color}`}>
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">{prompts[currentIndex].category}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevPrompt}
                  className={`p-3 rounded-full transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } shadow-md`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextPrompt}
                  className={`p-3 rounded-full transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } shadow-md`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {prompts[currentIndex].title}
            </h3>
            
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {prompts[currentIndex].description}
            </p>
            
            <div className={`p-6 rounded-2xl border-2 border-dashed ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between">
                <p className={`text-sm font-mono leading-relaxed flex-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {prompts[currentIndex].prompt}
                </p>
                <button
                  onClick={() => copyPrompt(prompts[currentIndex].prompt, currentIndex)}
                  className={`ml-4 p-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-white hover:bg-gray-100 text-gray-900'
                  } shadow-sm`}
                >
                  {copiedIndex === currentIndex ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {prompts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-emerald-500'
                    : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPrompts;