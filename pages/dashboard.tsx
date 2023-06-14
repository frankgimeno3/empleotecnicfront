import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Notificaciones from '../components/Dashboard/Notificaciones';
import BolsaDeEmpleo from '../components/Dashboard/BolsaDeEmpleo';
import MisOfertas from '../components/Dashboard/MisOfertas';
import ProcesosActivos from '../components/Dashboard/ProcesosActivos';
import PublicarOferta from '../components/Dashboard/PublicarOferta';

type ComponentName = 'Notificaciones' | 'BolsaDeEmpleo' | 'MisOfertas' | 'PublicarOferta' | 'ProcesosActivos';

export default function Dashboard() {
    const [selectedButton, setSelectedButton] = useState<ComponentName>('Notificaciones'); 

    const [showMenu, setShowMenu] = useState(false); 
    // Define un estado para controlar la visibilidad del menú, inicializado como falso.
    
    const menuRef = useRef<HTMLDivElement>(null); 
    // Crea una referencia mutable a un elemento div en el DOM.
    
    const handleButtonClick = (buttonName: ComponentName) => { 
      setSelectedButton(buttonName); 
    };
    
    const handleMenuIconClick = () => { 
    // Define una función para manejar el clic en el icono del menú.
      setShowMenu(!showMenu); 
      // Invierte el estado de visibilidad del menú.
    };
    
    const handleClickOutsideMenu = (event: MouseEvent) => { 
        // Define una función para manejar el clic fuera del menú.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { 
        // Comprueba si se hizo clic fuera del menú utilizando la referencia al elemento div.
        setShowMenu(false); 
        // Oculta el menú estableciendo el estado de visibilidad en falso.
      }
    };
    
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutsideMenu); 
      // Agrega un event listener para el evento 'mousedown' en el documento, utilizando la función handleClickOutsideMenu para manejarlo.
      return () => {
        document.removeEventListener('mousedown', handleClickOutsideMenu); 
        // Elimina el event listener para el evento 'mousedown' cuando el componente se desmonta.
      };
    }, []);
    
    const renderComponent = (buttonName: ComponentName, component: React.ReactNode) => { 
      if (selectedButton === buttonName) { 
        return component; 
      }
      return null; 
    };

    const isSMorMD = typeof window !== 'undefined' && window.innerWidth < 768;

    
  return (
    <div style={{ margin: '0 20vw' }}>
      <div className="mt-20 display-flex flex-row">
        {(isSMorMD && (
          <div className="relative" ref={menuRef}>
            <Image src="/icons/menuicon.png" alt="Menu Icon" width={40} height={40} onClick={handleMenuIconClick} />
            {showMenu && (
              <div className="absolute top-0 left-0 bg-white border border-gray-500">
                <button className={`p-5 bg-gray-100 ${selectedButton === 'Notificaciones' ? 'bg-gray-500' : ''}`} onClick={() => handleButtonClick('Notificaciones')} >
                  Notificaciones
                </button>
                <button className={`p-5 bg-gray-100 ${selectedButton === 'BolsaDeEmpleo' ? 'bg-gray-500' : ''}`} onClick={() => handleButtonClick('BolsaDeEmpleo')} >
                  Bolsa de Empleo
                </button>
                <button className={`p-5 bg-gray-100 ${selectedButton === 'MisOfertas' ? 'bg-gray-500' : ''}`} onClick={() => handleButtonClick('MisOfertas')} >
                  Mis Ofertas
                </button>
                <button className={`p-5 bg-gray-100 ${selectedButton === 'PublicarOferta' ? 'bg-gray-500' : ''}`} onClick={() => handleButtonClick('PublicarOferta')}>
                  Publicar Oferta
                </button>
                <button className={`p-5 bg-gray-100 ${selectedButton === 'ProcesosActivos' ? 'bg-gray-500' : ''}`} onClick={() => handleButtonClick('ProcesosActivos')}>
                  Procesos activos
                </button>
              </div>
            )}
          </div>
        ))}
        {!isSMorMD && (
            <>
            <button className={`p-5 ${selectedButton === 'Notificaciones' ? 'bg-gray-500' : 'bg-gray-100'}`} onClick={() => handleButtonClick('Notificaciones')} >
              Notificaciones
            </button>
            <button className={`p-5 ${selectedButton === 'BolsaDeEmpleo' ? 'bg-gray-500' : 'bg-gray-100'}`} onClick={() => handleButtonClick('BolsaDeEmpleo')}>
              Bolsa de Empleo
            </button>
            <button className={`p-5 ${selectedButton === 'MisOfertas' ? 'bg-gray-500' : 'bg-gray-100'}`} onClick={() => handleButtonClick('MisOfertas')} >
              Mis Ofertas
            </button>
            <button className={`p-5 ${selectedButton === 'PublicarOferta' ? 'bg-gray-500' : 'bg-gray-100'}`} onClick={() => handleButtonClick('PublicarOferta')} >
              Publicar Oferta
            </button>
            <button className={`p-5 ${selectedButton === 'ProcesosActivos' ? 'bg-gray-500' : 'bg-gray-100'}`} onClick={() => handleButtonClick('ProcesosActivos')} >
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