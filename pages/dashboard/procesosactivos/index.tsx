import TarjetaCandidato from "../../../components/Dashboard/ProcesosActivos/TarjetaCandidato";

const ProcesosActivos = () => {
  return (
    <div className="mt-6 mx-10vw w-full bg-gradient-to-r from-gray-700 to-cyan-950">
      <div className="mt-10 mx-20 p-20 bg-gray-200 ">
        <h1 className="text-black text-3xl">
          Procesos Activos
        </h1>
        <div className="bg-gray-100 mt-10 p-5">
          <h2 className="text-black text-2xl">Oferta 1</h2>
          <div className="flex flex-wrap">
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
          </div>
        </div>
        <div className="bg-gray-100 mt-10 p-5">
          <h2 className="text-black text-2xl">Oferta 2</h2>
          <div className="flex flex-wrap">
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
            <TarjetaCandidato />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcesosActivos;
