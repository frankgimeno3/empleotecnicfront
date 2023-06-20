import Image from 'next/image';

const TarjetaCandidato = () => {
  return (
    <div className="mt-6 mx-8 flex " style={{ maxWidth: '30vw' }} >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div>
          <Image src="/images/candidato.jpg" alt="Foto de candidato" className="w-full h-64 object-cover" width={600} height={600} />
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold mb-2">Nombre del Candidato</h1>
          <p className="text-gray-700">Descripción del candidato</p>
          <div className="flex items-center mt-4">
            <svg className="w-6 h-6 text-gray-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <p className="text-gray-600">Ciudad, País</p>
          </div>
          <div className="flex items-center mt-2">
            <svg className="w-6 h-6 text-gray-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M4 20h4" />
              <path d="M9 16v4" />
              <path d="M15 16v4" />
              <path d="M9 12h6" />
              <path d="M12 6l2 4h-4l2-4zm2 10v-6" />
              <path d="M12 6v6" />
            </svg>
            <p className="text-gray-600">Experiencia: 5 años</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCandidato;