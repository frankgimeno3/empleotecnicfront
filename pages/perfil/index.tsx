"use client";
import { useSession, signOut } from "next-auth/react";
import Navigation, { NavigationProps } from "../dashboard/Navigation";



  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include", // Para enviar las cookies al servidor
      });

      if (res.status === 200) {
        // Se ha cerrado sesión con éxito
        router.push("/login"); // Redirige al usuario a la página de inicio de sesión
      } else {
        // Manejar el caso de error si no se pudo cerrar sesión
        console.error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
    router.push("/");
  };

function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <>
      <Navigation
        selectedButton={selectedButton}
        onButtonClick={handleButtonClick}
        onLogout={handleLogout}
      />    <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center">
      <h1 className="font-bold text-3xl">Profile</h1>

      <pre className="bg-zinc-800 p-4">
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>

      <button
        className="bg-zinc-800 px-4 py-2 block mb-2"
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
    </div>
    </>
  );
}

export default ProfilePage;