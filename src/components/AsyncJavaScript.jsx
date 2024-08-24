// src/components/AsyncJavaScript.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AsyncJavaScript() {
  const [activeTab, setActiveTab] = useState('callbacks');

  const tabs = ['callbacks', 'promises', 'async/await'];

  const examples = {
    callbacks: {
      title: 'Callbacks',
      description: 'Callbacks are functions passed as arguments to other functions, to be executed once an operation is complete.',
      code: `function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000);
}

fetchData((result) => {
  console.log(result); // Outputs after 2 seconds: Data fetched
});`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg p-4">
          <div className="text-center">
            <div className="mb-2">Function</div>
            <motion.div
              className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              Callback
            </motion.div>
          </div>
        </div>
      )
    },
    promises: {
      title: 'Promises',
      description: 'Promises represent the eventual completion or failure of an asynchronous operation, allowing for more structured code.',
      code: `const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 2000);
});

fetchDataPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg p-4">
          <motion.div
            className="w-32 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Promise
          </motion.div>
        </div>
      )
    },
    'async/await': {
      title: 'Async/Await',
      description: 'Async/Await provides a more synchronous-looking syntax for working with asynchronous code, built on top of promises.',
      code: `async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();`,
      visual: (
        <div className="flex items-center justify-center h-40 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg p-4">
          <div className="space-y-2">
            <motion.div
              className="w-32 h-8 bg-purple-500 rounded flex items-center justify-center text-white font-bold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              async
            </motion.div>
            <motion.div
              className="w-32 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              await
            </motion.div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="async-javascript" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Asynchronous JavaScript</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mr-4 px-4 py-2 rounded-full ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{examples[activeTab].title}</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{examples[activeTab].description}</p>
          <div className="mb-6">{examples[activeTab].visual}</div>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-gray-200">{examples[activeTab].code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

export default AsyncJavaScript;