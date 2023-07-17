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
          <p>
            {" "}
            Conteste a las siguientes preguntas para crear una oferta de empleo
          </p>
        </div>
        <div className="mx-20 px-20">
          <h2 className="font-bold"> Sección 2/3 - Detalles de la oferta </h2>
          <div className="my-10">
            <label htmlFor="titulo" className="block mb-2">
              {" "}
              Qué rango salarial se ofrece?{" "}
            </label>
            <div className="flex flex-row justify-center align-center text-center">
              <h3>Entre </h3>
              <input
                type="text"
                placeholder="ejemplo: 18"
                id="titulo"
                name="titulo"
                // value={titulo}
                // onChange={handleChange}
                className=" mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
                required
              />
              <h3>€/hora y </h3>
              <input
                type="text"
                placeholder="ejemplo: 22"
                id="titulo"
                name="titulo"
                // value={titulo}
                // onChange={handleChange}
                className=" mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
                required
              />
              <h3>€/hora </h3>
            </div>
          </div>

          <div className="mb-4 flex flex-row justify-center my-10">
            <label htmlFor="jornada">Qué tipo de jornada va a realizar?</label>
            <select
              id="jornada"
              //   value={selectedOption}
              //   onChange={handleSelectChange}
              className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center mx-5"
            >
              <option className="py-2" value="">Seleccione una opción</option>
              <option className="py-2" value="Tiempo Completo">Tiempo Completo</option>
              <option className="py-2" value="Tiempo Parcial">Tiempo Parcial</option>
            </select>
          </div>
          <div className="mb-4 flex flex-row justify-center my-10 ">
            <label htmlFor="jornada">Qué días se va a trabajar?</label>
            <select
              id="jornada"
              //   value={selectedOption}
              //   onChange={handleSelectChange}
              className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center mx-5"
            >
              <option className="py-2" value="">De lunes a viernes</option>
              <option className="py-2" value="Tiempo Completo">Rotativo</option>
             </select>
          </div>
          <div className="my-10 mx-20 px-20">
            <h3 className="font-bold mb-5">Ubicación del empleo</h3>
            <label htmlFor="titulo" className="block mb-1 mt-4"> Provincia
            </label>
            <input
                type="text"
                placeholder="ejemplo: Barcelona"
                id="titulo"
                name="titulo"
                // value={titulo}
                // onChange={handleChange}
                className="w-full mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
                required
              />
               <label htmlFor="titulo" className="block mb-1 mt-4"> Localidad
            </label>
            <input
                type="text"
                placeholder="ejemplo: Molins de Rei"
                id="titulo"
                name="titulo"
                // value={titulo}
                // onChange={handleChange}
                className="w-full mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
                required
              />
               <label htmlFor="titulo" className="block mb-1 mt-4"> Dirección
            </label>
            <input
                type="text"
                placeholder="ejemplo: C/ Pol. ind de la fuente Nº1"
                id="titulo"
                name="titulo"
                // value={titulo}
                // onChange={handleChange}
                className="w-full mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
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
