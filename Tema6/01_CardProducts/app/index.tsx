
// ====================================================================
// --- SIMULACIÓN DE index.tsx (Componente Principal App) ---
// Este componente gestiona el estado global y renderiza los componentes modulares.
// ====================================================================

import React, { useState } from 'react'; // Necesario para el componente principal y el estado (useState)

// Importaciones de los componentes que creaste:
import { TarjetaProducto } from '../components/TarjetaProducto';
import { Carrito } from '../components/Carrito';

/**
 * Interfaz para el modelo de datos de los productos.
 */
interface IProducto {
    id: number;
    name: string;
    price: number;
    image: string;
}

/**
 * Componente Principal de la Aplicación (simula la página index.tsx).
 */
const App: React.FC = () => {
  // Estado para el contador del carrito
  const [cartCount, setCartCount] = useState<number>(0);

  // Función que se pasa a las tarjetas para incrementar el contador del carrito
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  // Datos de los cuatro productos
  const products: IProducto[] = [
    {
      id: 1,
      name: "Auriculares Inalámbricos",
      price: 89.99,
      image: "https://placehold.co/150x150/1d4ed8/ffffff?text=Auriculares",
    },
    {
      id: 2,
      name: "Teclado Mecánico RGB",
      price: 125.50,
      image: "https://placehold.co/150x150/065f46/ffffff?text=Teclado",
    },
    {
      id: 3,
      name: "Ratón Ergonómico Pro",
      price: 35.00,
      image: "https://placehold.co/150x150/9d174d/ffffff?text=Ratón",
    },
    {
      id: 4,
      name: "Monitor Curvo 27''",
      price: 349.99,
      image: "https://placehold.co/150x150/b91c1c/ffffff?text=Monitor",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      {/* Encabezado con Carrito de Compras */}
      <header className="bg-white shadow-md rounded-xl p-4 mb-8 sticky top-0 z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-3xl font-extrabold text-indigo-700">
            Tienda Virtual
          </h1>
          
          {/* Componente Carrito reutilizable */}
          <Carrito cartCount={cartCount} />
        </div>
      </header>

      {/* Título de la Sección */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Nuestros Productos Destacados
      </h2>

      {/* Grid de Productos (Renderiza las cuatro tarjetas) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <TarjetaProducto
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart} // Pasa la función para incrementar el contador
          />
        ))}
      </div>
      
      {/* Nota de la aplicación */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Haga click en "Añadir al Carrito" en cualquiera de las tarjetas para actualizar el contador del carrito en el encabezado.</p>
      </footer>
    </div>
  );
};

export default App;
// --- FIN SIMULACIÓN DE index.tsx ---