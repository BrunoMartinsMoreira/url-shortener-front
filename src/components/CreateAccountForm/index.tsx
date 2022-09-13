/* eslint-disable @typescript-eslint/no-misused-promises */
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { createAccount } from '../../types/User';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';

export const CreateAccountForm = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const disabledBtn =
    email.length === 0 || password.length === 0 || name.length === 0;

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!isValidEmail(e.target.value)) {
      setError('Email inválido');
    } else {
      setError('');
    }
    setEmail(e.target.value);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res = await auth.createAccount(name, email, password);
      res.status === 201 ? handleSuccess() : handleError(res);
    } catch (error) {
      alert('Verifique os dados informados e tente novamente!');
    }
  };

  const handleSuccess = (): void => {
    setEmail('');
    setName('');
    setPassword('');
    navigate('/');
  };

  const handleError = (res: createAccount): void => {
    setEmail('');
    setName('');
    setPassword('');
    alert(res.message);
  };

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <Input
          type="text"
          value={name}
          placeholder="John Doe"
          id="email"
          labelText="Seu nome:"
          onChange={handleName}
        />
        <Input
          type="email"
          value={email}
          placeholder="email@example.com"
          id="email"
          labelText="Email:"
          onChange={handleEmail}
        />
        {error.length > 0 && (
          <span className="text-xs text-red-600">{error}</span>
        )}
        <Input
          type="password"
          value={password}
          placeholder=""
          id="password"
          labelText="Senha:"
          onChange={handlePassword}
        />
        <Button
          text="Cadastrar"
          onclick={handleSubmit}
          isDisabled={disabledBtn}
        />
      </div>
    </form>
  );
};
