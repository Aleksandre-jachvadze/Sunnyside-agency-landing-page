import React from 'react';
import '../styles/menumobile.css';

export default function MenuMobile() {
  const menuItems = ['About', 'Services', 'Projects', 'Contact'];

  return (
    <div className="menu_mobile">
      {menuItems.map((item) => (
        <a key={item} href="#">{item}</a>
      ))}
    </div>
  );
}
