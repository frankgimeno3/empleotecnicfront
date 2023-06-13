import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Privacidad() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Política de Privacidad</h1>
      <h2>Información recopilada</h2>
      <p>
        Recopilamos información personal como nombre, dirección de correo
        electrónico, número de teléfono, habilidades técnicas y experiencia
        laboral cuando te registras en nuestra plataforma de bolsa de trabajo.
        Esta información es necesaria para crear tu perfil de usuario y
        facilitar la búsqueda de empleo y la contratación de servicios
        promocionales.
      </p>

      <h2>Publicación de anuncios y solicitudes de empleo</h2>
      <p>
        Nuestra plataforma permite a los usuarios publicar anuncios de empleo y
        solicitudes de empleo. Ten en cuenta que cualquier información personal
        incluida en estos anuncios o solicitudes será visible para otros
        usuarios de la plataforma. Te recomendamos no incluir información
        confidencial en estos anuncios o solicitudes.
      </p>

      <h2>Procesos de selección</h2>
      <p>
        Como parte de nuestra bolsa de trabajo, ofrecemos servicios de procesos
        de selección para facilitar la contratación de trabajadores técnicos.
        Durante este proceso, podemos recopilar información adicional, como
        historial laboral detallado, referencias y resultados de pruebas
        técnicas. Esta información se utiliza únicamente con el propósito de
        evaluar y seleccionar candidatos para empleo.
      </p>

      <h2>Uso de la información</h2>
      <p>
        La información recopilada se utiliza para facilitar la búsqueda de
        empleo, realizar procesos de selección, facilitar la contratación de
        servicios promocionales y mejorar la experiencia del usuario en nuestra
        plataforma. No compartimos tu información personal con terceros sin tu
        consentimiento explícito, a menos que sea necesario para cumplir con la
        ley o proteger nuestros derechos legales.
      </p>

      <h2>Seguridad</h2>
      <p>
        Tomamos medidas de seguridad adecuadas para proteger tu información
        personal contra pérdida, uso indebido o acceso no autorizado. Utilizamos
        tecnologías seguras y encriptación para garantizar la confidencialidad
        de tus datos.
      </p>

      <h2>Enlaces a sitios web de terceros</h2>
      <p>
        Nuestra plataforma puede contener enlaces a sitios web de terceros, como
        sitios de empresas empleadoras. No nos hacemos responsables de las
        prácticas de privacidad o el contenido de estos sitios. Te recomendamos
        leer las políticas de privacidad de estos sitios antes de
        proporcionarles tu información personal.
      </p>
    </div>
  );
}
// 