interface buttonProps {
  text: string;
  isDisabled: boolean;
  onclick: (e: React.MouseEvent) => void;
}

export const UrlButton = ({
  text,
  isDisabled,
  onclick,
}: buttonProps): JSX.Element => {
  return (
    <button
      onClick={onclick}
      disabled={isDisabled}
      className={
        isDisabled
          ? `bg-blue-500 text-white font-bold px-6 ml-2 rounded opacity-50 cursor-not-allowed h-[50px]`
          : `btn inline-block px-6 py-2.5 bg-blue-600 text-white font-bold leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center ml-2 h-[50px]`
      }
    >
      {text}
    </button>
  );
};
