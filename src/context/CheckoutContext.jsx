import { createContext, useContext, useState, useEffect } from "react";
import { useNotification } from "./NotificationContext"
import { useNavigate } from "react-router-dom";


const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const { showNotification } = useNotification()
  const navigate = useNavigate()
  const [paymentInfo, setPaymentInfo] = useState(() => {
    const stored = localStorage.getItem("paymentInfo");
    return stored ? JSON.parse(stored) : "";
  });

  const [deliveryInfo, setDeliveryInfo] = useState(() => {
    const stored = localStorage.getItem("deliveryInfo");
    return stored ? JSON.parse(stored) : { name: "", address: "", phone: "" };
  });

  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem("history");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  }, [paymentInfo]);

  useEffect(() => {
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
  }, [deliveryInfo]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleCheckout = (cartItems, total) => {
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      const checkoutData = {
        id: Math.random(),
        items: cartItems,
        payment: paymentInfo,
        delivery: deliveryInfo,
        total,
        date: new Date().toLocaleString(),
      };

      setHistory((prev) => [...prev, checkoutData]);
      localStorage.removeItem("paymentInfo");
      localStorage.removeItem("deliveryInfo");

      navigate("/history")
    } else {
      showNotification("Cart kosong, tidak bisa melanjutkan", "error")
    }
  };

  return (
    <CheckoutContext.Provider
      value={{ paymentInfo, setPaymentInfo, deliveryInfo, setDeliveryInfo, handleCheckout, history }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
