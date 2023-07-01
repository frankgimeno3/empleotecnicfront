import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-cyan-800 px-4 py-2 md:flex-row">
      <div>
        <Link href="/" passHref>
          <div style={{fontSize:'0.70rem'}}
          className="bg-opacity-25 text-white rounded-full py-1 px-2 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
            E
          </div>
        </Link>        
      </div>
      <div style={{fontSize:'0.70rem'}}
      className="flex flex-col items-center md:flex-row space-y-4 pt-2 md:space-y-0 pt-2 md:space-x-4 pt-2">
        <Link href="/terminos" passHref>
          <span style={{fontSize:'0.70rem'}}
          className="text-white hover:underline cursor-pointer">Términos de servicio</span>
        </Link>
        <Link href="/privacidad" passHref>
          <span style={{fontSize:'0.70rem'}}
          className="text-white hover:underline cursor-pointer">Política de privacidad</span>
        </Link>
        <Link href="/contacto" passHref>
          <span style={{fontSize:'0.70rem'}}
          className="text-white hover:underline cursor-pointer">Contacto</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;