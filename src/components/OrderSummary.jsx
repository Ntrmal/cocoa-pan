import "./OrderSummary.css";

function OrderSummary({ cart, orderDetails }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-items">
        {cart.map((item, index) => (
          <div key={index} className="summary-row">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      <div className="summary-total">
        Total: ₹{total}
      </div>

      <div className="summary-customer">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {orderDetails.name}</p>
        <p><strong>Phone:</strong> {orderDetails.phone}</p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
      </div>
    </section>
  );
}

export default OrderSummary;
