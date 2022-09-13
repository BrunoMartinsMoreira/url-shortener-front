import { LoginForm } from '../../components/LoginForm';
import { Link } from 'react-router-dom';

export const Home = (): JSX.Element => {
  return (
    <div className="md:mx-auto px-2 max-w-screen-md pt-10">
      <h1 className="pb-10 text-4xl">Login</h1>
      <LoginForm />
      <h4>Não possui conta?</h4>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-5">
        <Link to="/create-accout">
          <h2>Criar conta</h2>
        </Link>
      </button>
    </div>
  );
};
