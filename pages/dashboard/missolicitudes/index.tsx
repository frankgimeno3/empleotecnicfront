 
import OfertaSolicitada from './OfertaSolicitada'

const MisSolicitudes = () => {
    return (
      <div className='mt-6 mx-20 bg-gradient-to-r from-gray-700 to-cyan-950' >
        < div className=" mt-7 py-10 bg-gray-200 pt-1">
        <h1 className="text-3xl mt-10 ml-20 font-bold">Ofertas a las que has enviado solicitudes</h1>
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        <OfertaSolicitada />
        </div>
      </div>
    );
  };
  
  export default MisSolicitudes;