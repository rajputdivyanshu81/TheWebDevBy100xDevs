import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Sidebar from '../Sidebar';
import DOMExplorer from '../DOMExplorer';
import JavaScriptFundamentals from '../JavaScriptFundamentals';
import FunctionsAndScope from '../FunctionsAndScope';
import ObjectsAndArrays from '../ObjectsAndArrays';
import AsyncJavaScript from '../AsyncJavaScript';
import ES6Features from '../ES6Features';
import InteractivePlayground from '../InteractivePlayground';
import Footer from '../Footer';
import TodoListSection from '../TodoListSection';

function JavaScriptSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <Sidebar className="w-full md:w-1/4" />
        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <JavaScriptFundamentals />
            <FunctionsAndScope />
            <ObjectsAndArrays />
            <AsyncJavaScript />
            <DOMExplorer />
            <ES6Features />
            <InteractivePlayground />
            <TodoListSection />
          </motion.div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default JavaScriptSection;
