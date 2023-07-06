import Tarjetanotificacion from "../../components/Dashboard/Tarjetanotificacion";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/NavbarIn";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// interface Payload {
//   email: string;
// }


const Notificaciones = () => {
  const [loggedUserName, setloggedUserName] = useState("Usuario")
  const [cookieValue, setCookieValue] = useState<{
    authValue: string | undefined;
    iat: number;
    exp: number;
  }>({
    authValue: undefined,
    iat: 0,
    exp: 0,
  });
  
  useEffect(() => {
    const value = Cookies.get('authvalue');
    if (value) {
      const decodedValue = jwt_decode(value) as {
        authValue: string | undefined;
        iat: number;
        exp: number;
      };
      setCookieValue(decodedValue);
    }
  }, []);

  fetch(`http://localhost:5000/users/${cookieValue.authValue}`, {
    method: "GET",
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } 
  })
  .then((response) => {
    // const { accessToken } = response
    // console.log("Token:", accessToken);
    console.log(response.fullname);
    setloggedUserName(response.fullname)
  })
  .catch((error) => {
    console.error("Ha ocurrido un error con el name:", error);
    // Maneja el error de conexión o cualquier otro error
  });

  return (
    <>
      <Navbar />
      <div className="mt-5 pt-5  bg-gray-100">
        <div className="pt-7 pb-3 px-20 bg-white  shadow">
          <h1 className="text-cyan-950 px-10 text-xl ">
            Saludos, <span className="font-bold">{loggedUserName}</span>
          </h1>
        </div>

        <div className="flex-column mt-2 shadow bg-white min-h-screen mx-20 ">
          <div className="flex flex-row  py-3 justify-between">
              <h1 className="text-cyan-950 text-xl px-10 mt-1">Notificaciones</h1>
              <div className="flex-row px-10 mt-1">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    className="bg-gray-500 text-white  px-1.5 rounded text-sm hover:bg-cyan-900 mr-2"
                  >
                    {index + 1}
                  </button>
                ))}
                <button className="bg-gray-500 text-white  px-1.5 rounded text-sm hover:bg-cyan-900">
                  ... Ir al final
                </button>
              </div>
          </div>
          <div className="flex-column ">
          {[...Array(5)].map((_, index) => (
            <Tarjetanotificacion key={index} />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notificaciones;