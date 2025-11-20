

import React from 'react'; // Necesario para definir el componente y usar JSX
import { ShoppingCart } from 'lucide-react'; // Ícono del carrito
// ====================================================================
// --- SIMULACIÓN DE components/Carrito.tsx ---
// Este componente gestiona el icono del carrito y el contador.
// ====================================================================

/**
 * Tipo de props para el componente Carrito
 */
type CarritoProps = {
  cartCount: number;
}

/**
 * Componente Carrito: Muestra el icono y el contador de productos.
 */
const Carrito = ({ cartCount }: CarritoProps) => (
    <div className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
        <ShoppingCart className="w-7 h-7 text-indigo-600" />
        {/* Contador del carrito */}
        <div
            className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full transition-all duration-300 transform"
            // Animación y opacidad basadas en si hay productos en el carrito
            style={{ scale: cartCount > 0 ? 1 : 0.7, opacity: cartCount > 0 ? 1 : 0.5 }}
        >
            {cartCount}
        </div>
    </div>
);

export { Carrito };