import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function DOMExplorer() {
  const [selectedAPI, setSelectedAPI] = useState(null);
  const [result, setResult] = useState('');
  const [domTree, setDomTree] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    initializeDom();
  }, []);

  const initializeDom = () => {
    if (domRef.current) {
      domRef.current.innerHTML = `
        <div id="root">
          <h1 id="title">Interactive DOM Explorer</h1>
          <p id="description" class="text">Explore and manipulate the DOM structure.</p>
          <button id="action-btn" class="btn">Click me</button>
          <ul id="list">
            <li class="item">Item 1</li>
            <li class="item">Item 2</li>
            <li class="item">Item 3</li>
          </ul>
        </div>
      `;
      updateDomTree();
    }
  };

  const updateDomTree = () => {
    const tree = createDomTree(domRef.current);
    setDomTree(tree);
  };

  const createDomTree = (element) => {
    const tree = {
      tagName: element.tagName.toLowerCase(),
      id: element.id,
      className: element.className,
      children: []
    };

    for (let child of element.children) {
      tree.children.push(createDomTree(child));
    }

    return tree;
  };

  const domAPIs = [
    { name: 'getElementById', action: (id) => {
      const element = document.getElementById(id);
      updateDomTree();
      return element ? `Found: <${element.tagName.toLowerCase()} id="${id}">` : 'Element not found';
    }},
    { name: 'getElementsByClassName', action: (className) => {
      const elements = document.getElementsByClassName(className);
      updateDomTree();
      return `Found ${elements.length} element(s): ${Array.from(elements).map(el => `<${el.tagName.toLowerCase()}>`).join(', ')}`;
    }},
    { name: 'querySelector', action: (selector) => {
      const element = document.querySelector(selector);
      updateDomTree();
      return element ? `Found: <${element.tagName.toLowerCase()}>` : 'Element not found';
    }},
    { name: 'innerHTML', action: (id) => {
      const element = document.getElementById(id);
      if (element) {
        const originalContent = element.innerHTML;
        updateDomTree();
        return `innerHTML of #${id}: "${originalContent}"`;
      }
      return 'Element not found';
    }},
    { name: 'setAttribute', action: (input) => {
      const [selector, attr, value] = input.split(',');
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr.trim(), value.trim());
        updateDomTree();
        return `Set ${attr.trim()}="${value.trim()}" on <${element.tagName.toLowerCase()}>`;
      }
      return 'Element not found';
    }},
    { name: 'removeChild', action: (selector) => {
      const element = document.querySelector(selector);
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        updateDomTree();
        return `Removed <${element.tagName.toLowerCase()}> from the DOM`;
      }
      return 'Element not found or has no parent';
    }}
  ];

  const handleAPIAction = (input) => {
    if (selectedAPI && domRef.current) {
      const result = selectedAPI.action(input);
      setResult(result);
      setHistory(prev => [...prev, { api: selectedAPI.name, input, result }]);
    }
  };

  const DOMTreeVisualizer = ({ node, depth = 0, highlight = false }) => {
    const colors = darkMode 
      ? ['bg-purple-900', 'bg-blue-900', 'bg-green-900', 'bg-red-900', 'bg-yellow-900', 'bg-pink-900']
      : ['bg-purple-100', 'bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-yellow-100', 'bg-pink-100'];
    const color = colors[depth % colors.length];

    return (
      <div style={{ marginLeft: `${depth * 20}px` }}>
        <motion.div
          className={`p-2 mb-1 rounded ${highlight ? (darkMode ? 'bg-yellow-600' : 'bg-yellow-200') : color}`}
          initial={highlight ? { backgroundColor: darkMode ? '#78350f' : '#FEFCE8' } : {}}
          animate={highlight ? { backgroundColor: darkMode ? ['#78350f', '#92400e', '#78350f'] : ['#FEFCE8', '#FEF08A', '#FEFCE8'] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className={`font-mono ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            {'<'}{node.tagName}
            {node.id && <span className={darkMode ? 'text-blue-300' : 'text-blue-600'}> id="{node.id}"</span>}
            {node.className && <span className={darkMode ? 'text-green-300' : 'text-green-600'}> class="{node.className}"</span>}
            {'>'}
          </span>
        </motion.div>
        {node.children && node.children.map((child, index) => (
          <DOMTreeVisualizer 
            key={index} 
            node={child} 
            depth={depth + 1} 
            highlight={selectedAPI && (
              (selectedAPI.name === 'getElementById' && child.id === result.split('"')[1]) ||
              (selectedAPI.name === 'getElementsByClassName' && child.className.includes(result.split('"')[1])) ||
              (selectedAPI.name === 'querySelector' && (child.id === result.split('"')[1] || child.className.includes(result.split('"')[1])))
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="dom-basics" className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>Interactive DOM Explorer</h2>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <motion.div
          className={`rounded-lg shadow-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="w-full md:w-1/2">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Editable DOM Structure</h3>
              <div 
                ref={domRef} 
                className={`p-4 rounded-lg mb-4 min-h-[200px] border-2 ${darkMode ? 'bg-gray-700 border-purple-500 text-white' : 'bg-gray-100 border-purple-300 text-gray-800'}`}
                contentEditable={true}
                onInput={updateDomTree}
              ></div>
              <button 
                onClick={initializeDom}
                className={`px-4 py-2 rounded ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white transition`}
              >
                Reset DOM
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Visual DOM Tree</h3>
              <div className={`p-4 rounded-lg mb-4 min-h-[200px] overflow-auto border-2 ${darkMode ? 'bg-gray-700 border-purple-500' : 'bg-white border-purple-300'}`}>
                {domTree && <DOMTreeVisualizer node={domTree} />}
              </div>
            </div>
          </div>
          <h3 className={`text-xl font-semibold mt-8 mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Try DOM Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {domAPIs.map((api) => (
              <motion.div
                key={api.name}
                className={`p-4 rounded-lg cursor-pointer ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-purple-100 hover:bg-purple-200'}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedAPI(api)}
              >
                <h4 className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>{api.name}</h4>
              </motion.div>
            ))}
          </div>
          {selectedAPI && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-100'}`}
            >
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>{selectedAPI.name} Demo</h4>
              <div className="mb-2">
                <input 
                  type="text" 
                  placeholder="Enter id, class, or selector"
                  className={`w-full p-2 rounded border-2 focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-800 border-purple-500 text-white focus:border-purple-400' 
                      : 'bg-white border-purple-300 text-gray-800 focus:border-purple-500'
                  }`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAPIAction(e.target.value);
                    }
                  }}
                />
              </div>
              <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Press Enter to see the result</p>
              {result && (
                <div className={`mt-4 p-2 rounded border-2 ${
                  darkMode 
                    ? 'bg-gray-800 border-purple-500 text-white' 
                    : 'bg-white border-purple-300 text-purple-700'
                }`}>
                  <pre>{result}</pre>
                </div>
              )}
            </motion.div>
          )}
          <div className="mt-8">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Action History</h3>
            <div className={`p-4 rounded-lg border-2 max-h-[200px] overflow-auto ${
              darkMode 
                ? 'bg-gray-700 border-purple-500' 
                : 'bg-white border-purple-300'
            }`}>
              {history.map((item, index) => (
                <div key={index} className={`mb-2 p-2 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <span className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>{item.api}:</span> {item.input} → {item.result}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DOMExplorer;