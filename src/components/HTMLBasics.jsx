import React from 'react';

function HTMLSection() {
  return (
    <section className="max-w-4xl mx-auto mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">HTML Basics</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-3">What is HTML?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and content of a webpage using various tags and elements.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Basic HTML Tags</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML Basics</h1>
    <p>This is a paragraph.</p>
    <a href="https://example.com">This is a link</a>
</body>
</html>`}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Common HTML Elements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><code>&lt;div&gt;</code> - Container for other elements</li>
            <li><code>&lt;span&gt;</code> - Inline container for text</li>
            <li><code>&lt;img&gt;</code> - Embed images</li>
            <li><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> - Unordered and ordered lists</li>
            <li><code>&lt;table&gt;</code> - Create tables</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HTMLSection;