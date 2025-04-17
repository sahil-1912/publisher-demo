// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h1>Demo Publisher</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/tech">Technology</a>
            </li>
            <li>
              <a href="/sports">Sports</a>
            </li>
            <li>
              <a href="/entertainment">Entertainment</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
