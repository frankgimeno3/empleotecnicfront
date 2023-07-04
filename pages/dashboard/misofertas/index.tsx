import OfertaSolicitada from "../../../components/Dashboard/MisSolicitudes/OfertaSolicitada";
import Navbar from "../../../components/Navbar/NavbarIn";

const MisOfertas = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 pt-5  bg-gray-100">
        <div className="pt-3  bg-white  shadow">
          <h1 className="text-cyan-950 px-10 ml-20 text-lg py-3 pb-3.5">
            Ofertas publicadas
          </h1>
        </div>


        <div className="flex flex-row bg-white max-h-screen overflow-hidden mx-20 my-2 ">
          <div className="flex flex-col w-1/2 bg-gray-300">
            <div className="bg-white shadow">
              <h3
                className="text-black font-bold ml-5 text-xs pt-5 pb-2 "
                style={{ fontSize: "0.75rem" }}
              >
                Resumen Solicitudes enviadas
              </h3>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
              <div className=" mb-1 shadow w-50vw bg-stone-100 block px-10 py-2.5 relative text-sm hover:bg-stone-200 ">
                <h2 className="text-black font-bold text-xs">
                  Operario de Fábrica - Extrusión de Aluminio Industrial
                </h2>
                <h3 className="text-black text-xs">Estado: Esperando respuesta de la empresa</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 max-h-screen shadow">
            <h3
              className="text-black font-bold ml-5 text-xs pt-5 pb-2 "
              style={{ fontSize: "0.75rem" }}
            >
              Detalle Solicitudes enviadas
            </h3>
            <div className="overflow-scroll">
              <div className="flex flex-col justify-center items-center p-2 bg-gray-200 ">
              <OfertaSolicitada />
               
              </div>
            </div>
          </div>
        </div>
      </div>        
    </>
  );
};

export default MisOfertas;
