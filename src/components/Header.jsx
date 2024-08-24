import React, { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

function Header({ darkMode, setDarkMode, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['JavaScript', 'HTML', 'CSS', 'Nodejs', 'HTTPS', 'NoSQL', 'SQL', 'ORM', 'React','Libraries','Git/Github','Typescript','Excelidraw','Gmail clone','Nextjs','Websockets','ChatApp','Game','Testing','Advanced Backened','OpenAI','GRPC','Firebase','Strapi' ,'Extras'];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-lg w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white mr-4 md:mr-6 text-shadow-lg">
              TheWebDev
            </h1>
            <p className="text-lg md:text-xl text-yellow-300 dark:text-yellow-400 font-semibold">
              (By 100x devs)
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md mr-4"
            >
              {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md md:hidden"
            >
              {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <nav className={`bg-white dark:bg-gray-800 rounded-lg shadow-inner ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start py-2 md:py-3">
            {sections.map((section) => (
              <li key={section} className="px-1 py-1 md:px-2">
                <button
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className="px-3 py-2 rounded-md text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-500 dark:hover:text-white dark:hover:bg-indigo-600 transition-colors duration-200 shadow-sm"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
