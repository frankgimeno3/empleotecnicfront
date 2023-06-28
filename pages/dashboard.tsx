import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Notificaciones from "../components/Dashboard/Notificaciones";
import BolsaDeEmpleo from "../components/Dashboard/BolsaDeEmpleo/BolsaDeEmpleo";
import MisOfertas from "../components/Dashboard/MisOfertas/MisOfertas";
import ProcesosActivos from "../components/Dashboard/ProcesosActivos/ProcesosActivos";
import PublicarOferta from "../components/Dashboard/PublicarOferta";
import Link from "next/link";
import { useRouter } from "next/router";

type ComponentName =
  | "Notificaciones"
  | "BolsaDeEmpleo"
  | "MisOfertas"
  | "PublicarOferta"
  | "ProcesosActivos";

export default function Dashboard() {
  const [selectedButton, setSelectedButton] =
    useState<ComponentName>("Notificaciones");
  const router = useRouter();

  const renderComponent = (
    buttonName: ComponentName,
    component: React.ReactNode
  ) => {
    if (selectedButton === buttonName) {
      return component;
    }
    return null;
  };

  const handleButtonClick = (buttonName: ComponentName) => {
    setSelectedButton(buttonName);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include", // Para enviar las cookies al servidor
      });

      if (res.status === 200) {
        // Se ha cerrado sesión con éxito
        router.push("/login"); // Redirige al usuario a la página de inicio de sesión
      } else {
        // Manejar el caso de error si no se pudo cerrar sesión
        console.error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
    router.push("/");
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500 bg-opacity-25 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base">
        <div className="display-flex ">
          <button
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "Notificaciones"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("Notificaciones")}
          >
            Notificaciones
          </button>
          <button
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "BolsaDeEmpleo"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("BolsaDeEmpleo")}
          >
            Bolsa de Empleo
          </button>
          <button
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "MisOfertas"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("MisOfertas")}
          >
            Mis Ofertas
          </button>
          <button
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "PublicarOferta"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("PublicarOferta")}
          >
            Publicar Oferta
          </button>
          <button
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "ProcesosActivos"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("ProcesosActivos")}
          >
            Procesos activos
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
      <div className="pt-3 flex flex-col items-center  font-mono text-sm bg-gradient-to-r from-gray-700 to-cyan-950 ">
        {renderComponent("Notificaciones", <Notificaciones />)}
        {renderComponent("BolsaDeEmpleo", <BolsaDeEmpleo />)}
        {renderComponent("MisOfertas", <MisOfertas />)}
        {renderComponent("PublicarOferta", <PublicarOferta />)}
        {renderComponent("ProcesosActivos", <ProcesosActivos />)}
        <style jsx>{`
          .button-menu {
            width: 0%;
          }
        `}</style>
      </div>
    </>
  );
}
