import React, { useEffect, useState } from 'react';

export default function Terminos() {
  // AQUÍ IBA LO COMENTADO AL FINAL

const [items, setItems] = useState([])
const peticion = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const res = await fetch("http://localhost:5000/users/");
  const games = await res.json()
  setItems(games)
}

useEffect(()=>{
  peticion()
})

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {
          items.map(item =>(
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.username}</p>
                {/* <p>{usuarioindividual.email}</p>
                <p>{usuarioindividual.password}</p>
                <p>{usuarioindividual.fullname}</p> */}
            </div>
          ))
        }
      </div>
      <h1>Esta es la vista de Términos de Servicio</h1>
    </div>
  );
}







// const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/users/');
//       if (response.ok) {
//         const jsonData = await response.json();
//         console.log(jsonData, "ESTOY DENTRO");
//         setData(jsonData);
//       } else {
//         console.log('La respuesta de la petición es incorrecta.');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchData()
