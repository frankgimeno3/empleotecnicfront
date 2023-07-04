import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar/NavbarOut";

const inter = Inter({ subsets: ["latin"] });

export default function Registro() {
 

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
        <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-10 pb-10 mt-20">
          <div className="flex flex-col items-center  py-20 mx-10">
            <h1 className="text-4xl text-white pb-10">Crear cuenta</h1>

            <form action="/signup" method="POST">
             
            <div className="mx-10">
              <label>
                {" "}
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="rockstar@ironhack.com"
                />
              </label>

              <label>
                {" "}
                Password
                <input type="password" name="password" placeholder="********" />
              </label>

              <button type="submit">Create account</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
