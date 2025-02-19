import React from 'react';
import '../styles/menu-mobile.css';

export default function MenuMobile() {
  const menuItems = ['About', 'Services', 'Projects', 'Contact'];

  return (
    <nav className="menu-mobile">
      {menuItems.map((item) => (
        <a key={item} href="#" onClick={(e) => e.preventDefault()}>{item}</a>
      ))}
    </nav>
  );
}

