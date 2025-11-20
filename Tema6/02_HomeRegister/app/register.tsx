import React from 'react';
// Íconos de lucide-react eliminados, usando SVG en línea

/**
 * Props for the Register screen.
 */
type RegisterScreenProps = {
  onBack: () => void; // Función para volver a la pantalla de Login
};

/**
 * Pantalla de Registro
 * Muestra un texto simple y la opción de volver, con el título "Nuevo usuario" en el Header.
 */
const RegisterScreen: React.FC<RegisterScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full p-4 bg-gray-50">
      {/* Header simulado con el título "Nuevo usuario" y botón de Back */}
      <header className="flex items-center p-4 bg-white shadow-md rounded-xl mb-6">
        <button 
            onClick={onBack} 
            className="p-2 mr-4 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          {/* SVG para la flecha de Atrás (reemplaza ArrowLeft) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          Nuevo usuario
        </h1>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Página de registro</h2>
        <p className="mt-2 text-gray-500">Aquí iría el formulario completo para crear una cuenta.</p>
      </div>
    </div>
  );
};

export default RegisterScreen;