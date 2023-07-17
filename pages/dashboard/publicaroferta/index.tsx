import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/NavbarIn";
import Pregunta1 from "../../../components/Dashboard/publicaroferta/pregunta1";
import Pregunta2 from "../../../components/Dashboard/publicaroferta/pregunta2";
import Pregunta3 from "../../../components/Dashboard/publicaroferta/pregunta3";
import Pregunta4 from "../../../components/Dashboard/publicaroferta/pregunta4";
import Resultado from "../../../components/Dashboard/publicaroferta/resultado";

const PublicarOferta = () => {
  const [componenteactual, setComponenteActual] = useState("pregunta1");
  const [titulo, settitulo] = useState("");
  const [descripcion, setdescripcion] = useState("")
  const [provincia, setprovincia] = useState("");
  const [localidad, setlocalidad] = useState("");
  const [direccion, setdireccion] = useState("");
  const [margensuperior, setmargensuperior] = useState("");
  const [jornada, setjornada] = useState("");
  const [margeninferior, setmargeninferior] = useState("");
  const [dias, setdias] = useState("");
  const [turno, setturno] = useState("");
  const [trabfestivos, settrabfestivos] = useState(false);
  const [requisitos, setrequisitos] = useState("");
  const [adicional, setadicional] = useState("");

  const renderComponenteActual = () => {
    switch (componenteactual) {
      case "pregunta1":
        return (
          <Pregunta1
            setComponenteActual={setComponenteActual}
            settitulo={settitulo}
            setdescripcion={setdescripcion}
          />
        );

      case "pregunta2":
        return (
          <Pregunta2
            setComponenteActual={setComponenteActual}
            setprovincia={setprovincia}
            setlocalidad={setlocalidad}
            setdireccion={setdireccion}
          />
        );

      case "pregunta3":
        return (
          <Pregunta3
            setComponenteActual={setComponenteActual}
            setmargensuperior={setmargensuperior}
            setjornada={setjornada}
            setmargeninferior={setmargeninferior}
            setdias={setdias}
            setturno={setturno}
            settrabfestivos={settrabfestivos}
          />
        );
      case "pregunta4":
        return (
          <Pregunta4
            setComponenteActual={setComponenteActual}
            setrequisitos={setrequisitos}
            setadicional={setadicional}
          />
        );

      case "Resultado":
        return (
          <Resultado
            titulo={titulo}
            descripcion={descripcion}
            provincia={provincia}
            localidad={localidad}
            direccion={direccion}
            margensuperior={margensuperior}
            jornada={jornada}
            margeninferior={margeninferior}
            dias={dias}
            turno={turno}
            trabfestivos={trabfestivos}
            requisitos={requisitos}
            adicional={adicional}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-5  bg-gray-100">
        <div className="pt-3  bg-white  shadow">
          <h1 className="text-cyan-950 px-10 ml-20 text-lg py-3">
            Publicar Oferta
          </h1>
        </div>
        {renderComponenteActual()}
      </div>
    </div>
  );
};

export default PublicarOferta;
