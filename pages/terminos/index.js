import React, { useEffect, useState } from 'react';

export default function Terminos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/');
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData, "ESTOY DENTRO");
        setData(jsonData);
      } else {
        console.log('La respuesta de la petición es incorrecta.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{data}</p>
      <h1>Esta es la vista de Términos de Servicio</h1>
    </div>
  );
}