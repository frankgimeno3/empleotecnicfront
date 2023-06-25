import { useState } from 'react';
import { useRouter } from 'next/router';

const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        // Realiza alguna acción con el token de acceso

        // Redirige al usuario a "/dashboard"
        router.push('/dashboard');
      } else {
        const { message } = await response.json();
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error(error);
      // Maneja el error de conexión o cualquier otro error
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default IniciarSesion;