import QueYDonde from "../../../components/Dashboard/BolsaDeEmpleo/QueYDonde";
import FormularioBusquedaAvanzada from "../../../components/Dashboard/BolsaDeEmpleo/FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "../../../components/Dashboard/BolsaDeEmpleo/ListadoOfertasSolicitudes";
import Navbar from "../../../components/Navbar/NavbarIn";

const BolsaDeEmpleo = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-5 pt-5  bg-gray-100">
    <div className="pt-7  bg-white  shadow">
    <h1 className="text-cyan-950 px-10 ml-20 text-lg ">
          Bolsa de empleo</h1>
        <QueYDonde />
        <FormularioBusquedaAvanzada />
      </div>
      <div className="flex-column mt-2 shadow bg-white min-h-screen mx-20 ">
      <ListadoOfertasSolicitudes />
      </div>
      </div>
    </>
  );
};

export default BolsaDeEmpleo;
