import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const images = [
  "/hero/hero5.jpeg",
  "/hero/hero2.jpeg",
  "/hero/hero4.jpeg",
  "/hero/hero1.jpeg"
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${
            index === current ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay + content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Cocoa Pan </h1>
          <p>Handcrafted Cakes & Brownies</p>
          <p>Freshly baked with love</p>

          <Link to="/menu">
            <button>View Menu</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
