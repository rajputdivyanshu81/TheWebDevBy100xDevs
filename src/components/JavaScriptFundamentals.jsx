import React, { useState } from 'react';
import { motion } from 'framer-motion';

function JavaScriptFundamentals({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('variables');
  const [consoleOutput, setConsoleOutput] = useState([]);

  const sections = [
    { id: 'variables', label: 'Variables & Data Types' },
    { id: 'operators', label: 'Operators' },
    { id: 'controlFlow', label: 'Control Flow' },
  ];

  const runCode = (code) => {
    const oldLog = console.log;
    const outputs = [];
    console.log = (...args) => {
      outputs.push(args.join(' '));
    };
    
    try {
      // Using eval here for demonstration. In a real app, use a safer alternative.
      eval(code);
    } catch (error) {
      outputs.push(`Error: ${error.message}`);
    }
    
    console.log = oldLog;
    setConsoleOutput(outputs);
  };

  const codeExamples = {
    variables: `
// Let's explore JavaScript variables and data types

// Number
let age = 25;
console.log("Age:", age);

// String
let name = "Alice";
console.log("Name:", name);

// Boolean
let isStudent = true;
console.log("Is student?", isStudent);

// Undefined
let score;
console.log("Score:", score);

// Null
let empty = null;
console.log("Empty:", empty);

// Symbol
let id = Symbol('id');
console.log("Symbol:", id.toString());

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("Big number:", bigNumber);

// Object
let person = { name: "Bob", age: 30 };
console.log("Person:", person);

// Array
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);
    `,
    operators: `
// Let's explore JavaScript operators

// Arithmetic operators
console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("6 * 7 =", 6 * 7);
console.log("20 / 4 =", 20 / 4);
console.log("15 % 4 =", 15 % 4);
console.log("2 ** 3 =", 2 ** 3);

// Comparison operators
console.log("5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');
console.log("10 != '10':", 10 != '10');
console.log("10 !== '10':", 10 !== '10');
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);

// Logical operators
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);

// Assignment operators
let x = 10;
x += 5;
console.log("x after x += 5:", x);
x -= 3;
console.log("x after x -= 3:", x);
x *= 2;
console.log("x after x *= 2:", x);
x /= 4;
console.log("x after x /= 4:", x);
    `,
    controlFlow: `
// Let's explore JavaScript control flow

// If-else statement
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day");
}

// For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i + 1}\`);
}

// While loop
console.log("While loop:");
let count = 0;
while (count < 3) {
  console.log(\`Count: \${count}\`);
  count++;
}

// Do-while loop
console.log("Do-while loop:");
let num = 1;
do {
  console.log(\`Number: \${num}\`);
  num *= 2;
} while (num < 10);
    `,
  };

  return (
    <section id="javascript-fundamentals" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>JavaScript Fundamentals</h2>
        </div>
        <motion.div
          className={`rounded-lg shadow-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex mb-6 space-x-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  activeSection === section.id
                    ? `${darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'}`
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
              {sections.find(section => section.id === activeSection).label}
            </h3>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <pre className="text-sm overflow-x-auto">
                <code className={darkMode ? 'text-gray-300' : 'text-gray-800'}>{codeExamples[activeSection]}</code>
              </pre>
            </div>
          </motion.div>
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 rounded-full font-semibold ${
                darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
              onClick={() => runCode(codeExamples[activeSection])}
            >
              Run Code
            </button>
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Console Output:</h4>
            <pre className="text-sm overflow-x-auto">
              <code className={darkMode ? 'text-gray-300' : 'text-gray-800'}>
                {consoleOutput.length > 0 ? consoleOutput.join('\n') : 'Click "Run Code" to see the output here.'}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JavaScriptFundamentals;