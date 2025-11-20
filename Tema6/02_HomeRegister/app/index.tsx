import React, { useState } from 'react';

// ====================================================================
// --- COMPONENTES REUTILIZABLES (Originalmente en login.tsx) ---
// ====================================================================

/**
 * Props para el Botón Personalizado.
 */
type ButtonProps = {
  text: string;
  onClick: () => void;
  primary?: boolean;
};

/**
 * Componente BotonPersonalizado
 * Simula un pressable con bordes redondeados y texto configurable.
 */
const BotonPersonalizado: React.FC<ButtonProps> = ({ text, onClick, primary = true }) => {
  const baseStyle = "w-full py-3 rounded-xl font-bold transition-colors duration-200 shadow-md";
  const primaryStyle = "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${primaryStyle}`}
    >
      {text}
    </button>
  );
};

/**
 * Props para el Contenedor de Formulario.
 */
type ContainerProps = {
  children: React.ReactNode;
};