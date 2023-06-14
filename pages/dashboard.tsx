import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Notificaciones from '../components/Dashboard/Notificaciones';
import Dashboardheader from '../components/Dashboard/Dashboardheader';
import BolsaDeEmpleo from '../components/Dashboard/BolsaDeEmpleo';
import MisOfertas from '../components/Dashboard/MisOfertas';
import ProcesosActivos from '../components/Dashboard/ProcesosActivos';
import PublicarOferta from '../components/Dashboard/PublicarOferta';

type ComponentName = 'Notificaciones' | 'BolsaDeEmpleo' | 'MisOfertas' | 'PublicarOferta' | 'ProcesosActivos';

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState<ComponentName>('Notificaciones');
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
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  const renderComponent = (buttonName: ComponentName, component: React.ReactNode) => {
    if (selectedButton === buttonName) {
      return component;
    }
    return null;
  };

  return (
    <div style={{ margin: '0 20vw' }}>
      <div className="mt-20 display-flex flex-row">
        {(showMenu || selectedButton) && (
          <div className="relative" ref={menuRef}>
            <Image src="/icons/menuicon.png" alt="Menu Icon" width={40} height={40} onClick={handleMenuIconClick} />
            {showMenu && (
              <div className="absolute top-0 left-0 bg-white border border-gray-500">
                <button
                  className={`p-5 bg-gray-100 ${selectedButton === 'Notificaciones' ? 'bg-gray-500' : ''}`}
                  onClick={() => handleButtonClick('Notificaciones')}
                >
                  Notificaciones
                </button>
                <button
                  className={`p-5 bg-gray-100 ${selectedButton === 'BolsaDeEmpleo' ? 'bg-gray-500' : ''}`}
                  onClick={() => handleButtonClick('BolsaDeEmpleo')}
                >
                  Bolsa de Empleo
                </button>
                <button
                  className={`p-5 bg-gray-100 ${selectedButton === 'MisOfertas' ? 'bg-gray-500' : ''}`}
                  onClick={() => handleButtonClick('MisOfertas')}
                >
                  Mis Ofertas
                </button>
                <button
                  className={`p-5 bg-gray-100 ${selectedButton === 'PublicarOferta' ? 'bg-gray-500' : ''}`}
                  onClick={() => handleButtonClick('PublicarOferta')}
                >
                  Publicar Oferta
                </button>
                <button
                  className={`p-5 bg-gray-100 ${selectedButton === 'ProcesosActivos' ? 'bg-gray-500' : ''}`}
                  onClick={() => handleButtonClick('ProcesosActivos')}
                >
                  Procesos activos
                </button>
              </div>
            )}
          </div>
        )}
        {!showMenu && (
          <>
            <button
              className={`p-5 ${selectedButton === 'Notificaciones' ? 'bg-gray-500' : 'bg-gray-100'}`}
              onClick={() => handleButtonClick('Notificaciones')}
            >
              Notificaciones
            </button>
            <button
              className={`p-5 ${selectedButton === 'BolsaDeEmpleo' ? 'bg-gray-500' : 'bg-gray-100'}`}
              onClick={() => handleButtonClick('BolsaDeEmpleo')}
            >
              Bolsa de Empleo
            </button>
            <button
              className={`p-5 ${selectedButton === 'MisOfertas' ? 'bg-gray-500' : 'bg-gray-100'}`}
              onClick={() => handleButtonClick('MisOfertas')}
            >
              Mis Ofertas
            </button>
            <button
              className={`p-5 ${selectedButton === 'PublicarOferta' ? 'bg-gray-500' : 'bg-gray-100'}`}
              onClick={() => handleButtonClick('PublicarOferta')}
            >
              Publicar Oferta
            </button>
            <button
              className={`p-5 ${selectedButton === 'ProcesosActivos' ? 'bg-gray-500' : 'bg-gray-100'}`}
              onClick={() => handleButtonClick('ProcesosActivos')}
            >
              Procesos activos
            </button>
          </>
        )}
      </div>
      {renderComponent('Notificaciones', <Notificaciones />)}
      {renderComponent('BolsaDeEmpleo', <BolsaDeEmpleo />)}
      {renderComponent('MisOfertas', <MisOfertas />)}
      {renderComponent('PublicarOferta', <PublicarOferta />)}
      {renderComponent('ProcesosActivos', <ProcesosActivos />)}
    </div>
  );
}