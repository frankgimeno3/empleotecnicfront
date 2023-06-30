 
import MyOfferCard from '../../../components/Dashboard/MisOfertas/MyOfferCard'
import Navbar from "../../../components/Navbar/NavbarIn";

const MisOfertas = () => {
    return (
      <>
      <Navbar/>
      <div className="mt-5 pt-5  bg-gray-100">
    <div className="pt-7  bg-white  shadow">
    <h1 className="text-cyan-950 px-10 ml-20 text-lg ">
          Ofertas publicadas</h1>
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        <MyOfferCard />
        </div>
      </div>
      </>
    );
  };
  
  export default MisOfertas;