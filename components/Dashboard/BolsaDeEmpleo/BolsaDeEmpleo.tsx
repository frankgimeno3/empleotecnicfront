import QueYDonde from './QueYDonde'
import FormularioBusquedaAvanzada from './FormularioBusquedaAvanzada'
import ListadoOfertasSolicitudes from './ListadoOfertasSolicitudes'
 
const BolsaDeEmpleo = () => {
  return (
    <div className="bg-gray-200  w-full pt-1">
      <QueYDonde/>
      <FormularioBusquedaAvanzada/>
      <ListadoOfertasSolicitudes/>
    </div>
  );
};

export default BolsaDeEmpleo;