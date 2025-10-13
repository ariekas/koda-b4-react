import { createContext, useContext, useState, useEffect } from "react";

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
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
    const checkoutData = {
      id: Date.now(),
      items: cartItems,
      payment: paymentInfo,
      delivery: deliveryInfo,
      total,
      date: new Date().toLocaleString(),
    };

    setHistory((prev) => [...prev, checkoutData]);

    alert("✅ Checkout berhasil!");

    localStorage.removeItem("paymentInfo");
    localStorage.removeItem("deliveryInfo");
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
