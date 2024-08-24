import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ObjectsAndArrays() {
  const [output, setOutput] = useState({
    objects: '',
    arrays: '',
    arrayMethods: ''
  });

  const runCode = (codeKey, code) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const iframeWindow = iframe.contentWindow;
    const iframeConsoleLog = iframeWindow.console.log;

    let consoleOutput = '';
    iframeWindow.console.log = function (...args) {
      consoleOutput += args.join(' ') + '\n';
      iframeConsoleLog.apply(this, args);
    };

    try {
      iframeWindow.eval(code);
    } catch (error) {
      consoleOutput += `Error: ${error.message}\n`;
    }

    setOutput(prevOutput => ({
      ...prevOutput,
      [codeKey]: consoleOutput
    }));

    document.body.removeChild(iframe);
  };

  const codeExamples = {
    objects: `
const person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello, I'm " + this.name;
  }
};

console.log(person.name); // Outputs: John
console.log(person.greet()); // Outputs: Hello, I'm John
    `,
    arrays: `
const fruits = ["apple", "banana", "orange"];

console.log(fruits[1]); // Outputs: banana
fruits.push("grape");
console.log(fruits.length); // Outputs: 4
    `,
    arrayMethods: `
const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// Filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Outputs: [2, 4]

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs: 15
    `,
  };

  return (
    <section id="objects-and-arrays" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Objects and Arrays</h2>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Objects */}
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Objects</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.objects}</code>
        </pre>
        <button 
          onClick={() => runCode('objects', codeExamples.objects)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Run Code
        </button>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{output.objects}</code>
        </pre>

        {/* Arrays */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-green-700 dark:text-green-400">Arrays</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.arrays}</code>
        </pre>
        <button 
          onClick={() => runCode('arrays', codeExamples.arrays)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Run Code
        </button>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{output.arrays}</code>
        </pre>

        {/* Array Methods */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-green-700 dark:text-green-400">Array Methods</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.arrayMethods}</code>
        </pre>
        <button 
          onClick={() => runCode('arrayMethods', codeExamples.arrayMethods)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Run Code
        </button>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{output.arrayMethods}</code>
        </pre>
      </motion.div>
    </section>
  );
}

export default ObjectsAndArrays;
