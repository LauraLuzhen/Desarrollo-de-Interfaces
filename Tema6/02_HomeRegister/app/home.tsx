import React from 'react';

/**
 * Pantalla de Inicio (Home)
 * Muestra el mensaje de logueo exitoso.
 */
const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <h1 className="text-4xl font-extrabold text-green-700 text-center">
        ¡Te has logueado correctamente!
      </h1>
      <p className="mt-4 text-lg text-gray-600">Bienvenido a la aplicación.</p>
    </div>
  );
};

export default HomeScreen;