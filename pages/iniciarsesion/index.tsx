import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        // Realiza alguna acción con el token de acceso

        // Redirige al usuario a "/dashboard" solo si response.ok es true
        router.push("/dashboard");
      } else {
        const { message } = await response.json();
        setErrorMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error(error);
      // Maneja el error de conexión o cualquier otro error
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <video
        className="absolute top-0 left-0 object-cover w-screen h-screen"
        src="/video/perfiles.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw pt-10 pb-10 mt-20">
          <div className="flex flex-col items-center p-24">
            <h2 className="text-4xl text-white pb-10">Iniciar Sesión</h2>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p>{errorMessage}</p>}
              </div>

              <button
                className="mt-8 bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;