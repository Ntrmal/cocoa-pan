import "./Cart.css";

function Cart({ cart = [], removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

     {cart.map((item, index) => (
  <div key={index} className="cart-item">
    <span className="item-name">{item.name}</span>

    <div className="item-right">
      <span className="item-price">₹{item.price}</span>
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  </div>
))}


      {cart.length > 0 && (
        <h3 className="total">Total: ₹{total}</h3>
      )}
    </section>
  );
}

export default Cart;
