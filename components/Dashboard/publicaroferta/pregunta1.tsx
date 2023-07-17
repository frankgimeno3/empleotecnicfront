import React, { useState } from "react";



interface pregunta1Props {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
   }

  const pregunta1: React.FC<pregunta1Props> = ({ setComponenteActual }) => {

    const handleSeguirClick = () => {
          setComponenteActual("pregunta2");    
        }
 
      
    return (

    <form   className=" mx-20 px-20 bg-white mt-2 py-10">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <div className="mb-4">
                  <label htmlFor="titulo" className="block mb-2">
                    Título de la oferta:
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value="titulo"
                    // value={titulo}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="empresa" className="block mb-2">
                    Empresa:
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value="empresa"
                    // value={empresa}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
               </div>
            </div>

            <div className="mx-20">
        <button
      className="mt-2 px-6 py-1   text-md text-black bg-cyan-700 rounded bg-opacity-40"
      onClick={handleSeguirClick}
      >
        SEGUIR
      </button>
      </div>
          </form>
              );
  
            }
            
            
            export default pregunta1;
            