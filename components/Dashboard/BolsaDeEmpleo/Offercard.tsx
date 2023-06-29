import React from 'react';

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
    <div className="flex justify-center items-center mb-10 pt-10 mx-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">
          Operario de Fábrica - Extrusión de Aluminio Industrial
        </h2>
        <h3 className="text-lg text-gray-700 mb-4">
          {oferta.cuentaemisora}
        </h3>
        <p className="text-gray-600 mb-4">
          {oferta.contenido}
        </p>
        <ul className="text-gray-700 mb-4">
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
        <a
          href="#"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Aplicar ahora
        </a>
      </div>
    </div>
  );
};

export default OfferCard;
