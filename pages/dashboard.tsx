import React, { useState } from 'react';
import Notificaciones from '../components/Dashboard/Notificaciones';
import Dashboardheader from '../components/Dashboard/Dashboardheader';
import BolsaDeEmpleo from '../components/Dashboard/BolsaDeEmpleo';
import MisOfertas from '../components/Dashboard/MisOfertas';
import ProcesosActivos from '../components/Dashboard/ProcesosActivos';
import PublicarOferta from '../components/Dashboard/PublicarOferta';

type ComponentName = 'Notificaciones' | 'BolsaDeEmpleo' | 'MisOfertas' | 'PublicarOferta' | 'ProcesosActivos';

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState<ComponentName>('Notificaciones');

  const handleButtonClick = (buttonName: ComponentName) => {
    setSelectedButton(buttonName);
  };

  const renderComponent = (buttonName: ComponentName, component: React.ReactNode) => {
    if (selectedButton === buttonName) {
      return component;
    }
    return null;
  };

  return (
    <div style={{ margin: '0 20vw' }}>
      <div className="mt-20 display-flex flex-row">
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
      </div>
      {renderComponent('Notificaciones', <Notificaciones />)}
      {renderComponent('BolsaDeEmpleo', <BolsaDeEmpleo />)}
      {renderComponent('MisOfertas', <MisOfertas />)}
      {renderComponent('PublicarOferta', <PublicarOferta />)}
      {renderComponent('ProcesosActivos', <ProcesosActivos />)}
    </div>
  );
}