import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How do I reset my Failsafe Password?",
      answer: "To reset your Failsafe Password, go to Settings > Security > Failsafe Password and click 'Reset'. Follow the verification steps sent to your backup email.",
      category: "security"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum).",
      category: "billing"
    },
    {
      question: "How do I enable disappearing messages?",
      answer: "Open any chat, tap the chat name at the top, select 'Disappearing Messages' and choose your preferred timer duration.",
      category: "privacy"
    },
    {
      question: "Can I use 2You on multiple devices?",
      answer: "Yes! You can use 2You on up to 5 devices simultaneously. Simply download the app and sign in with your account.",
      category: "general"
    }
  ];

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <input
            type="search"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-gray-500 w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
          />
        </motion.div>

        <AnimatePresence>
          {filteredFAQs.map((item) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                onClick={() => setExpandedId(expandedId === item.question ? null : item.question)}
                className="text-black w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-dark">{item.question}</h3>
                  <motion.span
                    animate={{ rotate: expandedId === item.question ? 180 : 0 }}
                    className="text-2xl"
                  >
                    ↓
                  </motion.span>
                </div>

                <AnimatePresence>
                  {expandedId === item.question && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-600"
                    >
                      <p>{item.answer}</p>
                      <div className="mt-4 flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Was this helpful?</span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                        >
                          ✅
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                        >
                          😕
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}