import React, { FC, useState } from "react";

interface SelectComponentProps {
  placeholder: string;
  options: string[];
}

const SelectComponent: FC<SelectComponentProps> = ({
  placeholder,
  options,
}) => {
  return (
    <div className="text-xs">
      <select
        className="w-64 bg-white text-gray-500 p-2 rounded border border-gray-500"
        defaultValue=""
        required
      >
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
    "Hoy",
    "Menos de una semana",
    "Menos de un mes",
    "Más de un mes",
  ];

  const tipoEmpleoOptions: string[] = [
    "Prácticas",
    "Temporal",
    "Indefinido",
    "Autónomo",
  ];

  const turnoHorarioOptions: string[] = [
    "Turno de mañana",
    "Turno de tarde",
    "Rotativo",
    "Turno 8 horas",
    "Incluye festivos",
  ];

  const distanciaMaximaOptions: string[] = [
    "a menos de 15 km",
    "a menos de 30 km",
    "a menos de 50 km",
    "a menos de 75 km",
    "a menos de 100 km",
    "territorio nacional",
    "internacional",
  ];

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="flex mx-20 items-center mb-0">
      <div className="flex-column align-start ">
        <h3 className="text-cyan-950 text-xs hover:font-semibold mx-10 mb-1">
          <button
            className="text-cyan-950"
            onClick={toggleAdvancedSearch}
          >
            Búsqueda avanzada
          </button>
        </h3>
        {showAdvancedSearch && (
          <div>
            <div className="flex flex-row text-xs">
              <div className="ml-10 mr-5">
                <SelectComponent
                  placeholder="Tipo de empleo"
                  options={tipoEmpleoOptions}
                />
              </div>
              <div className="mb-3">
                <SelectComponent
                  placeholder="Turno y Horario"
                  options={turnoHorarioOptions}
                />
              </div>
            </div>
            <div className="flex flex-row text-xs">
              <div className="ml-10 mr-5">
                <SelectComponent
                  placeholder="Distancia máxima"
                  options={distanciaMaximaOptions}
                />
              </div>
              <div className="mr-9">
                <SelectComponent
                  placeholder="Fecha de publicación"
                  options={fechaPublicacionOptions}
                />
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded mb-4">
                Buscar Ofertas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioBusquedaAvanzada;
