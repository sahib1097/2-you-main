import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

interface TicketFormState {
  name: string;
  username: string;
  email: string;
}

interface Message {
  type: 'bot' | 'user';
  text: string;
}

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');
  const [formState, setFormState] = useState<TicketFormState>({
    name: '',
    username: '',
    email: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);

  const quickReplies = [
    'Lost your Failsafe Password?',
    'VPN Issues?',
    'Billing Questions?',
    'Security Concerns?',
  ];

  const getPrefilledMessage = (issue: string) => {
    switch (issue) {
      case 'Lost your Failsafe Password?':
        return "I've lost my failsafe password";
      case 'VPN Issues?':
        return "I'm having an issue with VPN";
      case 'Billing Questions?':
        return "I am having a billing issue";
      case 'Security Concerns?':
        return "I have security concerns";
      default:
        return '';
    }
  };

  const getPromptByStep = (step: number, issue: string): string => {
    switch (step) {
      case 1:
        return "What's your name?";
      case 2:
        return "What's your 2You username?";
      case 3:
        return "What's your email address?";
      case 4:
        return `Thanks, ${formState.name}! We've received your ticket about "${issue}". Our support team will contact you shortly.`;
      default:
        return '';
    }
  };

  const handleQuickReplyClick = (reply: string) => {
    setSelectedIssue(reply);
    setIsOpen(true);
    setFormState({ name: '', username: '', email: '' });
    setCurrentStep(1);
    setMessages([{ type: 'bot', text: getPromptByStep(1, reply) }]);
  };

  const handleSubmit = (value: string) => {
    const updatedForm = { ...formState };

    if (currentStep === 1) updatedForm.name = value;
    if (currentStep === 2) updatedForm.username = value;
    if (currentStep === 3) updatedForm.email = value;

    setFormState(updatedForm);

    const newMessages: Message[] = [
      { type: 'user', text: value },
    ];

    if (currentStep < 4) {
      newMessages.push({
        type: 'bot',
        text: getPromptByStep(currentStep + 1, selectedIssue),
      });
    }

    setMessages(prev => [...prev, ...newMessages]);
    setCurrentStep(prev => prev + 1);
  };

  return (
    <section className="text-black pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-black mb-8"
        >
          We've Got Your Back
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {quickReplies.map((reply, index) => (
            <motion.button
              key={reply}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg text-dark hover:text-primary transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => handleQuickReplyClick(reply)}
            >
              {reply}
            </motion.button>
          ))}
        </motion.div>

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-lg shadow-xl">
              <div className="p-4 bg-red-500 text-white flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">Support Ticket</h2>
                <Dialog.Close className="text-white hover:opacity-70">✕</Dialog.Close>
              </div>

              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : ''}`}
                    >
                      <div
                        className={`p-3 rounded-lg max-w-xs ${
                          msg.type === 'bot'
                            ? 'bg-red-500 text-white rounded-bl-none'
                            : 'bg-white text-black shadow-md rounded-br-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {currentStep === 4 && (
                    <div className="bg-green-500 text-white p-3 rounded-lg text-center mt-4">
                      Ticket submitted successfully! We'll get back to you soon.
                    </div>
                  )}
                </div>
              </div>

              {currentStep <= 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                    if (!input.value.trim()) return;
                    handleSubmit(input.value.trim());
                    input.value = '';
                  }}
                  className="p-4 bg-white border-t"
                >
                  <div className="flex gap-2">
                    <input
                      type={currentStep === 3 ? 'email' : 'text'}
                      placeholder="Type your response..."
                      className="flex-1 rounded-lg border text-gray-500 border-gray-200 p-2 focus:outline-none focus:border-primary"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                    >
                      Send
                    </motion.button>
                  </div>
                </form>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-20"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-red-500">24/7</h3>
              <p className="text-dark">Live Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-red-500">1m+</h3>
              <p className="text-dark">Users Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-red-500">99%</h3>
              <p className="text-dark">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
