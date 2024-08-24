import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Brand Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-1">The100xdevs</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Innovating the Future</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          <a href="https://www.linkedin.com/in/divyanshu-rajput8171/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/divyanshurajput744/" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Instagram</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">YouTube</a>
          <a href="https://x.com/DivyanshuRaj81" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">Twitter</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
