import React, { useState } from "react";

interface pregunta4Props {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
}

const pregunta4: React.FC<pregunta4Props> = ({ setComponenteActual }) => {
  const handleSeguirClick = () => {
    setComponenteActual("resultado");
  };
  const handleSeguirClickBack = () => {
    setComponenteActual("pregunta3");
  };

  return (
    <form className=" mx-20 px-20 bg-white mt-2 py-10">
    <div className="flex flex-col justify-center text-center align-center mx-20 px-20">
      <div className="mb-10">
        <h1 className="font-bold text-3xl">Proceso de creación de ofertas</h1>
        <p>
          {" "}
          Conteste a las siguientes preguntas para crear una oferta de empleo
        </p>
      </div>
      <div className="mx-20 px-20">
        <h2 className="font-bold"> Sección 4/4 - Requisitos y especificaciones </h2>
        <div className="my-10">
          <label htmlFor="titulo" className="block mb-2">
            {" "}
            Qué requisitos debe cumplir el perfil que busca?{" "}
          </label>
          <div className="flex flex-row justify-center align-center text-center">
          <textarea
                    className="rounded-lg shadow-lg p-4 w-96 h-24 mt-2 text-xs"
                    required
                  />
          </div>
        </div>
        <div className="my-10">
          <label htmlFor="titulo" className="block mb-2">
            {" "}
            Especificaciones adicionales del empleo{" "}
          </label>
          <div className="flex flex-row justify-center align-center text-center  ">
          <textarea
                    className="rounded-lg shadow-lg p-4 w-96 h-24 mt-2 text-xs"
                    required
                  />
          </div>
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

export default pregunta4;
