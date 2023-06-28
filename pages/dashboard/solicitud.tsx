import { useState, FormEvent } from "react";
import OfferCard2 from "../../components/Dashboard/BolsaDeEmpleo/Offercard2";

const Solicitud = () => {
  const [showForm, setShowForm] = useState(false);

  const handleInsertarManualmente = () => {
    setShowForm(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario
  };

  return (
    <div className="mt-6 mx-20 bg-gradient-to-r from-gray-700 to-cyan-950">
      <div className="mt-10 py-20 bg-gray-200 pt-1">
        <h1 className="text-3xl mt-10 ml-20 font-bold">
          Crear nueva solicitud de empleo
        </h1>
        <h2 className="text-2xl mt-10 ml-20 font-bold">Resumen de la oferta</h2>
        <OfferCard2 />
        <h2 className="text-2xl mt-10 ml-20 font-bold">
          Carta de presentación
        </h2>
        <textarea className="mt-3 ml-20 w-96 h-40" />
        <h2 className="text-2xl mt-10 ml-20 font-bold">
          Datos del solicitante
        </h2>
        <div className="flex justify-center mt-3">
          <button
            className="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("Autocompletar con datos del perfil")}
          >
            Autocompletar con datos del perfil
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleInsertarManualmente}
          >
            Insertar datos manualmente
          </button>
        </div>
        {showForm && (
          <>
            <form className="mt-6 ml-20" onSubmit={handleSubmit}>
              <div className="mt-10">
                <label>
                  Nombre y apellidos:
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Nacionalidad:
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Sexo:
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Documento de identidad:
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Permiso de trabajo:
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Disponibilidad inmediata?
                  <input
                    type="text"
                    className="rounded-lg shadow-lg p-2"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Estudios:
                  <textarea
                    className="rounded-lg shadow-lg p-2 w-96 h-20"
                    required
                  />
                </label>
              </div>
              <div className="mt-10">
                <label>
                  Experiencia anterior:
                  <textarea
                    className="rounded-lg shadow-lg p-2 w-96 h-20"
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar solicitud
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Solicitud;