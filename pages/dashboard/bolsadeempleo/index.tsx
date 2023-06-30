import QueYDonde from "../../../components/Dashboard/BolsaDeEmpleo/QueYDonde";
import FormularioBusquedaAvanzada from "../../../components/Dashboard/BolsaDeEmpleo//FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "../../../components/Dashboard/BolsaDeEmpleo//ListadoOfertasSolicitudes";
import Navbar from "../../../components/Navbar/NavbarIn";

const BolsaDeEmpleo = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-6 pb-20 mx-20vw w-full">
      <div className="bg-white mt-10 py-5">
        <h1 className="text-3xl font-bold pt-5 flex justify-center">Bolsa de empleo</h1>
        <QueYDonde />
        <FormularioBusquedaAvanzada />
      </div>
      <ListadoOfertasSolicitudes />
    </div>
    </>
  );
};

export default BolsaDeEmpleo;
