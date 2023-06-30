import React from "react";

const OfertaSolicitada = () => {
  return (
    <div className="bg-white  shadow-lg p-3 pt-2 mt-2">
    <h2 className=" font-semibold mb-1" style={{fontSize:'0.75rem'}}>
      Operario de Fábrica - Extrusión de Aluminio Industrial
    </h2>
    
    <p className="text-gray-700 mb-2" style={{fontSize:'0.70rem'}}>
      Estamos buscando un operario de fábrica para unirse a nuestro equipo
      de extrusión de aluminio industrial. Si tienes experiencia previa en
      el manejo de maquinaria y estás buscando un trabajo dinámico y
      desafiante, ¡te invitamos a aplicar!
    </p>
    <p className="font-bold text-lg " style={{fontSize:'0.70rem'}}>
      Detalles oferta
    </p>
    <ul className="text-gray-700 mb-2" style={{fontSize:'0.65rem'}}>
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
    <p className="font-bold text-lg " style={{fontSize:'0.70rem'}}>
      Usuarios interesados
    </p>
    <ul className="text-gray-700 mb-2" style={{fontSize:'0.60rem'}}>
      <li><span className="font-bold">Antonio Recio,</span>  48, Barcelona, Extrusor</li>
      <li><span className="font-bold">Matías Gimeno,</span>  26, Barcelona, Operario</li>
      <li><span className="font-bold">Juan Recio, </span> 35, Lleida, Extrusor</li>
      <li><span className="font-bold">Marivel Gimeno</span> , 33, Valladolid, Extrusor</li>
      <li><span className="font-bold">Mohammed Ayoub</span> , 26, Melilla, Operario</li>
    </ul>
    </div>
    <div className="flex flex-wrap" style={{fontSize:'0.70rem'}}>
      <button className="bg-blue-500 text-white font-semibold  px-1 rounded hover:bg-blue-600 mr-2 mb-2">
        Editar Oferta
      </button>
      <button className="bg-blue-500 text-white font-semibold  px-1 rounded hover:bg-blue-600 mr-2 mb-2">
        Buscar Solicitudes Similares
      </button>
      <button className="bg-blue-500 text-white font-semibold  px-1 rounded hover:bg-blue-600 mb-2">
        Eliminar Oferta
      </button>
    </div>
  </div>
  );
};

export default OfertaSolicitada;