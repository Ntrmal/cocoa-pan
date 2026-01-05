import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Checkout from "./pages/Checkout";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  
  const [orderDetails, setOrderDetails] = useState(() => {
  const savedDetails = localStorage.getItem("orderDetails");
  return savedDetails
    ? JSON.parse(savedDetails)
    : { name: "", phone: "", address: "" };
});
useEffect(() => {
  localStorage.setItem(
    "orderDetails",
    JSON.stringify(orderDetails)
  );
}, [orderDetails]);


  // 🔔 toast state
  const [toast, setToast] = useState({
    visible: false,
    message: ""
  });

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);

    // show toast
    setToast({
      visible: true,
      message: item.name
    });

    // hide toast after 2s
    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 2000);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Toast visible={toast.visible} message={toast.message} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<MenuPage addToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              removeFromCart={removeFromCart}
              orderDetails={orderDetails}
              setOrderDetails={setOrderDetails}
            />
          }
        />
        <Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
