import React from 'react';
import { motion } from 'framer-motion';

function HTMLSidebar({ setActiveTopic, activeTopic }) {
  const topics = [
    { name: 'Introduction to HTML', icon: '🏠' },
    { name: 'Document Structure', icon: '🏗️' },
    { name: 'Text Elements', icon: '📝' },
    { name: 'Links and Navigation', icon: '🔗' },
    { name: 'Images and Multimedia', icon: '🖼️' },
    { name: 'Lists and Tables', icon: '📊' },
    { name: 'Forms and Input', icon: '📋' },
    { name: 'Semantic Elements', icon: '🏷️' },
    { name: 'HTML5 Features', icon: '✨' },
    { name: 'Accessibility', icon: '♿' },
    { name: 'Meta Tags and SEO', icon: '🔍' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'Best Practices', icon: '✅' },
    { name: 'HTML and CSS', icon: '🎨' },
    { name: 'HTML and JavaScript', icon: '⚡' },
  ];

  return (
    <aside className="w-64 mr-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 overflow-y-auto max-h-screen">
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          HTML Topics
        </h2>
        <ul>
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`w-full text-left p-3 mb-2 rounded-md transition-colors duration-200 ${
                  activeTopic === index
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-100 dark:hover:bg-blue-700'
                }`}
                onClick={() => setActiveTopic(index)}
              >
                <span className="mr-2">{topic.icon}</span>
                {topic.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </aside>
  );
}

export default HTMLSidebar;