import OfertaSolicitada from "../../../components/Dashboard/MisSolicitudes/OfertaSolicitada";
import Navbar from "../../../components/Navbar/NavbarIn";

const MisSolicitudes = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 pt-5  bg-gray-100">
        <div className="pt-3  bg-white  shadow">
          <h1 className="text-cyan-950 px-10 ml-20 text-lg py-3">
            Ofertas a las que has mandado solicitudes
          </h1>
        </div>

        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
      </div>
    </>
  );
};

export default MisSolicitudes;
