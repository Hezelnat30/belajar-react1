import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  const navigateError = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Oops, terdapat kesalahan!
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, sepertinya ada masalah saat memuat halaman.
          </p>
          <button
            onClick={navigateError}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
