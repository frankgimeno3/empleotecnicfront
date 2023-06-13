import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-gray-500 p-4 md:flex-row">
      <div>
        <Link href="/" passHref>
          <Image src="/icons/appicon.jpg" alt="logo" width={30} height={30} />
        </Link>
      </div>
      <div className="flex flex-col items-center md:flex-row space-y-4 pt-2 md:space-y-0 pt-2 md:space-x-4 pt-2">
        <Link href="/terms" passHref>
          <span className="text-white hover:underline cursor-pointer">Términos de servicio</span>
        </Link>
        <Link href="/privacy" passHref>
          <span className="text-white hover:underline cursor-pointer">Política de privacidad</span>
        </Link>
        <Link href="/contacto" passHref>
          <span className="text-white hover:underline cursor-pointer">Contacto</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;