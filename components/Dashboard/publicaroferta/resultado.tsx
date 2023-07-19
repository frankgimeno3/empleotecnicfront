import { useRouter } from "next/router";

interface resultadoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  titulo: string;
  descripcion: string;
  provincia: string;
  localidad: string;
  direccion: string;
  margensuperior: string;
  jornada: string;
  margeninferior: string;
  dias: string;
  turno: string;
  trabfestivos: boolean;
  requisitos: string;
  adicional: string;
}

const Resultado: React.FC<resultadoProps> = ({
    setComponenteActual,
  titulo,
  descripcion,
  provincia,
  localidad,
  direccion,
  margensuperior,
  jornada,
  margeninferior,
  dias,
  turno,
  trabfestivos,
  requisitos,
  adicional,
}) => {
  let festivoslaborables;
  if (trabfestivos == true) {
    festivoslaborables == "Sí";
  } else {
    festivoslaborables == "No";
  }
  const router = useRouter();

  const handleSeguirClickBack = () => {
    setComponenteActual("pregunta4");
  };

  const handleClickPublicar = () => {
    fetch("http://localhost:5000/files/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo,
        descripcion,
        provincia,
        localidad,
        direccion,
        margensuperior,
        jornada,
        margeninferior,
        dias,
        turno,
        trabfestivos,
        requisitos,
        adicional,}),
    })
    router.push("/dashboard");
};

  return (
    <div className="mx-20 p-20 flex flex-col justify-center text-center">
      <h1 className="font-bold">Todo listo!</h1>
      <h2>Esta es la vista previa de su oferta. </h2> 
        <h2>Si quiere, puede volver atrás y modificar alguno de los campos que aparecen, utilizando el botón atrás.
        </h2>
        <h2>Cuando la oferta esté lista, puede hacer click en publicar.</h2>
      <div className="justify-left mx-20 px-20 mb-2">
        <div className="mx-20 px-20">
          <div className="bg-white rounded shadow-lg py-2 mx-20 ">
            <h2 className="text-xs font-semibold mb-1">{titulo}</h2>
            <h3 className="text-xs text-gray-700 mb-2">
               NOMBRE DE SU EMPRESA
            </h3>
            <p className=" text-gray-600 mb-2" style={{ fontSize: "0.70rem" }}>
              {descripcion}
            </p>
            <ul
              className="text-sm text-gray-700 mb-2 mx-20"
              style={{ fontSize: "0.70rem" }}
            >
              <li>
                Salario: Entre {margeninferior} y {margensuperior} por hora
              </li>
              <li>Jornada:{jornada}</li>
              <li>Días laborales: {dias}</li>
              <li>Tipo de turno: {turno}</li>
              <li>
                Ubicación: {provincia}, {localidad}, {direccion}
              </li>
              <li>Requisitos: {requisitos} </li>
              <li>
                Es posible que sea necesario trabajar en días festivos?{" "}
                {festivoslaborables}{" "}
              </li>
              <li>Información adicional: {adicional}</li>
            </ul>
            <div className="mx-20">
            <button
              className="mt-2 px-6 py-1 mx-1 text-md text-black bg-cyan-700 rounded bg-opacity-40"
              onClick={handleSeguirClickBack}
            >
              ATRÁS
            </button>
            <button
              className="mt-2 px-6 py-1 mx-1 text-md text-black bg-cyan-700 rounded bg-opacity-40"
              onClick={handleClickPublicar}
            >
              PUBLICAR
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
