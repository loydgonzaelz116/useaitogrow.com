import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is Use AI to grow...?",
      answer: "It's your personal AI growth toolbox. We give you simple, powerful AI prompts and tools to help you live better — not just work more. From parenting and focus to business growth and inbox freedom."
    },
    {
      question: "Do I need to be \"techy\" to use this?",
      answer: "Nope. If you can copy, paste, and breathe, you're qualified. We built this for regular humans — not AI engineers in lab coats."
    },
    {
      question: "Is this just for business stuff, or can I use it in real life too?",
      answer: "Oh, it's for real life. We've got prompts to help you meal plan, parent with sanity, fight distractions, write that awkward text, and yes — build your side hustle too."
    },
    {
      question: "How many prompts do I actually get?",
      answer: "You get access to 1,200+ prompts, and we're adding more regularly. It's like a buffet, but for your brain."
    },
    {
      question: "Why is this better than just asking ChatGPT myself?",
      answer: "Because we already did the heavy lifting. These prompts are designed, tested, and refined to unlock real, repeatable results — fast. You don't have to guess what to type or how to ask it. You just copy, paste, and watch things click.",
      highlight: {
        title: "⚠️ Prompt Power Note",
        content: "These prompts are designed for maximum impact — but like any great tool, a little tuning goes a long way.\n\n🧠 Quick Wins:\n• Swap generic words for your actual context (your biz, your life)\n• Ask ChatGPT: \"Improve this for clarity / tone / edge\"\n• Don't stop at one response — dig deeper, iterate, follow-up\n\nThis isn't a flaw — it's the secret to mastery.\nGreat prompts spark action. Great users spark transformation.\nLet's build yours together."
      }
    },
    {
      question: "Will AI take over my life?",
      answer: "Only if you let it. We're here to help you use AI intentionally — not get sucked into a black hole of productivity hacks and existential dread."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes. If you're not happy, we're not either. Just email us and we'll make it right — no guilt trip, no weird questionnaire asking if you've \"tried using it with a better attitude.\""
    },
    {
      question: "Can this help me stay off Instagram and finally finish my to-do list?",
      answer: "We can't promise miracles, but… yes. We have prompts for focus, digital detoxing, and breaking up with your phone (emotionally, not physically)."
    },
    {
      question: "Do you have a community? Or am I just on my own with all these prompts?",
      answer: "You're not alone. We've got a growing crew of people just like you inside the community. Less noise, more growth. And no random dude trying to sell you crypto."
    },
    {
      question: "Can I use this with my team or family?",
      answer: "Absolutely. In fact, we recommend it. Growth is contagious — in a good way."
    },
    {
      question: "I already have ChatGPT. Why would I need this?",
      answer: "Having ChatGPT without strong prompts is like owning a Ferrari but not knowing how to drive. We give you the keys, the map, and some nitro boosts."
    },
    {
      question: "Do you accept payment in snacks or dad jokes?",
      answer: "Sadly, not yet. But feel free to send them anyway — especially if they're peanut butter-based or truly punbelievable."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently Asked Questions
          </h2>
          
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The real questions people ask (and our honest answers)
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-900 shadow-lg' 
                  : 'bg-white shadow-md'
              } ${openIndex === index ? 'shadow-xl' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                } rounded-2xl`}
              >
                <h3 className={`text-lg font-bold pr-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  ❓ {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className={`h-5 w-5 flex-shrink-0 ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-500'
                  }`} />
                ) : (
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className={`text-base leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {faq.answer}
                  </p>
                  
                  {faq.highlight && (
                    <div className={`p-6 rounded-2xl border-l-4 ${
                      darkMode 
                        ? 'bg-blue-900/30 border-blue-500' 
                        : 'bg-blue-50 border-blue-500'
                    }`}>
                      <div className={`font-bold mb-3 ${
                        darkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>
                        {faq.highlight.title}
                      </div>
                      <div className={`text-sm leading-relaxed whitespace-pre-line ${
                        darkMode ? 'text-blue-200' : 'text-blue-600'
                      }`}>
                        {faq.highlight.content}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className={`text-lg mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Still have questions? We're humans, not bots.
          </p>
          <button
            onClick={() => window.open('mailto:hello@useaitogrow.com', '_blank')}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
              darkMode 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
          >
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;