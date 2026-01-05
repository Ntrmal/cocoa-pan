import "./Payment.css";

function Payment({ onConfirmPayment }) {
  return (
    <section className="payment">
      <h2>Payment</h2>

      <p className="instruction">
        Scan the QR code below to pay via Google Pay / UPI
      </p>

      {/* ✅ QR CODE IMAGE */}
      <img
        src="/gpay-qr.jpeg"
        alt="UPI Payment QR"
        className="qr-image"
      />

      <p className="instruction">
        After completing the payment, confirm your order
      </p>

      <button onClick={onConfirmPayment}>
        Confirm Order
      </button>
    </section>
  );
}

export default Payment;
