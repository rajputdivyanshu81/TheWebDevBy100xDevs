// src/components/InteractivePlayground.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function InteractivePlayground() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <section id="interactive-playground" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Interactive Playground</h2>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <textarea
          className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Write your JavaScript code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleRun}
        >
          This feature will be  working soon...
        </button>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-4">
          {output || 'Output will appear here...'}
        </pre>
      </motion.div>
    </section>
  );
}

export default InteractivePlayground;
