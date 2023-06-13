import { useState, FormEvent } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto(): JSX.Element {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 object-cover w-screen h-screen"
        src="/video/perfiles.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-4 pb-4 mt-20 ">
          <div className="flex  flex-col items-center justify-between p-12">
            <h1 className="text-2xl font-bold text-white mb-10">
              Formulario de contacto
            </h1>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-white font-bold mb-1"
                >
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
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-1"
                >
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
                <label
                  htmlFor="mensaje"
                  className="block text-white font-bold mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
              className="mt-8 bg-white text-gray-800 rounded-full py-2 px-6 border-b-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-900"          
              type="submit"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
