import React, { useEffect, useState } from 'react';
import OfferCard from './Offercard';

interface Oferta {
  _id: string;
  cuentaemisora: string;
  contenido: string;
}

const ListadoOfertasSolicitudes: React.FC = () => {
  const [ofertas, setOfertas] = useState<Oferta[]>([]);

  const peticion = async () => {
    const res = await fetch('http://localhost:5000/ofertas/');
    const jsonOfferList: Oferta[] = await res.json();
    setOfertas(jsonOfferList);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="mx-10vw w-full pt-0 mt-0">
      {ofertas.map((oferta) => (
        <OfferCard key={oferta._id} oferta={oferta} />
      ))}
    </div>
  );
};

export default ListadoOfertasSolicitudes;