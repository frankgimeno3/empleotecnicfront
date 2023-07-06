import React, { useState } from "react";
import QueYDonde from "../../../components/Dashboard/BolsaDeEmpleo/QueYDonde";
import FormularioBusquedaAvanzada from "../../../components/Dashboard/BolsaDeEmpleo/FormularioBusquedaAvanzada";
import ListadoOfertasSolicitudes from "../../../components/Dashboard/BolsaDeEmpleo/ListadoOfertasSolicitudes";
import Navbar from "../../../components/Navbar/NavbarIn";

const Bolsatrabajadores = () => {
  const [showBolsaTrabajadores, setShowBolsaTrabajadores] = useState(true);

  const handleBolsaTrabajadoresClick = () => {
    setShowBolsaTrabajadores(true);
  };

  const handleOfertasEmpresasClick = () => {
    setShowBolsaTrabajadores(false);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <button onClick={handleBolsaTrabajadoresClick}>
          Bolsa de trabajadores
        </button>
        <button onClick={handleOfertasEmpresasClick}>
          Ofertas de otras empresas
        </button>
      </div>
      <div className="mt-5 pt-5 bg-gray-100">
        
        <div className="mt-2 mx-10 mr-20">
          <div className="flex-column shadow bg-gray-50 min-h-screen mx-20 px-10">
            {showBolsaTrabajadores ? (
              <>
                <div>
                  <h1>contenido bolsa trabajadores</h1>
                  <p>contenido</p>
                </div>
              </>
            ) : (
                <div className="pt-7 bg-white shadow">
                   <h1 className="text-cyan-950 px-10 ml-20 text-lg">
                     Ofertas de empleo otras empresas
                  </h1>
                 <QueYDonde />
                <FormularioBusquedaAvanzada />
              <ListadoOfertasSolicitudes />
                </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Bolsatrabajadores;