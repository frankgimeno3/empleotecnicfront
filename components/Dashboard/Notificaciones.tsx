import Tarjetanotificacion from './Tarjetanotificacion';

const Notificaciones = () => {
  return (
    <div className="mt-10 p-20 mx-10vw w-full">
      <h1 className="text-black text-3xl text-white">
        Saludos, <span className="font-bold text-3xl text-white">Usuario</span>
      </h1>
      <div className="flex justify-between mt-5">
      <h1 className="text-black text-3xl text-white">
        Notificaciones
      </h1>        <div>
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            >
              {index + 1}
            </button>
          ))}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            ... Ir al final
          </button>
        </div>
      </div>
      {[...Array(5)].map((_, index) => (
        <Tarjetanotificacion key={index} />
      ))}
    </div>
  );
};

export default Notificaciones;
