import React from "react";
import Link from "next/link";

export interface Oferta {
  _id: string;
  titulo: string;
  nombreEmpresa: string;
  sector: string;
  descripcion: string;
  salariohora: string;
  jornada: string;
  diaslaborables: string;
  ubicacion: string;
  beneficios: string;
  requisitosadicionales: string;
}

interface OfferCardProps {
  oferta: Oferta;
}

const OfferCard: React.FC<OfferCardProps> = ({ oferta }) => {
  return (
    <div className="justify-left mr-20 py-5 mb-2">
      <div className="bg-white rounded shadow-lg py-2 pl-3 mr-20 pr-4">
        <h2 className="text-xs font-semibold mb-1">{oferta.titulo}</h2>
        <h3 className="text-xs text-gray-700 mb-2">{oferta.nombreEmpresa}</h3>
        <p className=" text-gray-600 mb-2" style={{ fontSize: "0.70rem" }}>
          {oferta.descripcion}
        </p>
        <ul
          className="text-sm text-gray-700 mb-2"
          style={{ fontSize: "0.70rem" }}
        >
          <li>Salario: {oferta.salariohora} por hora</li>
          <li>Jornada:{oferta.jornada}</li>
          <li>Días laborales: {oferta.diaslaborables}</li>
          <li>Ubicación: {oferta.ubicacion}</li>
          <li>
            Beneficios: {oferta.beneficios}
          </li>
          <li>
            Requisitos adicionales: {oferta.requisitosadicionales}
          </li>
        </ul>
        <Link
          href="/dashboard/solicitud"
          className="bg-blue-500 text-white font-semibold py-1 px-1 rounded hover:bg-blue-600"
          style={{ fontSize: "0.70rem" }}
        >
          Aplicar ahora
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
