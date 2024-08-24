import React, { useState } from 'react';
import HTMLSidebar from './HTMLSidebar';
import Footer from '../Footer';
import { motion } from 'framer-motion';

function HTMLSection() {
  const [activeTopic, setActiveTopic] = useState(0);

  const renderContent = () => {
    switch (activeTopic) {
      case 0:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction to HTML</h2>
            <p className="mb-4">HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Key Concepts</h3>
            <ul className="list-disc list-inside mb-4">
              <li>HTML elements are represented by tags</li>
              <li>Tags label pieces of content such as "heading", "paragraph", "table", etc.</li>
              <li>Browsers don't display the HTML tags, but use them to render the content</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">A Simple HTML Document</h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto mb-4">
              <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
              </code>
            </pre>
            
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold">Try it Yourself:</h4>
              <p>Copy the code above and save it as "index.html". Then open it in a web browser to see the result!</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">HTML History</h3>
            <ul className="list-disc list-inside">
              <li>HTML was created by Tim Berners-Lee in 1991</li>
              <li>HTML 4.01 was published in 1999</li>
              <li>XHTML was released in 2000</li>
              <li>HTML5, the current standard, was published in 2014</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Document Structure</h2>
            <p className="mb-4">Every HTML document follows a specific structure that includes several key elements. Understanding this structure is crucial for creating well-formed HTML documents.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Basic Structure</h3>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto mb-4">
              <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`}
              </code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Key Elements Explained</h3>
            <ul className="list-disc list-inside mb-4">
              <li><code>&lt;!DOCTYPE html&gt;</code>: Declares that this is an HTML5 document</li>
              <li><code>&lt;html&gt;</code>: The root element of an HTML page</li>
              <li><code>&lt;head&gt;</code>: Contains meta information about the HTML page</li>
              <li><code>&lt;title&gt;</code>: Specifies a title for the HTML page (shown in the browser's title bar or page's tab)</li>
              <li><code>&lt;body&gt;</code>: Defines the document's body, which contains all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
            </ul>
            
            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold">Important Note:</h4>
              <p>The <code>lang</code> attribute in the <code>&lt;html&gt;</code> tag helps search engines and browsers determine the language of the document.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">HTML Page Structure Visualization</h3>
            <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mb-4">
              <div className="border-b border-gray-300 dark:border-gray-600 p-2 mb-2">
                <code>&lt;html&gt;</code>
              </div>
              <div className="ml-4 border-b border-gray-300 dark:border-gray-600 p-2 mb-2">
                <code>&lt;head&gt;</code>
              </div>
              <div className="ml-8 p-2 mb-2">
                <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, etc.
              </div>
              <div className="ml-4 border-b border-gray-300 dark:border-gray-600 p-2 mb-2">
                <code>&lt;body&gt;</code>
              </div>
              <div className="ml-8 p-2">
                <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, etc.
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Text Elements</h2>
            <p className="mb-4">HTML provides various elements for structuring and formatting text. These elements help in organizing content and improving readability.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Headings</h3>
            <p className="mb-4">HTML offers six levels of section headings, <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>. <code>&lt;h1&gt;</code> is the highest (most important) level and <code>&lt;h6&gt;</code> is the lowest.</p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4">
              <h1 className="text-2xl font-bold">This is an h1 heading</h1>
              <h2 className="text-xl font-bold">This is an h2 heading</h2>
              <h3 className="text-lg font-bold">This is an h3 heading</h3>
              <h4 className="text-base font-bold">This is an h4 heading</h4>
              <h5 className="text-sm font-bold">This is an h5 heading</h5>
              <h6 className="text-xs font-bold">This is an h6 heading</h6>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Paragraphs</h3>
            <p className="mb-4">The <code>&lt;p&gt;</code> tag defines a paragraph. Browsers automatically add some space before and after each <code>&lt;p&gt;</code> element.</p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4">
              <p>This is a paragraph.</p>
              <p>This is another paragraph.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Text Formatting</h3>
            <ul className="list-disc list-inside mb-4">
              <li><code>&lt;strong&gt;</code> or <code>&lt;b&gt;</code>: Defines bold text</li>
              <li><code>&lt;em&gt;</code> or <code>&lt;i&gt;</code>: Defines italic text</li>
              <li><code>&lt;mark&gt;</code>: Defines marked/highlighted text</li>
              <li><code>&lt;small&gt;</code>: Defines smaller text</li>
              <li><code>&lt;del&gt;</code>: Defines deleted text</li>
              <li><code>&lt;ins&gt;</code>: Defines inserted text</li>
              <li><code>&lt;sub&gt;</code>: Defines subscript text</li>
              <li><code>&lt;sup&gt;</code>: Defines superscript text</li>
            </ul>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4">
              <p>This is <strong>bold</strong> and this is <em>italic</em>.</p>
              <p>This is <mark>highlighted</mark> and this is <small>smaller</small>.</p>
              <p>This is <del>deleted</del> and this is <ins>inserted</ins>.</p>
              <p>This is <sub>subscript</sub> and this is <sup>superscript</sup>.</p>
            </div>
            
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-4">
              <h4 className="font-semibold">Try it Yourself:</h4>
              <p>Experiment with different text formatting in the editable area below:</p>
              <div contentEditable className="mt-2 p-2 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                <p>Edit this text to try different HTML text elements!</p>
              </div>
            </div>
          </div>
        );
      // Add more cases for other topics
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to HTML Learning</h2>
            <p>Select a topic from the sidebar to start your HTML journey!</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <HTMLSidebar setActiveTopic={setActiveTopic} activeTopic={activeTopic} />
      <motion.div
        key={activeTopic}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-4 overflow-y-auto"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
<Footer />

export default HTMLSection;