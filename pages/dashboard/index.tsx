import React, { useState } from "react";
import { useRouter } from "next/router";
import Navigation, { NavigationProps } from "./Navigation";
import Notificaciones from "../../components/Dashboard/Notificaciones";
import BolsaDeEmpleo from "../../components/Dashboard/BolsaDeEmpleo/BolsaDeEmpleo";
import MisOfertas from "../../components/Dashboard/MisOfertas/MisOfertas";
import MisSolicitudes from "../../components/Dashboard/MisSolicitudes/MisSolicitudes";
import ProcesosActivos from "../../components/Dashboard/ProcesosActivos/ProcesosActivos";
import PublicarOferta from "../../components/Dashboard/PublicarOferta";

type ComponentName =
  | "Notificaciones"
  | "BolsaDeEmpleo"
  | "MisOfertas"
  | "MisSolicitudes"
  | "PublicarOferta"
  | "ProcesosActivos";

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState<ComponentName>("Notificaciones");
  const router = useRouter();

  const handleButtonClick = (buttonName: ComponentName) => {
    setSelectedButton(buttonName);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.status === 200) {
        router.push("/login");
      } else {
        console.error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
    router.push("/");
  };

  return (
    <>
      <Navigation
        selectedButton={selectedButton}
        onButtonClick={handleButtonClick}
        onLogout={handleLogout}
      />
      <div className="pt-3 flex flex-col items-center  font-mono text-sm bg-gradient-to-r from-gray-700 to-cyan-950">
        {selectedButton === "Notificaciones" && <Notificaciones />}
        {selectedButton === "BolsaDeEmpleo" && <BolsaDeEmpleo />}
        {selectedButton === "MisOfertas" && <MisOfertas />}
        {selectedButton === "PublicarOferta" && <PublicarOferta />}
        {selectedButton === "ProcesosActivos" && <ProcesosActivos />}
        {selectedButton === "MisSolicitudes" && <MisSolicitudes />}

        <style jsx>{`
          .button-menu {
            width: 0%;
          }
        `}</style>
      </div>
    </>
  );
}