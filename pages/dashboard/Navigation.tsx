import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type ComponentName =
  | "Notificaciones"
  | "BolsaDeEmpleo"
  | "MisOfertas"
  | "MisSolicitudes"
  | "PublicarOferta"
  | "ProcesosActivos";

  export interface NavigationProps {
    selectedButton: ComponentName;
    onButtonClick: (buttonName: ComponentName) => void;
    onLogout: () => Promise<void>;
  }

const Navigation: React.FC<NavigationProps> = (props) => {
    const [selectedButton, setSelectedButton] = useState<ComponentName>(
      "Notificaciones"
    );
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
              selectedButton === "MisSolicitudes"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => handleButtonClick("MisSolicitudes")}
          >
            Mis Solicitudes
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
            className={`bg-opacity-5 text-white rounded-md mr-1 py-2 px-4 hover:bg-white hover:bg-opacity-50 hover:text-cyan-950  hover:cursor-pointer ${
              selectedButton === "ProcesosActivos"
                ? "bg-white bg-opacity-100 text-cyan-950"
                : ""
            }`}
            onClick={() => router.push("/perfil")}
          >
            Mi Perfil
          </button>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navigation;