interface modalProp {
  errorMessage: string;
  setShowModal: () => void;
}

export const ModalError = ({
  errorMessage,
  setShowModal,
}: modalProp): JSX.Element => {
  return (
    <>
      {
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-red-500">Erro!</h3>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                    {errorMessage}
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-slate-200 rounded-b">
                  <button
                    className="bg-gray-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-8 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={setShowModal}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }
    </>
  );
};
