// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Demo Publisher</h3>
            <p>
              A demo website showcasing publisher integration with Avano DSP/SSP
              platform.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://twitter.com">Twitter</a>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Demo Publisher. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
