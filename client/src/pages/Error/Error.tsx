interface ErrorPageProps {
  error: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={"/error.webp"} alt="Error" className="w-56" />
      <h1 className="text-2xl text-gray-800 pt-5">Něco se pokazilo!</h1>
      <p className="text-lg text-gray-600 text-center">
        Požadovaná data nenalezena!
      </p>
      {error && <p className="mt-5 text-red-600 text-center">Error: {error}</p>}
    </div>
  );
};

export default ErrorPage;