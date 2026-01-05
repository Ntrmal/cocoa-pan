import "./Menu.css";
import { loafCakes, brownies, comboOffers,brownieSpecials, } from "../data/menuData";




function Menu({addToCart}) {
  return (
    <section className="menu">
      <h2>Our Menu </h2>
   
      <h3>Loaf Cakes</h3>
      <div className="menu-grid">
        {loafCakes.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.type} – ₹{item.price}</p>
             <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h3> Combo Offers</h3>
<div className="menu-grid">
  {comboOffers.map(item => (
    <div key={item.id} className="menu-card combo">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>₹{item.price}</strong></p>
      <button onClick={() => addToCart(item)}>
        Add Combo
      </button>
    </div>
  ))}
</div>


      <h3 style={{ marginTop: "50px" }}>Brownies</h3>
      <div className="menu-grid">
        {brownies.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3> Our Specials</h3>
<div className="menu-grid">
  {brownieSpecials.map(item => (
    <div key={item.id} className="menu-card special">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {item.price > 0 ? (
        <p><strong>₹{item.price}</strong></p>
      ) : (
        <p><em>Price varies</em></p>
      )}
      <button onClick={() => addToCart(item)}>
        Add
      </button>
    </div>
  ))}
</div>
<h3 className="download-heading">
  Download Menu 
</h3>

<div className="menu-download-center">
  <a
    href="/loaf-menu.pdf"
    download
    className="menu-download-item"
  >
    📄 <span>Loaf Cakes Menu</span>
  </a>

  <a
    href="/brownie-menu.pdf"
    download
    className="menu-download-item"
  >
    📄 <span>Brownies Menu</span>
  </a>
</div>



    </section>
  );
}

export default Menu;
