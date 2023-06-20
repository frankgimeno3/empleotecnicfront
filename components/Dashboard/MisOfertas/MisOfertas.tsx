 
import MyOfferCard from './MyOfferCard'

const MisOfertas = () => {
    return (
      <div className='mt-6'>
        < div className=" mt-10 p-20 bg-gray-200 pt-1">
        <h1 className="text-3xl">Ofertas publicadas</h1>
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