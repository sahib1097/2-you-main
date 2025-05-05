import { motion } from 'framer-motion';

export function Navigation() {
  const sections = ['Help Hub', 'FAQs', 'Contact', 'Live Chat'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-primary font-bold text-2xl"
          >
            2You
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                className="text-dark hover:text-primary transition-colors"
                onClick={() => scrollToSection(section.toLowerCase().replace(' ', '-'))}
              >
                {section}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <input
              type="search"
              placeholder="Search help articles..."
              className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:border-primary focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}