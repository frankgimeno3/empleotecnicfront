import QueYDonde from "../../../components/Dashboard/BolsaDeEmpleo/QueYDonde";
import FormularioBusquedaAvanzada from "../../../components/Dashboard/BolsaDeEmpleo/FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "../../../components/Dashboard/BolsaDeEmpleo/ListadoOfertasSolicitudes";
import Navbar from "../../../components/Navbar/NavbarIn";

const BolsaDeEmpleo = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-5 pt-5  bg-gray-100">
    <div className="pt-7 pb-3 px-20 bg-white  shadow">
    <h1 className="text-cyan-950 px-10 ml-20 text-xl ">
          Bolsa de empleo</h1>
        <QueYDonde />
        <FormularioBusquedaAvanzada />
      </div>
      <ListadoOfertasSolicitudes />
    </div>
    </>
  );
};

export default BolsaDeEmpleo;
