import "./Specialities.css";

function Specialities() {
  return (
    <section className="specialities">
      <h2>Our Specialities ✨</h2>

      <div className="speciality-grid">
        <div className="speciality-card">
          <span>🧁</span>
          <h3>Handcrafted Desserts</h3>
          <p>Every item is baked with care, never mass produced.</p>
        </div>

        <div className="speciality-card">
          <span>🍫</span>
          <h3>Premium Ingredients</h3>
          <p>We use real cocoa, butter, and quality chocolate.</p>
        </div>

        <div className="speciality-card">
          <span>🔥</span>
          <h3>Freshly Baked</h3>
          <p>Prepared in small batches to ensure freshness.</p>
        </div>

        <div className="speciality-card">
          <span>❤️</span>
          <h3>Home Baker’s Touch</h3>
          <p>A personal touch you can taste in every bite.</p>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
