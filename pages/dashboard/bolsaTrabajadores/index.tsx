import QueYDonde from "../../../components/Dashboard/BolsaDeEmpleo/QueYDonde";
import FormularioBusquedaAvanzada from "../../../components/Dashboard/BolsaDeEmpleo/FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "../../../components/Dashboard/BolsaDeEmpleo/ListadoOfertasSolicitudes";
import Navbar from "../../../components/Navbar/NavbarIn";

const BolsaTrabajadores = () => {
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
      <div className=" mt-2  mx-10 mr-20">
        <div className="flex-column shadow bg-gray-50 min-h-screen mx-20 px-10">
        <ListadoOfertasSolicitudes />
        </div>
      </div>
      </div>
    </>
  );
};

export default BolsaTrabajadores;
