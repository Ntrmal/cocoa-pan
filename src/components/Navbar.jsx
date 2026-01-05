import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const [hide, setHide] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hide ? "hide" : ""}`}>
      {/* 🔹 LOGO */}
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Cocoa Pan Logo" />
      </Link>

      {/* 🔹 CART */}
      <Link to="/checkout" className="cart-link">
        Cart 🛒 <span>{cartCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
