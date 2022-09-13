/* eslint-disable @typescript-eslint/no-misused-promises */
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { loginResponse } from '../../types/User';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const token = localStorage.getItem('authToken');
      if (token) {
        await auth.validateToken(token);
        navigate('/urls');
      }
    };
    getUser();
  }, []);

  const loginSuccess = (): void => {
    setEmail('');
    setPassword('');
    navigate('/urls');
  };

  const loginError = (): void => {
    setEmail('');
    setPassword('');
    alert('Email ou senha incorretos');
  };

  const disabledBtn = email.length === 0 || password.length === 0;

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.MouseEvent): Promise<loginResponse> => {
    e.preventDefault();
    const response = await auth.login(email, password);

    response.status === 200 ? loginSuccess() : loginError();

    return response;
  };

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <Input
          type="email"
          value={email}
          placeholder="email@example.com"
          id="email"
          labelText="Email:"
          onChange={handleEmail}
        />
        <Input
          type="password"
          value={password}
          placeholder=""
          id="password"
          labelText="Senha:"
          onChange={handlePassword}
        />
        <Button text="Login" onclick={handleLogin} isDisabled={disabledBtn} />
      </div>
    </form>
  );
};
