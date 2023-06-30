import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from '../../components/Navbar/NavbarOut'

const inter = Inter({ subsets: ["latin"] });

export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [country, setCountry] = useState("");

  const handleRegister = () => {
    // Aquí puedes implementar la lógica de registro seguro
    console.log("Registro seguro:", email, password, accountType, country);
  };

  return (
    
    <div className="relative w-full h-screen">
      <Navbar/>
      <video
        className="absolute top-0 left-0 object-cover w-screen h-screen"
        src="/video/perfiles.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-10 pb-10 mt-20 ">

        <div className="flex flex-col items-center  p-20">
          <h1 className="text-4xl text-white pb-10">Crear cuenta</h1>
             
          <input
            type="email"
            placeholder=" Introducir Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 m-2 border border-gray-300 rounded-md"
          />
          
          <input
            type="password"
            placeholder="Introducir Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-2 border border-gray-300 rounded-md"
          />

          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="p-2 m-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione tipo de cuenta</option>
            <option value="empresa">Empresa</option>
            <option value="profesional">Profesional</option>
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 m-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione país</option>
            <option value="país1">País 1</option>
            <option value="país2">País 2</option>
          </select>

          <button
            onClick={handleRegister}
            className="mt-8 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
            >
            Crear cuenta
          </button>
        </div>
        </div>
        </div>
    </div>
  );
}
