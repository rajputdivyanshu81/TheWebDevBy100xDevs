// src/components/JavaScriptConcepts.jsx
import React from 'react';
import { motion } from 'framer-motion';
import JavaScriptFundamentals from './JavaScriptFundamentals';
import FunctionsAndScope from './FunctionsAndScope';
import DOMExplorer from './DOMExplorer';

function JavaScriptConcepts() {
  return (
    <section id="javascript-concepts" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">JavaScript Concepts</h2>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
              
      </motion.div>
      <JavaScriptFundamentals /> 
        <FunctionsAndScope />  
        <DOMExplorer />
    </section>
  );
}

export default JavaScriptConcepts;