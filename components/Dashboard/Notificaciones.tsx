// Notificaciones.js

import Tarjetanotificacion from './Tarjetanotificacion';

const Notificaciones = () => {
  return (
    <div className="bg-gray-200 mx-10vw w-full">
      <h1 className="text-black">Saludos, Paco</h1>
      {[...Array(5)].map((_, index) => (
        <Tarjetanotificacion key={index} />
      ))}
    </div>
  );
};

export default Notificaciones;