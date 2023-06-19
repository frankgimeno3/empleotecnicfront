import React, { FC } from 'react';

interface SelectComponentProps {
  placeholder: string;
  options: string[];
}

const SelectComponent: FC<SelectComponentProps> = ({ placeholder, options }) => {
  return (
    <div className=" mx-1">
      <select className="w-64 bg-white text-gray-500 p-2 rounded border border-gray-500" defaultValue="" required>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const FormularioBusquedaAvanzada: FC = () => {
  const fechaPublicacionOptions: string[] = [
    'Hoy',
    'Menos de una semana',
    'Menos de un mes',
    'Más de un mes'
  ];

  const tipoEmpleoOptions: string[] = ['Prácticas', 'Temporal', 'Indefinido', 'Autónomo'];

  const turnoHorarioOptions: string[] = [
    'Turno de mañana',
    'Turno de tarde',
    'Rotativo',
    'Turno 8 horas',
    'Incluye festivos'
  ];

  const distanciaMaximaOptions: string[] = [
    'a menos de 15 km',
    'a menos de 30 km',
    'a menos de 50 km',
    'a menos de 75 km',
    'a menos de 100 km',
    'territorio nacional',
    'internacional'
  ];

  const sectorOptions: string[] = ['Vidrio', 'Ventanas', 'Protección solar'];

  return (
    <div className="flex justify-center items-center mt-10 mx-10 mb-0">
      <div className="flex flex-wrap justify-center align-start mb-0">
        <SelectComponent placeholder="Sector" options={sectorOptions} />
        <SelectComponent placeholder="Tipo de empleo" options={tipoEmpleoOptions} />
        <SelectComponent placeholder="Turno y Horario" options={turnoHorarioOptions} />
        <SelectComponent placeholder="Distancia máxima" options={distanciaMaximaOptions} />
        <SelectComponent placeholder="Fecha de publicación" options={fechaPublicacionOptions} />
      </div>
    </div>
  );
};

export default FormularioBusquedaAvanzada;