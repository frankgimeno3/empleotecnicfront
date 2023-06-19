// Notificaciones.js

import Tarjetanotificacion from './Tarjetanotificacion';

const Notificaciones = () => {
  return (
    <div className="mt-10 p-20  mx-10vw w-full">
      <h1 className="text-black text-3xl text-white">Saludos, <span className='font-bold text-3xl text-white'>Usuario</span></h1>
      {[...Array(5)].map((_, index) => (
        <Tarjetanotificacion key={index} />
      ))}
    </div>
  );
};

export default Notificaciones;