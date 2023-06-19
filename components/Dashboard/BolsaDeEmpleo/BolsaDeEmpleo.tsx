import QueYDonde from "./QueYDonde";
import FormularioBusquedaAvanzada from "./FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "./ListadoOfertasSolicitudes";

const BolsaDeEmpleo = () => {
  return (
    <div className="mt-6 pb-20 mx-20vw w-full">
      <div className="bg-white mt-10 py-5">
        <QueYDonde />
        <FormularioBusquedaAvanzada />
      </div>
      <ListadoOfertasSolicitudes />
    </div>
  );
};

export default BolsaDeEmpleo;
