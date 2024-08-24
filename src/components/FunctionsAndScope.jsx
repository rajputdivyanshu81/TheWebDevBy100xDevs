import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FunctionsAndScope() {
  const [output, setOutput] = useState({
    functionDeclaration: '',
    functionExpression: '',
    arrowFunction: '',
    scopeExample: ''
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
    functionDeclaration: `
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!
    `,
    functionExpression: `
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // Outputs: 20
    `,
    arrowFunction: `
const square = (x) => x * x;

console.log(square(5)); // Outputs: 25
    `,
    scopeExample: `
let globalVar = "I'm global";

function exampleFunction() {
  let functionVar = "I'm function-scoped";
  
  if (true) {
    let blockVar = "I'm block-scoped";
    var functionScopedVar = "I'm function-scoped too";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar); // Accessible
  }
  
  console.log(functionScopedVar); // Accessible
  console.log(blockVar); // ReferenceError: blockVar is not defined
}

exampleFunction();
console.log(globalVar); // Accessible
console.log(functionVar); // ReferenceError: functionVar is not defined
    `,
  };

  return (
    <section id="functions-and-scope" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Functions and Scope</h2>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Function Declarations */}
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Function Declarations</h3>
        <p className="mb-4">A function declaration is a standard way to define a function. It can be called before it's defined, thanks to JavaScript's hoisting behavior.</p>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.functionDeclaration}</code>
        </pre>
        <button 
          onClick={() => runCode('functionDeclaration', codeExamples.functionDeclaration)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          Run Code
        </button>

        {/* Console Output */}
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-auto">
          <code className="text-sm">
            {output.functionDeclaration || 'Click "Run Code" to see the output here.'}
          </code>
        </pre>

        {/* Function Expressions */}
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Function Expressions</h3>
        <p className="mb-4">A function expression defines a function as part of a larger expression, like assigning it to a variable. Unlike declarations, these are not hoisted.</p>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.functionExpression}</code>
        </pre>
        <button 
          onClick={() => runCode('functionExpression', codeExamples.functionExpression)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          Run Code
        </button>

        {/* Console Output */}
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-auto">
          <code className="text-sm">
            {output.functionExpression || 'Click "Run Code" to see the output here.'}
          </code>
        </pre>

        {/* Arrow Functions */}
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Arrow Functions</h3>
        <p className="mb-4">Arrow functions provide a shorter syntax and don't bind their own `this` value, making them ideal for certain scenarios, like methods or callbacks.</p>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-4 overflow-auto">
          <code>{codeExamples.arrowFunction}</code>
        </pre>
        <button 
          onClick={() => runCode('arrowFunction', codeExamples.arrowFunction)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          Run Code
        </button>

        {/* Console Output */}
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-auto">
          <code className="text-sm">
            {output.arrowFunction || 'Click "Run Code" to see the output here.'}
          </code>
        </pre>

        {/* Scope */}
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Scope</h3>
        <p className="mb-4">JavaScript has function scope and block scope (with `let` and `const`). Understanding scope is crucial for avoiding unintended variable access or modifications.</p>
        <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-auto">
          <code>{codeExamples.scopeExample}</code>
        </pre>
        <button 
          onClick={() => runCode('scopeExample', codeExamples.scopeExample)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          Run Code
        </button>

        {/* Console Output */}
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-auto">
          <code className="text-sm">
            {output.scopeExample || 'Click "Run Code" to see the output here.'}
          </code>
        </pre>
      </motion.div>
    </section>
  );
}

export default FunctionsAndScope;
