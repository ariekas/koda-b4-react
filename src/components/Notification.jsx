import React from "react";
import { useNotification } from "../context/NotificationContext";

export function NotificationDemo() {
  const { showNotification } = useNotification();

  return (
    <div className="flex gap-3">
      <button
        onClick={() => showNotification("Data berhasil disimpan!", "success")}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Success
      </button>
      <button
        onClick={() => showNotification("Terjadi kesalahan!", "error")}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Error
      </button>
      <button
        onClick={() => showNotification("Perhatikan input anda!", "warning")}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
      >
        Warning
      </button>
      <button
        onClick={() => showNotification("Informasi tambahan.", "info")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Info
      </button>
    </div>
  );
}
