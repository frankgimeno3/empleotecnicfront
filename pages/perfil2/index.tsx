"use client";
import Navbar from "../../components/Navbar/NavbarIn";



 

function ProfilePage2() {

 
  return (
    <>
      <Navbar/>
      <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center">
      <h1 className="font-bold text-3xl">Perfil de la empresa</h1>

      <pre className="bg-zinc-800 p-4">
        {JSON.stringify(
           
          null
        )}
      </pre>

      <button
        className="bg-zinc-800 px-4 py-2 block mb-2"
      >
        Signout
      </button>
    </div>
    </>
  );
}

export default ProfilePage2;