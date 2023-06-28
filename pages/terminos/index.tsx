import React, { useEffect, useState } from 'react';

interface User {
  _id: string;
  email: string;
  password: string;
  fullname: string;
}

export default function Terminos() {
  const [ofertas, setOfertas] = useState<User[]>([]);

  const peticion = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetch("http://localhost:5000/ofertas/");
    const jsonOfferList = await res.json();
    setOfertas(jsonOfferList);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {ofertas.map((oferta) => (
          <div key={oferta._id}>
            <p>{oferta}</p>
            <p>{user.password}</p>
            <p>{user.fullname}</p>
          </div>
        ))}
      </div>
      <h1>Esta es la vista de Términos de Servicio</h1>
    </div>
  );
}