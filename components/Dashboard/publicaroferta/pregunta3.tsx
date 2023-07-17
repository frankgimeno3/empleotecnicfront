import React, { useState } from "react";

interface pregunta3Props {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setmargensuperior: React.Dispatch<React.SetStateAction<string>>;
  setjornada: React.Dispatch<React.SetStateAction<string>>;
  setmargeninferior: React.Dispatch<React.SetStateAction<string>>;
  setdias: React.Dispatch<React.SetStateAction<string>>;
  setturno: React.Dispatch<React.SetStateAction<string>>;
  settrabfestivos: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pregunta3: React.FC<pregunta3Props> = ({
  setComponenteActual,
  setmargensuperior,
  setjornada,
  setmargeninferior,
  setdias,
  setturno,
  settrabfestivos,
}) => {
  const [margensuperior, setMargenSuperior] = useState("");
  const [margeninferior, setMargenInferior] = useState("");
  const [jornada, setJornada] = useState("");
  const [dias, setDias] = useState("");
  const [turno, setTurno] = useState("");
  const [trabfestivos, setTrabFestivos] = useState(false);

  const handleSeguirClick = () => {
    setComponenteActual("pregunta4");
    setmargensuperior(margensuperior);
    setjornada(jornada);
    setmargeninferior(margeninferior);
    setdias(dias);
    setturno(turno);
    settrabfestivos(trabfestivos);
  };

  const handleSeguirClickBack = () => {
    setComponenteActual("pregunta2");
  };

  return (
    <form className="mx-20 px-20 bg-white mt-2 py-10">
      <div className="flex flex-col justify-center text-center align-center mx-20 px-20">
        <div className="mb-10">
          <h1 className="font-bold text-3xl">Proceso de creación de ofertas</h1>
          <p>Conteste a las siguientes preguntas para crear una oferta de empleo</p>
        </div>
        <div className="mx-20 px-20">
          <h2 className="font-bold"> Sección 3/4 - Detalles de la oferta </h2>
          <div className="my-10">
            <label htmlFor="titulo" className="block mb-2">
              Qué rango salarial se ofrece?
            </label>
            <div className="flex flex-row justify-center align-center text-center">
              <h3>Entre </h3>
              <input
                placeholder="ejemplo: 18"
                value={margensuperior}
                onChange={(e) => setMargenSuperior(e.target.value)}
                className="mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              />
              <h3>€/hora y </h3>
              <input
                placeholder="ejemplo: 22"
                value={margeninferior}
                onChange={(e) => setMargenInferior(e.target.value)}
                className="mx-5 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center"
              />
              <h3>€/hora </h3>
            </div>
          </div>

          <div className="mb-4 flex flex-row justify-center my-10">
            <label htmlFor="jornada">Qué tipo de jornada va a realizar?</label>
            <select
              value={jornada}
              onChange={(e) => setJornada(e.target.value)}
              className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center mx-5"
            >
              <option className="py-2" value="">
                Seleccione una opción
              </option>
              <option className="py-2" value="Tiempo Completo">
                Tiempo Completo
              </option>
              <option className="py-2" value="Tiempo Parcial">
                Tiempo Parcial
              </option>
            </select>
          </div>
          <div className="mb-4 flex flex-row justify-center my-10 ">
            <label htmlFor="dias">Qué días se va a trabajar?</label>
            <select
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center mx-5"
            >
              <option className="py-2" value="De lunes a viernes">
                De lunes a viernes
              </option>
              <option className="py-2" value="Rotativo">
                Rotativo
              </option>
            </select>
          </div>

          <div className="mb-4 flex flex-row justify-center my-10 ">
            <label htmlFor="turno">Qué tipo de turno se va a aplicar?</label>
            <select
              value={turno}
              onChange={(e) => setTurno(e.target.value)}
              className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 text-center mx-5"
            >
              <option className="py-2" value="Diurno">
                Diurno
              </option>
              <option className="py-2" value="Nocturno">
                Nocturno
              </option>
              <option className="py-2" value="Mañanas y tardes">
                Mañanas y tardes
              </option>
              <option className="py-2" value="Rotativo">
                Rotativo
              </option>
            </select>
            <h3 className="checkbox-label">Incluye fines de semana o festivos?</h3>
            <input
              type="checkbox"
              checked={trabfestivos}
              onChange={(e) => setTrabFestivos(e.target.checked)}
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

export default Pregunta3;