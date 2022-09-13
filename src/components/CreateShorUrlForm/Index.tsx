/* eslint-disable @typescript-eslint/no-misused-promises */
import { ChangeEvent, useContext, useState } from 'react';
import { UrlContext } from '../../contexts/Urls/UrlsContext';
import { validateUrl } from '../../helpers/validateUrl';
import { UrlButton } from '../Urls/UrlBtn';
import { UrlInput } from '../Urls/UrlInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateShortUrlForm = (): JSX.Element => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { createUrl, setUrls } = useContext(UrlContext);

  const handleUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    const errorMessage: string = !validateUrl(e.target.value)
      ? 'Formato de url inválido, informe uma url válida para prosseguir!'
      : '';

    setError(errorMessage);
    setOriginalUrl(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (token) {
      const res = await createUrl(originalUrl, token);

      if (res.status === 400) {
        setOriginalUrl('');
        toast.error(
          'Erro ao cadastrar a url, verifique se digitou corretamente ou se já não possui a mesma url cadastrada!',
        );

        return;
      }
      toast.success('Url adicionada com sucesso!');
      setOriginalUrl('');
      setUrls((prevState) => [...prevState, res]);
    }
  };

  const disableBtn = originalUrl === '' || !validateUrl(originalUrl);

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center py-3 px-6 bg-gray-50 border-b space-x-6 m-auto w-[100vw]">
        <div className="mb-5 flex flex-wrap justify-center input-group relative items-end w-[70vw]">
          <UrlInput
            id="urls"
            labelText="Encurtar uma url:"
            value={originalUrl}
            placeholder="htts://www.your-extremely-gigantic-url.com"
            onChange={handleUrl}
          />

          <UrlButton
            text="Enviar"
            onclick={handleSubmit}
            isDisabled={disableBtn}
          />
          {error.length > 0 && (
            <span className="text-red-600 text-xs block mt-1 w-[46vw]">
              {error}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
