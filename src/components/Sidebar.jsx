import React from 'react';
import { motion } from 'framer-motion';

function Sidebar({ setActiveTopic }) {
  const topics = [
    { name: 'JavaScript Fundamentals', icon: '📚' },
    { name: 'Functions & Scope', icon: '🔍' },
    { name: 'Objects & Arrays', icon: '📦' },
    { name: 'Async JavaScript', icon: '⏳' },
    { name: 'DOM Explorer', icon: '🌳' },
    { name: 'ES6 Features', icon: '🚀' },
    { name: 'Interactive Playground', icon: '🎮' },
    { name: 'Todo List', icon: '✅' },
  ];

  return (
    <aside className="w-full md:w-64 md:mr-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-8 md:mb-0">
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
          Topics
        </h2>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="w-full text-left p-3 rounded-md transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-indigo-700"
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

export default Sidebar;
