import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const NavbarIn: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Notificaciones");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath === "/dashboard") {
      setSelectedButton("Notificaciones");
    } else if (
      currentPath === "/dashboard/bolsadeempleo" ||
      currentPath === "/dashboard/solicitud"
    ) {
      setSelectedButton("BolsaDeEmpleo");
    } else if (
      currentPath === "/dashboard/bolsatrabajadores" ||
      currentPath === "/dashboard/bolsatrabajadores"
    ) {
      setSelectedButton("Bolsatrabajadores");
    } else if (currentPath === "/dashboard/misofertas") {
      setSelectedButton("MisOfertas");
    } else if (currentPath === "/dashboard/missolicitudes") {
      setSelectedButton("MisSolicitudes");
    } else if (currentPath === "/dashboard/publicaroferta") {
      setSelectedButton("PublicarOferta");
    } else if (currentPath === "/dashboard/procesosactivos") {
      setSelectedButton("ProcesosActivos");
    } else if (currentPath === "/perfil") {
      setSelectedButton("MiPerfil");
    } else if (currentPath === "/perfil2") {
      setSelectedButton("MiPerfil2");
    }
  }, [router.pathname]);

  

  return (
    <nav className="flex flex-col  bg-cyan-950 bg-opacity-60 backdrop-filter backdrop-blur-lg items-center justify-left px-4 py-2 md:text-xs xl:text-base">
       
      <div className="flex flex-col">
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "BolsaDeEmpleo"
              ? "bg-white text-cyan-950 bg-opacity-50"
              : ""
          }`}
          onClick={() => router.push("/dashboard/bolsadeempleo")}
        >
          Bolsa de Empleo
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "Bolsatrabajadores"
              ? "bg-white text-cyan-950 bg-opacity-50"
              : ""
          }`}
          onClick={() => router.push("/dashboard/bolsatrabajadores")}
        >
          Bolsa de Trabajadores
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "MisOfertas"
              ? "bg-white bg-opacity-50 text-cyan-950 "
              : ""
          }`}
          onClick={() => router.push("/dashboard/misofertas")}
        >
          Mis Ofertas
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "MisSolicitudes"
              ? "bg-white bg-opacity-50 text-cyan-950 "
              : ""
          }`}
          onClick={() => router.push("/dashboard/missolicitudes")}
        >
          Mis Solicitudes
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "PublicarOferta"
              ? "bg-white bg-opacity-50 text-cyan-950"
              : ""
          }`}
          onClick={() => router.push("/dashboard/publicaroferta")}
        >
          Publicar Oferta
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "ProcesosActivos"
              ? "bg-white bg-opacity-50 text-cyan-950"
              : ""
          }`}
          onClick={() => router.push("/dashboard/procesosactivos")}
        >
          Procesos activos
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "MiPerfil"
              ? "bg-white bg-opacity-50 text-cyan-950"
              : ""
          }`}
          onClick={() => router.push("/perfil")}
        >
          Mi Perfil
        </button>
        <button
          style={{ fontSize: "0.60rem" }}
          className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
            selectedButton === "MiPerfil2"
              ? "bg-white bg-opacity-50 text-cyan-950"
              : ""
          }`}
          onClick={() => router.push("/perfil2")}
        >
          Mi Perfil2
        </button>
 
      </div>
    </nav>
  );
};

export default NavbarIn;
