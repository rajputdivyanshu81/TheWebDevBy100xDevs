import React from 'react';
import { motion } from 'framer-motion';

function HTMLSidebar({ setActiveTopic }) {
  const topics = [
    { name: 'Introduction to HTML', icon: '🏠' },
    { name: 'HTML Elements', icon: '🔖' },
    { name: 'HTML Attributes', icon: '🏷️' },
    { name: 'HTML Forms', icon: '✍️' },
    { name: 'Semantic HTML', icon: '📘' },
    { name: 'Multimedia Elements', icon: '🎬' },
    { name: 'HTML5 Features', icon: '✨' },
    { name: 'Best Practices', icon: '✅' },
  ];

  return (
    <aside className="w-64 mr-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
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
                className="w-full text-left p-3 mb-2 rounded-md transition-colors duration-200 hover:bg-red-100 dark:hover:bg-red-700"
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
