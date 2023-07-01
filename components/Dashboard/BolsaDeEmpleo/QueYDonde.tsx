import React, { FC } from 'react';


interface SelectComponentProps {
  placeholder: string;
  options: string[];
}

const SelectComponent: FC<SelectComponentProps> = ({ placeholder, options }) => {
  return (
    <div className=" mx-1 text-xs">
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

const QueYDonde: FC = () => {
  const sectorOptions: string[] = ['Vidrio', 'Ventanas', 'Protección solar'];

  return (
    <div className="flex mx-10 px-9 items-center mt-1 mb-3 text-xs">
      <div className="flex space-x-4 mx-10">
        <SelectComponent placeholder="Sector" options={sectorOptions} />

        <div className="rounded border border-gray-500  p-2">
          <input
            className="w-64 outline-none placeholder-gray-500"
            type="text"
            placeholder="Localización"
          />
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Buscar Ofertas
        </button>
      </div>
    </div>
  );
};

export default QueYDonde;