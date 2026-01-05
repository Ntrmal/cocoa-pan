import Cart from "../components/Cart";
import Payment from "../components/Payment";
import OrderForm from "../components/OrderForm";
import OrderSummary from "../components/OrderSummary";


function Checkout(props) {
  const {
    cart,
    removeFromCart,
    orderDetails,
    setOrderDetails
  } = props;
const totalAmount = cart.reduce(
  (sum, item) => sum + item.price,
  0
);

const handlePaymentConfirm = () => {
  if (
    !orderDetails.name ||
    !orderDetails.phone ||
    !orderDetails.address
  ) {
    alert("Please fill all details before confirming order");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const itemsText = cart
    .map(item => `• ${item.name} - ₹${item.price}`)
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const message = `
🧁 *New Order – Cocoa Pan*

👤 Name: ${orderDetails.name}
📞 Phone: ${orderDetails.phone}
📍 Address: ${orderDetails.address}

🍰 Items:
${itemsText}

💰 Total: ₹${total}

✅ Payment done via Google Pay
`;

  const phoneNumber = "919495695312"; 
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Checkout
      </h1>

      <Cart cart={cart} removeFromCart={removeFromCart} />

      <OrderForm
        details={orderDetails}
        setDetails={setOrderDetails}
      />
      <OrderSummary
       cart={cart}
       orderDetails={orderDetails}
     />

      <Payment
  totalAmount={totalAmount}
  onConfirmPayment={handlePaymentConfirm}
/>

    </div>
  );
}

export default Checkout;
