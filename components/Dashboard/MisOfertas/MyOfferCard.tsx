import React from "react";

const MyOfferCard = () => {
  return (
    <div className="flex justify-center items-center my-5 mx-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">
          Operario de Fábrica - Extrusión de Aluminio Industrial
        </h2>
        
        <p className="text-gray-600 mb-4">
          Estamos buscando un operario de fábrica para unirse a nuestro equipo
          de extrusión de aluminio industrial. Si tienes experiencia previa en
          el manejo de maquinaria y estás buscando un trabajo dinámico y
          desafiante, ¡te invitamos a aplicar!
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
        <div>
        <p className="font-bold text-lg mb-1">
          Usuarios interesados
        </p>
        <ul className="text-gray-700 mb-8">
          <li><span className="font-bold">Antonio Recio,</span>  48, Barcelona, Extrusor</li>
          <li><span className="font-bold">Matías Gimeno,</span>  26, Barcelona, Operario</li>
          <li><span className="font-bold">Juan Recio, </span> 35, Lleida, Extrusor</li>
          <li><span className="font-bold">Marivel Gimeno</span> , 33, Valladolid, Extrusor</li>
          <li><span className="font-bold">Mohammed Ayoub</span> , 26, Melilla, Operario</li>
        </ul>
        </div>
        <div className="flex flex-wrap">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2 mb-2">
            Editar Oferta
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2 mb-2">
            Buscar Solicitudes Similares
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mb-2">
            Eliminar Oferta
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOfferCard;