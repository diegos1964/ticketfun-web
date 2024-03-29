import { useState, FormEvent } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase'; // Atualize o caminho conforme necessário
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormLogin = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false)
      toast.success('Login efetuado com sucesso!');
      router.push('/Resume');
    } catch (err) {
      setIsLoading(false)
      if (err instanceof Error) {
        toast.error('Erro ao efetuar o Login!');
        setError(err.message);
      } else {
        setError('Erro desconhecido');
    }
    }
  };


  const handleGoogleSignIn = async () => {
 
    setIsLoading(true)
    const provider = new GoogleAuthProvider();

    try {
      setIsLoading(false)
      await signInWithPopup(auth, provider);
      toast.success('Login efetuado com sucesso!');
      router.push('/Resume');
   
    } catch (err ) {
       setIsLoading(false)
       if (err instanceof Error) {
          toast.error('Erro ao efetuar o Login!');
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça login na sua conta</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

          <div>
            <button
             disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>
 
</form>
  <div className="mt-4 flex items-center justify-between">
    <button
      disabled={isLoading}
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
    Entrar com Google
    </button>
  </div>
  <div className="text-sm">
      <Link href="/SignUp" className="font-medium text-indigo-600 hover:text-indigo-500">
    
          Ainda não possui uma conta? Cadastre-se

      </Link>
</div>
</div>
</div>
);
};

export default FormLogin;