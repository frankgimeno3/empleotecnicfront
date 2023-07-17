import React, { Component, FormEvent } from "react";
import Navbar from "../../../components/Navbar/NavbarIn";
import pregunta1 from "../../../components/Dashboard/publicaroferta/pregunta1"
import pregunta2 from "../../../components/Dashboard/publicaroferta/pregunta2"
import pregunta3 from "../../../components/Dashboard/publicaroferta/pregunta3"
import resultado  from "../../../components/Dashboard/publicaroferta/resultado"

const PublicarOferta = () => {
 
    return (
      <div>
      <Navbar/>
      <div className="mt-5 pt-5  bg-gray-100">
    <div className="pt-3  bg-white  shadow">
    <h1 className="text-cyan-950 px-10 ml-20 text-lg py-3">
          Publicar Oferta</h1>
          </div>
        
        </div>
       </div>
    );
  
}


export default PublicarOferta;
