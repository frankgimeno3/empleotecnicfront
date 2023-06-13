import React from "react";
import Image from "next/image";
import Link from "next/link";

const SobreNosotros = () => {
  return (
    <div className="flex flex-col text-center p-10 mx-auto max-w-7xl bg-white p-2vh m-20">
      <h1 className="text-4xl mt-8 mb-3">Sobre Nosotros</h1>
      <p className="text-gray-600 text-center p-2vw">
        Facilitamos la conexión entre aquellos que buscan talento y aquellos que
        poseen un conocimiento especializado. Encuentre trabajadores técnicos
        altamente especializados en todo el mundo hispanohablante,o comparta su
        valiosa experiencia como profesional con perfil técnico.
      </p>
      <div className="flex justify-center my-5">
        <Image
          src="/images/imagenGenerica2.png"
          alt="Imagen 1"
          width={50}
          height={50}
        />
      </div>
      <p className="text-gray-600 text-center p-2vw">
        Contamos con una comunidad en constante crecimiento, compuesta por
        expertos calificados dispuestos a ofrecer sus habilidades y
        conocimientos a través de nuestra plataforma intuitiva y eficiente.
        Tanto si usted representa a una empresa en búsqueda de profesionales
        técnicos como si es un trabajador especializado deseoso de ampliar sus
        horizontes laborales, le invitamos a unirse a nuestra comunidad y
        aprovechar las ventajas de nuestro amplio mercado laboral en el mundo
        hispanohablante.{" "}
      </p>
      <h3 className="text-bolder pt-5">
        Descubra hoy mismo cómo podemos ayudarle a alcanzar el éxito en el
        ámbito técnico especializado.
      </h3>

      <div className="flex justify-center mt-5">
        <Image
          src="/images/imagenGenerica2.png"
          alt="Imagen 2"
          width={50}
          height={50}
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl">Quiere saber más?</h2>
        <p className="mb-5">Póngase en contacto con nosotros, a través del siguiente link</p>
        <button>
          <Link href="/contacto" passHref>
            <span className="bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-900">
              Contáctenos
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SobreNosotros;
