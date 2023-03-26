import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-8 py-4 text-center">
      <Link href="/" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
        &copy; 2023 Diego Câmara
      </Link>
    </footer>
  );
};

export default Footer;
