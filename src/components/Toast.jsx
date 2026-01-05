import "./Toast.css";

function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="toast">
      <strong>✔ Added to cart</strong>
      <p>{message}</p>
    </div>
  );
}

export default Toast;
