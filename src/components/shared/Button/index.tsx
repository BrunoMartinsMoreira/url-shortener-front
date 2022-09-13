interface buttonProps {
  text: string;
  isDisabled: boolean;
  onclick: (e: React.MouseEvent) => void;
}

export const Button = ({
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
          ? `bg-blue-500 text-white font-bold px-5 py-2  rounded opacity-50 cursor-not-allowed max-w-xs`
          : `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 mr-2 ml-3 focus:outline-none max-w-xs`
      }
    >
      {text}
    </button>
  );
};
