// Detallenotificacion.js
import Navbar from "../../components/Navbar/NavbarIn";
import Link from 'next/link'
const Detallenotificacion = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 py-3  bg-gray-100">
      <div className="flex-column mt-3 shadow bg-white py-5 mx-20 ">
          <h2 className="text-cyan-950 text-lg px-10  font-bold ">
            Detalles de la notificación
          </h2>
          <h3 className="text-cyan-950 text-sm px-10 pt-5 mt-1 font-bold">La empresa VIDRIOPERFIL ha leído su solicitud</h3>
          <p className="text-cyan-950 text-sm px-10 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            blandit mi et hendrerit congue. Sed cursus libero vel erat
            efficitur, eu feugiat enim finibus. Vestibulum eu iaculis purus.
            Aenean sagittis consectetur sem, id lobortis sem pharetra nec. Donec
            tristique risus id nunc consequat consequat. Maecenas ultricies
            tellus in nunc viverra dignissim. Fusce at vulputate ligula. Quisque
            non erat ac nisl venenatis tempus sed eu leo. Fusce placerat maximus
            nibh, in finibus est dapibus vel. Proin eget tincidunt mi, et
            ullamcorper erat. Proin iaculis eros id velit ullamcorper
            pellentesque. Sed eu varius turpis, a tincidunt lacus. Vivamus
            auctor mauris turpis, a rhoncus ligula feugiat at.
          </p>
          <Link href="/dashboard">
          <button className="bg-gray-500 text-white text-xs px-1 rounded text-sm hover:bg-cyan-900 px-10 mt-5 ml-10">
          Volver a Notificaciones
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detallenotificacion;
