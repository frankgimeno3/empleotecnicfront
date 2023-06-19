import QueYDonde from "./QueYDonde";
import FormularioBusquedaAvanzada from "./FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "./ListadoOfertasSolicitudes";

const BolsaDeEmpleo = () => {
  return (
    <div className="mt-20 pb-10 pb-20 mx-20vw w-full">
      <div className="bg-white py-5">
        <QueYDonde />
        <FormularioBusquedaAvanzada />
      </div>
      <ListadoOfertasSolicitudes />
    </div>
  );
};

export default BolsaDeEmpleo;
