import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="grid place-content-center h-dvh bg-[radial-gradient(circle,rgba(16,27,92,1)_0%,rgba(0,0,0,1)_66%)]">
        <div className="flex flex-col gap-5 justify-center items-center bg-black/50 p-5 py-10 rounded backdrop-blur border-2 border-gray-600">
          <h2 className="text-2xl font-bold">404 Page not Found :(</h2>
          <p>It looks liked you tried going futher our imagination.</p>
          <Button onclick={() => navigate(`/`)}>Redirect Here</Button>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
