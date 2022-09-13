import { Link } from 'react-router-dom';
import { CreateAccountForm } from '../../components/CreateAccountForm';

export const CreateAccount = (): JSX.Element => {
  return (
    <div className="md:mx-auto px-2 max-w-screen-md pt-10">
      <h1 className="pb-10 text-4xl">Cadastro</h1>
      <CreateAccountForm />
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-6 rounded inline-flex items-center mt-5">
        <Link to="/">
          <h2> Voltar</h2>
        </Link>
      </button>
    </div>
  );
};
