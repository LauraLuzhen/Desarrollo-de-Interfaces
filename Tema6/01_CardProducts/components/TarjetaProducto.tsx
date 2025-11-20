
import React from 'react'; // Necesario para definir el componente y usar JSX
import { Package, DollarSign } from 'lucide-react'; // Íconos para el producto y el precio
// ====================================================================
// --- SIMULACIÓN DE components/TarjetaProducto.tsx ---
// Este componente gestiona la visualización de un único producto.
// ====================================================================

/**
 * Tipo de props para el Botón Personalizado
 */
type BotonProps = {
  children: React.ReactNode;
  onClick: () => void;
}

/**
 * Componente BotonPersonalizado
 */
const BotonPersonalizado = ({ children, onClick }: BotonProps) => (
  <button
    onClick={onClick}
    className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-[1.01]"
  >
    {children}
  </button>
);

/**
 * Tipo de props para la TarjetaProducto (según tu solicitud)
 */
type Props = {
  name: string;
  price: number;
  image: any; // Se mantiene 'any' según tu solicitud
  onAddToCart: () => void;
};

/**
 * Componente TarjetaProducto: Muestra los detalles de un producto y el botón de acción.
 */
const TarjetaProducto = ({ name, price, image, onAddToCart }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-indigo-500 w-full max-w-sm">
      {/* Imagen del Producto */}
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="w-full h-full object-cover rounded-lg"
          // Placeholder por si la imagen falla
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/150x150/e0e0e0/555?text=Sin+Imagen";
          }}
        />
      </div>

      {/* Detalles del Producto */}
      <div className="text-center w-full">
        {/* Nombre */}
        <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center justify-center">
            <Package className="w-5 h-5 mr-2 text-indigo-600" />
            {name}
        </h3>

        {/* Precio */}
        <p className="text-2xl font-extrabold text-green-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6 mr-1" />
            {price.toFixed(2)}€
        </p>
      </div>

      {/* Botón para Añadir al Carrito */}
      <BotonPersonalizado onClick={onAddToCart}>
        Añadir al Carrito
      </BotonPersonalizado>
    </div>
  );
};

export { TarjetaProducto };

