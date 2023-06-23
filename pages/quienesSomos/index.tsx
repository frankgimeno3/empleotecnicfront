import { useState, FormEvent } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function QuienesSomos(): JSX.Element {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="relative bg-gray-200">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">Nuestra Empresa</h1>
        </div>
      </header>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
        <p className="mb-4">
          Somos una empresa líder en el campo de recursos humanos, enfocada en el reclutamiento y selección de profesionales altamente capacitados para el sector técnico industrial. Nuestro objetivo principal es ayudar a las empresas a encontrar el talento adecuado para cubrir sus necesidades laborales y contribuir al crecimiento y éxito de sus proyectos.
        </p>
        <p className="mb-4">
          Contamos con un equipo de expertos en recursos humanos y una amplia red de contactos en el sector industrial. Utilizamos métodos de reclutamiento eficientes y personalizados para asegurar que los candidatos que presentamos cumplan con los requisitos técnicos y profesionales de nuestros clientes.
        </p>
        <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Reclutamiento y selección de personal especializado en sectores técnicos industriales</li>
          <li>Evaluación de perfiles profesionales</li>
          <li>Análisis de competencias y habilidades</li>
          <li>Asesoramiento en la gestión del talento</li>
          <li>Desarrollo de programas de capacitación y formación</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
        <p className="mb-4">
          Nuestra misión es ser el aliado estratégico de las empresas en la búsqueda y selección de profesionales altamente capacitados en el ámbito técnico industrial. Nos comprometemos a ofrecer servicios de calidad, enfocados en las necesidades específicas de cada cliente, con el fin de impulsar su crecimiento y desarrollo en el mercado.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <p className="mb-4">
          Si estás interesado en nuestros servicios o deseas obtener más información, no dudes en ponerte en contacto con nosotros! 
        </p>
        <p className="font-bold">
        Completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
        <div className="bg-white p-8 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Formulario de contacto</h3>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-800 font-bold mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-gray-800 font-bold mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="mt-8 bg-blue-500 text-white rounded-full py-2 px-6 border-b-2 border-blue-700 hover:bg-blue-700"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">
            © 2023 PROPORCION 3, S.A. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}