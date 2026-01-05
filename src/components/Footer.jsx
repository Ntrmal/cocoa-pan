import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Cocoa Pan. All rights reserved.
      </p>

      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span>•</span>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;
