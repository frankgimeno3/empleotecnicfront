import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base ">
      <div className="md:ml-5 xl:pl-1 hover:bg-gray-800 hover:bg-opacity-25">
        <Link href="/" passHref>
          <Image src="/icons/appiconw.jpg" alt="logo" width={30} height={30} />
        </Link>
      </div>
      <div className="flex items-center space-x-4 xl:pr-5 md:pr-1">
        <Link href="/registro" passHref>
          <span className="text-gray-100 hover:cursor-pointer hover:text-gray-800">Registro</span>
        </Link>
        <div className="bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-900">
          <Link href="/iniciarsesion" passHref>
            <span className="hover:cursor-pointer">Iniciar Sesión</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;