import React from "react";
import Image from "next/image";
import Link from "next/link";

const BolsasDeEmpleo = () => {
  return (
      <div className="bg-gray-200 bg-opacity-60 backdrop-filter backdrop-blur-lg w-full p-10 align-center text-center ">
        <div className="pb-20">
          <h1 className="text-4xl  mt-8 mb-3">
            Bolsas de empleo técnico{" "}
            <span className="font-bold">especializado </span>
          </h1>
          <h2 className="text-lg  ">
            Haga click en uno de los sectores que aparecen a continuación <br />
            para acceder a la bolsa de empleo especializada que desee
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-1 mb-10 max-w-7xl mx-auto">
          <div className="bg-white rounded shadow p-8 ">
        <Link href="/Sectores/vidrio">
            <h3 className="text-xl  mb-2">Sector del vidrio plano</h3>
            <p className="mb-4">
              Contenido del sector del vidrio plano. Aquí puedes escribir una
              descripción o información adicional.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/imagenGenerica2.png"
                alt="Imagen 1"
                width={50}
                height={50}
              />
            </div>
          </Link>
          </div>
          <div className="bg-white rounded shadow p-10 ">
          <Link href="/Sectores/carpinteria">

            <h3 className="text-xl  mb-2">Sector de la carpintería metálica</h3>
            <p className="mb-4">
              Contenido del sector de la carpintería metálica. Aquí puedes
              escribir una descripción o información adicional.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/imagenGenerica2.png"
                alt="Imagen 2"
                width={50}
                height={50}
              />
            </div>
            </Link>
          </div>
          <div className="bg-white rounded shadow p-10">
          <Link href="/Sectores/otros">

            <h3 className="text-xl mb-2">
              Otros sectores técnicos especializados
            </h3>
            <p className="mb-4">
              Contenido de otros sectores técnicos especializados. Aquí puedes
              escribir una descripción o información adicional.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/imagenGenerica2.png"
                alt="Imagen 3"
                width={50}
                height={50}
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default BolsasDeEmpleo;
