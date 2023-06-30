 
import MyOfferCard from '../../../components/Dashboard/MisOfertas/MyOfferCard'

const MisOfertas = () => {
    return (
      <div className='mt-6 mx-20 bg-gradient-to-r from-gray-700 to-cyan-950' >
        < div className=" mt-7 py-10 bg-gray-200 pt-1">
        <h1 className="text-3xl mt-10 ml-20 font-bold">Ofertas publicadas</h1>
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        </div>
      </div>
    );
  };
  
  export default MisOfertas;