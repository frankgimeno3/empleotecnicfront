import Tarjetanotificacion from "../../components/Dashboard/Tarjetanotificacion";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/NavbarIn";
// interface User {
//   _id: string;
//   email: string;
//   password: string;
//   fullname: string;
// }

const Notificaciones = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 pt-5  bg-gray-100">
        <div className="pt-7 pb-3 px-20 bg-white  shadow">
          <h1 className="text-cyan-950 px-10 text-xl ">
            Saludos, <span className="font-bold "> Usuario</span>
          </h1>
        </div>

        <div className="flex-column mt-2 shadow bg-white mx-20 ">
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
