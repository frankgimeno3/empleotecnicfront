import React, { useEffect, useState } from 'react';
import OfferCard from './Offercard';

interface Oferta {
  _id: string;
  titulo: string;
  nombreEmpresa: string;
  sector: string;
  descripcion: string;
  salariohora: string;
  jornada: string;
  diaslaborables: string;
  ubicacion: string;
  beneficios: string;
  requisitosadicionales: string;
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
    <div className="flex-column  ">
    {ofertas.map((oferta) => (
        <OfferCard key={oferta._id} oferta={oferta} />
      ))}
    </div>
  );
};

export default ListadoOfertasSolicitudes;