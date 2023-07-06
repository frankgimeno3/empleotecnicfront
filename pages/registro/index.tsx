import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar/NavbarOut";
import Cookies from "js-cookie";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    const cookieOptions = { expires: expirationDate, secure: true };
    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ha habido un error con la autenticación");
        }
      })
      .then((response) => {
        // const { accessToken } = response
        // console.log("Token:", accessToken);
        console.log(response.authToken);

        Cookies.set("authvalue", response.authToken, cookieOptions); // Crear cookie con el valor del email
        router.push("/dashboard");
      })
      .catch((error) => {
        console.error("Ha ocurrido un error:", error);
        // Maneja el error de conexión o cualquier otro error
      });
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
      <div className="mx-20 px-20">
        <div className=" flex flex-col justify-center items-center text-center mx-20">
          <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-10 pb-9 mt-10 mx-20">
            <div className="flex flex-col items-center  pt-8 pb-11 mt-20 mx-10 text-white">
              <h1 className="text-4xl  text-white  pb-3">Crear cuenta</h1>

              <form action="/signup" method="POST" onSubmit={handleRegister}>
                <div className="mx-10 text-white ">
                  <label className="text-white mt-5">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mb-2 pl-2 text-black"
                    />
                  </label>

                  <label className="text-white mt-5">
                    Password
                    <input
                      type="password"
                      value={password}
                      placeholder="********"
                      onChange={(e) => setPassword(e.target.value)}
                      className="mb-5 pl-2 text-black"
                    />
                  </label>
                  {errorMessage && <p>{errorMessage}</p>}

                  <button
                    onClick={handleRegister}
                    className="bg-white text-xs text-gray-800 rounded-full py-1 px-3 border-b-2 border-gray-500 hover:bg-gray-600 hover:text-white"
                  >
                    Crear cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
