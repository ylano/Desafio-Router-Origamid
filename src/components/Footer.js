// Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-100 p-4 text-center">
      <p>
        Desenvolvido por{' '}
        <NavLink to="https://github.com/ylano" target="_blank" className="text-blue-400 hover:underline">
          Francisco Ylano
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
