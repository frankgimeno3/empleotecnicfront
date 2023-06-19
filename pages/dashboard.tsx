import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Notificaciones from "../components/Dashboard/Notificaciones";
import BolsaDeEmpleo from "../components/Dashboard/BolsaDeEmpleo/BolsaDeEmpleo";
import MisOfertas from "../components/Dashboard/MisOfertas/MisOfertas";
import ProcesosActivos from "../components/Dashboard/ProcesosActivos";
import PublicarOferta from "../components/Dashboard/PublicarOferta";
import Link from "next/link";

type ComponentName =
  | "Notificaciones"
  | "BolsaDeEmpleo"
  | "MisOfertas"
  | "PublicarOferta"
  | "ProcesosActivos";

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState<ComponentName>(
    "Notificaciones"
  );

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (buttonName: ComponentName) => {
    setSelectedButton(buttonName);
  };

  const handleMenuIconClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  const renderComponent = (
    buttonName: ComponentName,
    component: React.ReactNode
  ) => {
    if (selectedButton === buttonName) {
      return component;
    }
    return null;
  };

  const isSMorMD = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-cyan-950 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base ">
        <Link href="/dashboard" passHref>
          <button className="bg-opacity-5 text-white rounded-full mr-1 py-2 px-4 border-2 hover:bg-white hover:bg-opacity-50 hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer">
            E
          </button>
        </Link>
        <div className="flex flex-col items-center  font-mono text-sm  ">
          {isSMorMD && (
            <div className="relative" ref={menuRef}>
              <Image
                src="/icons/menuicon.png"
                alt="Menu Icon"
                width={40}
                height={40}
                onClick={handleMenuIconClick}
              />
              {showMenu && (
                <div className="absolute top-0 left-0 bg-white border border-gray-300">
                  <button
                    className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer button-menu ${
                      selectedButton === "Notificaciones" ? "bg-white" : ""
                    }`}
                    onClick={() => handleButtonClick("Notificaciones")}
                  >
                    Notificaciones
                  </button>
                  <button
                    className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer button-menu ${
                      selectedButton === "BolsaDeEmpleo" ? "bg-white" : ""
                    }`}
                    onClick={() => handleButtonClick("BolsaDeEmpleo")}
                  >
                    Bolsa de Empleo
                  </button>
                  <button
                    className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer button-menu ${
                      selectedButton === "MisOfertas" ? "bg-white" : ""
                    }`}
                    onClick={() => handleButtonClick("MisOfertas")}
                  >
                    Mis Ofertas
                  </button>
                  <button
                    className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer button-menu ${
                      selectedButton === "PublicarOferta" ? "bg-white" : ""
                    }`}
                    onClick={() => handleButtonClick("PublicarOferta")}
                  >
                    Publicar Oferta
                  </button>
                  <button
                    className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer button-menu ${
                      selectedButton === "ProcesosActivos" ? "bg-white" : ""
                    }`}
                    onClick={() => handleButtonClick("ProcesosActivos")}
                  >
                    Procesos activos
                  </button>
                </div>
              )}
            </div>
          )}
          {!isSMorMD && (
            <div className="display-flex ">
              <button
                className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
                  selectedButton === "Notificaciones" ? "bg-white bg-opacity-100 text-cyan-950" : ""
                }`}
                onClick={() => handleButtonClick("Notificaciones")}
              >
                Notificaciones
              </button>
              <button
                className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
                  selectedButton === "BolsaDeEmpleo" ? "bg-white bg-opacity-100 text-cyan-950" : ""
                }`}
                onClick={() => handleButtonClick("BolsaDeEmpleo")}
              >
                Bolsa de Empleo
              </button>
              <button
                className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
                  selectedButton === "MisOfertas" ? "bg-white bg-opacity-100 text-cyan-950" : ""
                }`}
                onClick={() => handleButtonClick("MisOfertas")}
              >
                Mis Ofertas
              </button>
              <button
                className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
                  selectedButton === "PublicarOferta" ? "bg-white bg-opacity-100 text-cyan-950" : ""
                }`}
                onClick={() => handleButtonClick("PublicarOferta")}
              >
                Publicar Oferta
              </button>
              <button
                className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
                  selectedButton === "ProcesosActivos" ? "bg-white bg-opacity-100 text-cyan-950" : ""
                }`}
                onClick={() => handleButtonClick("ProcesosActivos")}
              >
                Procesos activos
              </button>
            </div>
          )}
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




