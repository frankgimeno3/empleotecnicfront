import React from 'react';

const QueYDonde = () => {
  return (
    <div className="flex justify-center items-center my-10 ">
      <div className="flex space-x-4">
        <div className="rounded border border-gray-500 bg-white p-2">
          <input
            className="w-64 outline-none placeholder-gray-500"
            type="text"
            placeholder="Introduzca Palabras Clave"
          />
        </div>
        <div className="rounded border border-gray-500 bg-white p-2">
          <input
            className="w-64 outline-none placeholder-gray-500"
            type="text"
            placeholder="Localización"
          />
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Buscar Ofertas
        </button>
      </div>
    </div>
  );
};

export default QueYDonde;