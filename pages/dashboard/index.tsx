import Tarjetanotificacion from "../../components/Dashboard/Tarjetanotificacion";
import React from "react";
import Navbar from "../../components/Navbar/NavbarIn";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from 'next';

interface NotificacionesProps {
  loggedUserName: string;
}

const Notificaciones: NextPage<NotificacionesProps> = ({ loggedUserName }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row mt-10 pt-5 w-screen  ">
        {/* <Navbarleft /> */}
        <div className="flex flex-col w-full">
          <div className="bg-gray-100">
            <div className="pt-7 pb-3 px-20 bg-white  shadow">
              <h1 className="text-cyan-950 px-10 text-xl ">
                Saludos, <span className="font-bold">{loggedUserName}</span>
              </h1>
            </div>

            <div className="flex-column mt-2 shadow bg-white min-h-screen mx-20 ">
              <div className="flex flex-row  py-3 justify-between">
                <h1 className="text-cyan-950 text-xl px-10 mt-1">
                  Notificaciones
                </h1>
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
        </div>
      </div>
    </div>
  );
};


export default Notificaciones;

export const getServerSideProps: GetServerSideProps<NotificacionesProps> = async (context) => {
  const value = Cookies.get("authvalue");
  let loggedUserName = "Usuario"; // Valor por defecto si no se encuentra el usuario

  if (value) {
    const decodedValue = jwt_decode(value) as { authValue: string };
    const authValue = decodedValue.authValue;

    if (authValue) {
      // Aplicamos el middleware para verificar si el usuario está autenticado
      const response = await authMiddleware(context.req);

      if (response) {
        // Si el middleware redirige, devolvemos la respuesta para abortar la carga de la página
        return response;
      }

      // Si el middleware no redirige, obtenemos los datos del usuario
      const userResponse = await fetch(`http://localhost:5000/users/${authValue}`, {
        method: "GET",
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        loggedUserName = userData.fullname;
      } else {
        // Manejar el caso en el que no se pueda obtener los datos del usuario
        console.error("Ha ocurrido un error al obtener los datos del usuario");
      }
    }
  }

  return {
    props: {
      loggedUserName,
    },
  };
};

async function authMiddleware(req: any) {
  let verify = req.cookies.get('loggedin');
  let url = req.url;

  if (!verify && url.includes('/dashboard')) {
    return {
      redirect: {
        destination: 'http://localhost:3000/',
        permanent: false,
      },
    };
  }

  if (verify && url === 'http://localhost:3000/') {
    return {
      redirect: {
        destination: 'http://localhost:3000/dashboard',
        permanent: false,
      },
    };
  }

  return null;
}