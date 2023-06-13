// Tarjetanotificacion.js

import Link from 'next/link';

const Tarjetanotificacion = () => {
  return (
    <div className="mt-10 w-50vw bg-white block p-4">
      <Link href="/detallenotificacion">
          <h2 className="text-gray-600">La empresa VIDRIOPERFIL ha leído su solicitud</h2>
          <h3 className="text-black">Lorem ipsum dolor sit amet</h3>
      </Link>
    </div>
  );
};

export default Tarjetanotificacion;