import React, { useState } from 'react';
import HTMLSidebar from './HTMLSidebar';
import Footer from '../Footer';

function HTMLSection() {
  const [activeTopic, setActiveTopic] = useState(0);

  const renderContent = () => {
    switch (activeTopic) {
      case 0:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction to HTML</h2>
            <p>
              HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications...
            </p>
            {/* Add more content */}
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">HTML Elements</h2>
            <p>
              HTML elements are the building blocks of HTML pages...
            </p>
            {/* Add more content */}
          </div>
        );
      // Add cases for other topics
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to HTML Section</h2>
            <p>Select a topic from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        <HTMLSidebar setActiveTopic={setActiveTopic} />
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HTMLSection;
