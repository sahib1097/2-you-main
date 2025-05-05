import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import TextareaAutosize from 'react-textarea-autosize';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your 2You support assistant. How can I help you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! An agent will be with you shortly. In the meantime, feel free to check our FAQ section for quick answers.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-2xl">💬</span>
            </motion.button>
          </Dialog.Trigger>

          <AnimatePresence>
            {isOpen && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50"
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="fixed bottom-24 right-8 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                  >
                    <div className="p-4 bg-red-500 text-white flex justify-between items-center">
                      <h2 className="text-lg font-semibold">Live Support</h2>
                      <Dialog.Close asChild>
                        <button className="text-white hover:opacity-70">✕</button>
                      </Dialog.Close>
                    </div>

                    <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.sender === 'user'
                                ? 'bg-red-500 text-white rounded-br-none'
                                : 'bg-white text-black shadow-md rounded-bl-none'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs mt-1 opacity-70">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
                      <div className="flex gap-2">
                        <TextareaAutosize
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your message..."
                          maxRows={4}
                          className="flex-1 resize-none rounded-lg border border-gray-200 p-2 focus:outline-none focus:border-red-500 text-gray-500"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage(e);
                            }
                          }}
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
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </motion.div>
    </>
  );
}