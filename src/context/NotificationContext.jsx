import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "info", duration = 3000) => {
    const id = Math.random();
    setNotifications((prev) => [...prev, { id, message, type }]);
  
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, duration);
  };
  

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-0 md:top-5 m-2 md:m-0 md:right-5 flex flex-col gap-3 z-50">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`px-4 py-3 rounded-lg shadow-md text-white animate-fade-in-down ${
              notif.type === "success"
                ? "bg-green-500"
                : notif.type === "error"
                ? "bg-red-500"
                : notif.type === "warning"
                ? "bg-yellow-500"
                : "bg-blue-500"
            }`}
          >
            {notif.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);
