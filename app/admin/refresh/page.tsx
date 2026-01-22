"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RefreshPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleRefresh = async (type: "libreria" | "galeria" | "all") => {
    setLoading(type);
    setMessage("");

    try {
      const response = await fetch("/api/refresh-cache", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Error al refrescar el caché");
    } finally {
      setLoading(null);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/auth", {
        method: "DELETE",
      });

      if (response.ok) {
        // Force a hard redirect to clear all state
        window.location.href = "/admin/login";
      } else {
        setMessage("❌ Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Logout error:", error);
      setMessage("❌ Error al cerrar sesión");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-[#75103A]">
            Panel de Actualización
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Usa estos botones para actualizar el contenido inmediatamente
          </p>

          <div className="space-y-4">
            {/* Refresh Librería */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#75103A]">
                📚 Librería
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Actualiza el catálogo de libros
              </p>
              <button
                onClick={() => handleRefresh("libreria")}
                disabled={loading === "libreria"}
                className="w-full bg-[#75103A] text-white py-3 px-6 rounded-md hover:bg-[#5a0c2d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
              >
                {loading === "libreria"
                  ? "Refrescando..."
                  : "Refrescar Librería"}
              </button>
            </div>

            {/* Refresh Galería */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#75103A]">
                🎨 Galería
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Actualiza el catálogo de pinturas
              </p>
              <button
                onClick={() => handleRefresh("galeria")}
                disabled={loading === "galeria"}
                className="w-full bg-[#75103A] text-white py-3 px-6 rounded-md hover:bg-[#5a0c2d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
              >
                {loading === "galeria"
                  ? "Refrescando..."
                  : "Refrescar Galería"}
              </button>
            </div>

            {/* Refresh All */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gray-50">
              <h2 className="text-xl font-semibold mb-2 text-[#75103A]">
                🔄 Todo
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Actualiza todo el contenido (librería y galería)
              </p>
              <button
                onClick={() => handleRefresh("all")}
                disabled={loading === "all"}
                className="w-full bg-[#75103A] text-white py-3 px-6 rounded-md hover:bg-[#5a0c2d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
              >
                {loading === "all"
                  ? "Refrescando todo..."
                  : "Refrescar Todo"}
              </button>
            </div>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-md ${
                message.includes("✅")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <p className="text-center font-medium">{message}</p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">
              ℹ️ ¿Cuándo usar esto?
            </h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Cuando agregues o edites contenido en Contentful</li>
              <li>Cuando quieras ver los cambios inmediatamente</li>
              <li>Sin esperar las 6 horas de actualización automática</li>
            </ul>
          </div>

          {/* Logout */}
          <div className="mt-6 text-center">
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
