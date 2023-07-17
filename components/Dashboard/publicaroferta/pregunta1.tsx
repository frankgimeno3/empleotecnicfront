import React, { useState } from "react";

interface pregunta1Props {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  settitulo: React.Dispatch<React.SetStateAction<string>>;
}

const useInputState = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  };
};

const Pregunta1: React.FC<pregunta1Props> = ({ setComponenteActual, settitulo }) => {
  const tipoempleadoState = useInputState("");
  const departamentoState = useInputState("");

  const handleSeguirClick = () => {
    const tituloConjunto = `${tipoempleadoState.value} - ${departamentoState.value}`;
    setComponenteActual("pregunta2");
    settitulo(tituloConjunto);
    console.log(tituloConjunto)
  };

  return (
    <form className="mx-20 px-20 bg-white mt-2 py-10">
      <div className="flex flex-col justify-center text-center align-center mx-20 px-20">
        <div className="mb-10">
          <h1 className="font-bold text-3xl">Proceso de creación de ofertas</h1>
          <p>Conteste a las siguientes preguntas para crear una oferta de empleo</p>
        </div>
        <div className="mx-20 px-20">
          <h2 className="font-bold">Sección 1/4 - Titular de la oferta</h2>
          <div className="mb-4">
            <label htmlFor="titulo" className="block mb-2">
              Qué tipo de empleado necesita?
            </label>
            <input
              {...tipoempleadoState}
              placeholder="ejemplo: Operario de fábrica"
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="empresa" className="block mb-2">
              En qué departamento trabajará el empleado?
            </label>
            <input
              {...departamentoState}
              placeholder="ejemplo: Extrusión de aluminio industrial"
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              required
            />
          </div>
          <div className="mx-20">
            <button
              className="mt-2 px-3 py-1 text-md text-black bg-cyan-700 rounded bg-opacity-40"
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

export default Pregunta1;