interface resultadoProps {
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
  return (
    <div className="mx-20 p-20 flex flex-col justify-center text-center">
      <h1>Vista previa</h1>
      <div className="justify-left mx-20 px-20 mb-2">
        <div className="mx-20 px-20">
          <div className="bg-white rounded shadow-lg py-2 mx-20 ">
            <h2 className="text-xs font-semibold mb-1">{titulo}</h2>
            <h3 className="text-xs text-gray-700 mb-2">
              {" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
