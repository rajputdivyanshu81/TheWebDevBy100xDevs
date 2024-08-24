// src/components/ES6Features.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ES6Features() {
  const [activeFeature, setActiveFeature] = useState('let-const');

  const features = ['let-const', 'template-literals', 'destructuring', 'spread-operator'];

  const featureDetails = {
    'let-const': {
      title: 'let and const',
      description: 'let allows block-scoped variables, while const declares constants that cannot be reassigned.',
      code: `let x = 1;
x = 2; // Allowed

const y = 1;
// y = 2; // Error: Assignment to a constant variable`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-lg p-4">
          <div className="flex space-x-4">
            <motion.div
              className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              let
            </motion.div>
            <motion.div
              className="w-20 h-20 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              const
            </motion.div>
          </div>
        </div>
      )
    },
    'template-literals': {
      title: 'Template Literals',
      description: 'Template literals allow embedded expressions and multi-line strings.',
      code: `const name = "Alice";
console.log(\`Hello, \${name}!\`); // Outputs: Hello, Alice!

const multiLine = \`
  This is a
  multi-line
  string
\`;`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg p-4">
          <motion.div
            className="bg-green-500 rounded-lg p-4 text-white font-bold"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            `Hello, ${'{name}'}!`
          </motion.div>
        </div>
      )
    },
    'destructuring': {
      title: 'Destructuring',
      description: 'Destructuring allows unpacking values from arrays or properties from objects into distinct variables.',
      code: `const person = { name: "John", age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg p-4">
          <motion.div
            className="flex space-x-2"
            animate={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {'{'}
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              [
            </div>
          </motion.div>
        </div>
      )
    },
    'spread-operator': {
      title: 'Spread Operator',
      description: 'The spread operator allows an iterable to be expanded in places where zero or more arguments or elements are expected.',
      code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg p-4">
          <motion.div
            className="text-4xl font-bold text-purple-600 dark:text-purple-300"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ...
          </motion.div>
        </div>
      )
    }
  };

  return (
    <section id="es6-features" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">ES6+ Features</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap mb-6">
          {features.map((feature) => (
            <button
              key={feature}
              className={`mr-4 mb-2 px-4 py-2 rounded-full ${
                activeFeature === feature
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
              onClick={() => setActiveFeature(feature)}
            >
              {featureDetails[feature].title}
            </button>
          ))}
        </div>
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{featureDetails[activeFeature].title}</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{featureDetails[activeFeature].description}</p>
          <div className="mb-6">{featureDetails[activeFeature].visual}</div>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-gray-200">{featureDetails[activeFeature].code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

export default ES6Features;