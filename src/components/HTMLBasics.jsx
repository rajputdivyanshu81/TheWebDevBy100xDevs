import React from 'react';

function HTMLBasics() {
  return (
    <section className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">HTML Basics</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        HTML stands for HyperText Markup Language. It's the standard language for creating web pages. 
        Let's start with some basic tags.
      </p>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <h1>&lt;h1&gt;Heading 1&lt;/h1&gt;</h1>
        <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
      </div>
    </section>
  );
}

export default HTMLBasics;
