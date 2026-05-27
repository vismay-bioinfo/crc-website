import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Column: Centre Description */}
        <div className="footer-section footer-about">
          <h3>Centre for Rare Diseases</h3>
          <p>
            An interdisciplinary collaborative initiative dedicated to advancing the diagnosis, 
            translational research, and clinical management of rare genetic disorders in India. 
            Supported by the DBT/Wellcome Trust India Alliance.
          </p>
        </div>

        {/* Middle Column: Quick Navigation Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <div className="footer-links-grid">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/progress">Progress & Milestones</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/training">Training</Link>
            <Link to="/scientific-engagement">Scientific Engagement</Link>
            <Link to="/crc-registry">Registry</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Right Column: Connect & Location Info */}
        <div className="footer-section footer-social">
          <h3>Connect with Us</h3>
          <p>Department of Medical Genetics, Kasturba Medical College, MAHE, Manipal, Karnataka, India.</p>
          <div className="footer-social-icons">
            <a 
              href="https://www.linkedin.com/company/centre-for-rare-diseases-mahe" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:genetics.clinic@manipal.edu" 
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>© 2026 Centre for Rare Diseases | Manipal Academy of Higher Education. All rights reserved.</p>
      </div>
    </footer>
  );
}