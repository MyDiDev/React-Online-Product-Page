import { useNavigate } from "react-router-dom";
import "./notfound.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="grid place-content-center h-full">
        <div className="flex flex-col gap-5 justify-center items-center bg-black/50 p-5 py-10 rounded backdrop-blur border-2 border-gray-600">
          <h2 className="text-2xl font-bold">404 Page not Found :(</h2>
          <p>It looks liked you tried going futher our imagination.</p>
          <button
            onClick={() => navigate(`/`)}
            className="bg-white text-black px-4 p-2 rounded-full cursor-pointer active:bg-white/90"
          >
            Redirect Here
          </button>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
