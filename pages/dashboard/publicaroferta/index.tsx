import React, { Component, FormEvent } from "react";
import Navbar from "../../../components/Navbar/NavbarIn";

const PublicarOferta = () => {
 
    return (
      <>
      <Navbar/>
      <div className="mt-6  bg-gradient-to-r from-gray-700 to-cyan-950">
        <div className=" mt-7 py-10 bg-gray-200 pt-1 ">
        {/* <form onSubmit={handleSubmit} className="max-w-xl mx-auto"> */}
        <form   className=" mx-20 px-20">
            <h1 className="font-bold text-3xl mb-5">Publicar Ofertas</h1>
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

                <div className="mb-4">
                  <label htmlFor="descripcion" className="block mb-2">
                    Descripción:
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    value="descripcion"
                    // value={descripcion}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label htmlFor="salario" className="block mb-2">
                    Salario:
                  </label>
                  <textarea
                    id="salario"
                    name="salario"
                    value="salario"
                    // value={salario}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="jornada" className="block mb-2">
                    Jornada:
                  </label>
                  <textarea
                    id="jornada"
                    name="jornada"
                    value="jornada"
                    // value={jornada}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="diaslaborales" className="block mb-2">
                    Días Laborales:
                  </label>
                  <textarea
                    id="diaslaborales"
                    name="diaslaborales"
                    value="diaslaborales"
                    // value={diasLaborales}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label htmlFor="ubicacion" className="block mb-2">
                    Ubicación:
                  </label>
                  <textarea
                    id="ubicacion"
                    name="ubicacion"
                    value="ubicacion"
                    // value={ubicacion}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="beneficios" className="block mb-2">
                    Beneficios:
                  </label>
                  <textarea
                    id="beneficios"
                    name="beneficios"
                    value="beneficios"
                    // value={beneficios}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="requisitos" className="block mb-2">
                    Requisitos:
                  </label>
                  <textarea
                    id="requisitos"
                    name="requisitos"
                    value="requisitos"
                    // value={requisitos}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Publicar oferta
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  
}


export default PublicarOferta;
