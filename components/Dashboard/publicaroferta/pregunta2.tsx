import React, { useState } from "react";

interface pregunta2Props {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const pregunta2: React.FC<pregunta2Props> = ({ setComponenteActual }) => {
  const handleSeguirClick = () => {
    setComponenteActual("pregunta3");
  };
  const handleSeguirClickBack = () => {
    setComponenteActual("pregunta1");
  };

  return (
    <form className=" mx-20 px-20 bg-white mt-2 py-10">
      <div className="flex flex-col justify-center text-center align-center mx-20 px-20">
        <div className="mb-10">
          <h1 className="font-bold text-3xl">Proceso de creación de ofertas</h1>
          <p> Conteste a las siguientes preguntas para crear una oferta de empleo</p>
        </div>
        <div className="mx-20 px-20">
          <h2 className="font-bold"> Sección 1/3 - Titular de la oferta </h2>
          <div className="mb-4">
            <label htmlFor="titulo" className="block mb-2"> Qué tipo de empleado necesita? </label>
            <input
              type="text"
              placeholder="ejemplo: Operario de fábrica"
              id="titulo"
              name="titulo"
              // value={titulo}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="empresa" className="block mb-2"> En qué departamento trabajará el empleado? </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              placeholder="ejemplo: Extrusión de aluminio industrial"
              // value={empresa}
              // onChange={handleChange}
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              required
            />
          </div>
          <div className="mx-20">
            <button
              className="mt-2 px-6 py-1 mx-1 text-md text-black bg-cyan-700 rounded bg-opacity-40"
              onClick={handleSeguirClickBack}
            >
              ATRÁS
            </button>
            <button
              className="mt-2 px-6 py-1 mx-1  text-md text-black bg-cyan-700 rounded bg-opacity-40"
              onClick={handleSeguirClick}
            >
              SEGUIR
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default pregunta2;
