import React from 'react';
import Link from 'next/link';

interface Oferta {
  _id: string;
  cuentaemisora: string;
  contenido: string;
}

interface OfferCardProps {
  oferta: Oferta;
}


const OfferCard: React.FC<OfferCardProps> = ({ oferta }) => {
  return (
    <div className="justify-left mr-20 py-5 mb-2">
    <div className="bg-white rounded shadow-lg py-2 pl-3 mr-20 pr-4">
        <h2 className="text-xs font-semibold mb-1">
          Operario de Fábrica - Extrusión de Aluminio Industrial
        </h2>
        <h3 className="text-xs text-gray-700 mb-2">
          {oferta.cuentaemisora}
        </h3>
        <p className=" text-gray-600 mb-2" style={{fontSize:'0.70rem'}}>
          {oferta.contenido}
        </p>
        <ul className="text-sm text-gray-700 mb-2" style={{fontSize:'0.70rem'}}>
          <li>Salario: $18 - $22 por hora</li>
          <li>Jornada: Tiempo completo</li>
          <li>Días laborales: De lunes a viernes</li>
          <li>Ubicación: Ciudad Inventada</li>
          <li>
            Beneficios: Seguro médico, bonificaciones trimestrales,
            oportunidades de crecimiento
          </li>
          <li>
            Requisitos adicionales: Capacidad para levantar objetos pesados,
            conocimientos básicos de seguridad industrial
          </li>
        </ul>
        <Link
          href="/dashboard/solicitud"
          className="bg-blue-500 text-white font-semibold py-1 px-1 rounded hover:bg-blue-600" style={{fontSize:'0.70rem'}}
        >
          Aplicar ahora
        </Link>
        </div>
      </div>
      );
};

export default OfferCard;
