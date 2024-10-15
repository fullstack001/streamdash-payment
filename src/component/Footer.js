// Footer.js
import React from "react";

const Footer = () => (
  <footer className="flex flex-col md:flex-row justify-between items-center p-6 px-8 md:px-24 bg-gray-100 text-sm text-gray-500">
    <p>© 2024 istreamdash, Inc. All Rights Reserved.</p>
    <nav className="flex space-x-4 mt-2 md:mt-0">
      <a href="#help" className="hover:text-blue-600">
        Help Center
      </a>
      <a href="#terms" className="hover:text-blue-600">
        Terms & Conditions
      </a>
      <a href="#privacy" className="hover:text-blue-600">
        Privacy Policy
      </a>
      <a href="#return" className="hover:text-blue-600">
        Return Policy
      </a>
    </nav>
  </footer>
);

export default Footer;
