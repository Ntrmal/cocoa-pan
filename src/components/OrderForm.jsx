import "./OrderForm.css";

function OrderForm({ details, setDetails }) {
  return (
    <section className="order-form">
      <h2>Your Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={details.name}
        onChange={(e) =>
          setDetails({ ...details, name: e.target.value })
        }
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={details.phone}
        onChange={(e) =>
          setDetails({ ...details, phone: e.target.value })
        }
      />

      <textarea
        placeholder="Delivery Address / Pickup Info"
        rows="3"
        value={details.address}
        onChange={(e) =>
          setDetails({ ...details, address: e.target.value })
        }
      />
    </section>
  );
}

export default OrderForm;
