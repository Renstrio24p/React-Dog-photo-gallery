import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <h2 className="footer-title">Dog Photo Series</h2>
        <p className="footer-text">
          Welcome to our delightful dog photo gallery! Prepare to be captivated
          by a heartwarming collection of canine companions captured in their
          finest moments. Each photo radiates with the love, joy, and undeniable
          charm that only our furry friends can bring.
        </p>
        <ul className="icons">
          <li>
            <a href="#0">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="copyright">
          &copy; Copyright @2023 <span className="author">Waren Gador</span>
        </p>
        <ul className="footer-links">
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
