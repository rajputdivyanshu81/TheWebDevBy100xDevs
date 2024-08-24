import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import JavaScriptSection from './components/sections/JavascriptSection';
import HTMLSection from './components/sections/HTMLSection'; // Import HTMLSection

// Placeholder component for sections not yet implemented
const PlaceholderSection = ({ name }) => (
  <div>
    <h2>{name} Section</h2>
    <p>This section is under construction.</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('javascript');
  const [activeTopic, setActiveTopic] = useState(null);

  const sections = {
    javascript: <JavaScriptSection activeTopic={activeTopic} />,
    html: <HTMLSection />, // Use HTMLSection here
    css: <PlaceholderSection name="CSS" />,
    nodejs: <PlaceholderSection name="Nodejs" />,
    httpserver: <PlaceholderSection name="HTTPservers" />,
    nosql: <PlaceholderSection name="NoSQL" />,
    sql: <PlaceholderSection name="SQL" />,
    orm: <PlaceholderSection name="ORM" />,
    react: <PlaceholderSection name="React" />,
    libraries: <PlaceholderSection name="Libraries UI" />,
    git: <PlaceholderSection name="Git" />,
    github: <PlaceholderSection name="GitHub" />,
    typescript: <PlaceholderSection name="Typescript" />,
    execlidraw: <PlaceholderSection name="Execlidraw" />, // Fixed key typo
    gmailclone: <PlaceholderSection name="Gmailclone" />,
    nextjs: <PlaceholderSection name="Nextjs" />,
    websockets: <PlaceholderSection name="WebSockets" />,
    chatapp: <PlaceholderSection name="Chat App" />,
    game: <PlaceholderSection name="Game" />,
    testing: <PlaceholderSection name="Testing" />,
    advancedbackened: <PlaceholderSection name="AdvancedBackened" />,
    openai: <PlaceholderSection name="OpenAi" />,
    grpc: <PlaceholderSection name="GRPC" />,
    firebase: <PlaceholderSection name="Firebase" />,
    strapi: <PlaceholderSection name="Strapi" />,
    extras: <PlaceholderSection name="Extras" />,
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          setActiveSection={setActiveSection}
        />
        <div className="container mx-auto px-4 py-8 flex">
         
          <main className="flex-1">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sections[activeSection]}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
