import { useEffect, useState } from 'react';

export default function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-amber-500'
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 text-white ${colors[type]} px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white opacity-70 hover:opacity-100">&times;</button>
    </div>
  );
}