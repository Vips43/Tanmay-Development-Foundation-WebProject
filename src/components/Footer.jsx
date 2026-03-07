import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1 */}
        <div className="footer-column brand-column">
          <h2>Tanmay foundation.</h2>
          <p>
            Our platform is dedicated in helping farmers, educate rural children
            and empower society that creates equal opportunities for dignified
            life to each and every individual.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Navigate</h3>
          <ul>
            <li onClick={handleScrollTop}>
              <Link to="/" className="no-underline">
                Home
              </Link>
            </li>
            <li onClick={handleScrollTop}>
              <Link to="/Gallery" className="no-underline">
                Gallery
              </Link>
            </li>
            <li onClick={handleScrollTop}>
              <Link to="/About-Us" className="no-underline">
                About-Us
              </Link>
            </li>
            <li onClick={handleScrollTop}>
              <Link to="/Careers" className="no-underline">
                Careers
              </Link>
            </li>
            <li onClick={handleScrollTop}>
              <Link to="/Certificate" className="no-underline">
                Certificate
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Support us</h3>
          <ul>
            <li>
              <Link to="/faq" className="no-underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="no-underline">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/support" className="no-underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="/security" className="no-underline">
                Security
              </Link>
            </li>
            <li>
              <Link to="/center" className="no-underline">
                Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Contact us</h3>
          <a
            href="mailto:tanmayfoundation17@gmail.com"
            className="contact-email"
          >
            tanmayfoundation17@gmail.com
          </a>
          <p>
            Address: <br />
            Vill- Jasmanda Gadia Barabanki
            <br />
            Uttar Pradesh 225003
          </p>
        </div>

        {/* Column 5 */}
        <div className="footer-column">
          <h3>Who we are</h3>
          <p>
            TDF promotes and partners with community institutions to empower
            women, children and marginalized families and enhance and sustain
            their economic and social well-being.
          </p>

          {/* Moved inside the 5th column to match your image */}
          <div className="social-media-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://youtube.com/@tanmaydevelopmentfoundation-ky?si=V3pzRzHzTpn2DZvd">
                <img
                  src="/images/socials/youtube-logo.png"
                  alt="youtube-logo"
                  className="logo-img"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553108560108&mibextid=ZbWKwL">
                <img
                  src="/images/socials/facebook-logo.png"
                  alt="facebook-logo"
                  className="logo-img"
                />
              </a>
              <a href="https://www.instagram.com/tanmay.foundation?igsh=MThmZmVsaDd4MDd0Zw==">
                <img
                  src="/images/socials/instagram-logo.png"
                  alt="instagram-logo"
                  className="logo-img"
                />
              </a>
              <a href="https://x.com/Tanmayfound8858?t=Wfau1BMsphhvS4ZcNAlGPg&s=09">
                <img
                  src="/images/socials/X-logo.png"
                  alt="X-logo"
                  className="logo-img"
                />
              </a>
              <a href="https://www.linkedin.com/company/tanmay-developement-foundation-classes/">
                <img
                  src="/images/socials/linkedin-logo.jpg"
                  alt="Linkedin-logo"
                  className="logo-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* The green line and legal text */}
      <div className="footer-bottom">
        <p>Terms and Conditions , Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
