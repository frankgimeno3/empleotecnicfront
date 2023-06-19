import QueYDonde from './QueYDonde'
import FormularioBusquedaAvanzada from './FormularioBusquedaAvanzada'
import ListadoOfertasSolicitudes from './ListadoOfertasSolicitudes'
 
const BolsaDeEmpleo = () => {
  return (
    <div className="mt-10 p-20  mx-10vw w-full">
      <QueYDonde/>
      <FormularioBusquedaAvanzada/>
      <ListadoOfertasSolicitudes/>
    </div>
  );
};

export default BolsaDeEmpleo;