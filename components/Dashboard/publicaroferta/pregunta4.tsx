import React from "react";

interface pregunta4Props {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setrequisitos: React.Dispatch<React.SetStateAction<string>>;
  setadicional: React.Dispatch<React.SetStateAction<string>>;
}

interface InputState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const useInputState = (initialValue: string): InputState => {
  const [value, setValue] = React.useState<string>(initialValue);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(e.target.value),
  };
};

const Pregunta4: React.FC<pregunta4Props> = ({
  setComponenteActual,
  setrequisitos,
  setadicional,
}) => {
  const requisitos = useInputState("");
  const adicional = useInputState("");

  const handleSeguirClick = () => {
    setComponenteActual("Resultado");
    setrequisitos(requisitos.value);
    setadicional(adicional.value);
  };

  const handleSeguirClickBack = () => {
    setComponenteActual("pregunta3");
  };

  return (
    <form className="mx-20 px-20 bg-white mt-2 py-10">
      <div className="flex flex-col justify-center text-center align-center mx-20 px-20">
        <div className="mb-10">
          <h1 className="font-bold text-3xl">Proceso de creación de ofertas</h1>
          <p>Conteste a las siguientes preguntas para crear una oferta de empleo</p>
        </div>
        <div className="mx-20 px-20">
          <h2 className="font-bold">Sección 4/4 - Requisitos y especificaciones</h2>
          <div className="my-10">
            <label htmlFor="requisitos" className="block mb-2">
              Qué requisitos debe cumplir el perfil que busca?
            </label>
            <div className="flex flex-row justify-center align-center text-center">
              <textarea
                id="requisitos" // Added an id for the first textarea
                className="rounded-lg shadow-lg p-4 w-96 h-24 mt-2 text-xs"
                required
                {...requisitos}
              />
            </div>
          </div>
          <div className="my-10">
            <label htmlFor="adicional" className="block mb-2">
              Especificaciones adicionales del empleo
            </label>
            <div className="flex flex-row justify-center align-center text-center">
              <textarea
                id="adicional" // Added an id for the second textarea
                className="rounded-lg shadow-lg p-4 w-96 h-24 mt-2 text-xs"
                required
                {...adicional}
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
              className="mt-2 px-6 py-1 mx-1 text-md text-black bg-cyan-700 rounded bg-opacity-40"
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

export default Pregunta4;