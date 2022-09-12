/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { ChangeEvent, useContext, useState } from 'react';
import { loginResponse } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Home = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

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

  const handleLogin = async (e: React.MouseEvent): Promise<loginResponse> => {
    e.preventDefault();
    const response = await auth.login(email, password);

    response.status === 200 ? loginSuccess() : loginError();

    return response;
  };

  const disabledBtn = email.length === 0 || password.length === 0;

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        placeholder="Digite seu e-mail"
        onChange={handleEmail}
      />
      <input
        type="password"
        value={password}
        placeholder="Digite sua senha"
        onChange={handlePassword}
      />
      <button disabled={disabledBtn} onClick={handleLogin}>
        Login
      </button>
      <br />
      <h4>Não possui conta?</h4>
      <br />
      <h2>Cadastrar</h2>
    </div>
  );
};
