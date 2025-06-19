import React from 'react';
import './Header.css'; // 可选：用于自定义样式

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/vite.svg" alt="Vite Logo" className="logo" />
        <span className="header-title">我的网站</span>
      </div>
      <nav className="header-nav">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite</a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
      </nav>
    </header>
  );
}

export default Header;