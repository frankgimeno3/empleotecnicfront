  import Link from 'next/link';
  import { useState } from 'react';

  const Tarjetanotificacion: React.FC = () => {
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    const handleMouseEnter = () => {
      setShowDeleteMessage(true);
    };

    const handleMouseLeave = () => {
      setShowDeleteMessage(false);
    };

    return (
      <div className="mt-10 w-50vw bg-white block p-4 relative">
        <Link href="/detallenotificacion">
          <div className="flex justify-between">
            <h2 className="text-gray-600">La empresa VIDRIOPERFIL ha leído su solicitud</h2>
            <div
              className="cursor-pointer relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={showDeleteMessage ? 'red' : 'black'}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {showDeleteMessage && (
                <div className="absolute bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded mt-2 top-0 right-0 z-10 shadow">
                  Haga click aquí para eliminar esta notificación
                </div>
              )}
            </div>
          </div>
          <h3 className="text-black">Lorem ipsum dolor sit amet</h3>
        </Link>
      </div>
    );
  };

  export default Tarjetanotificacion;