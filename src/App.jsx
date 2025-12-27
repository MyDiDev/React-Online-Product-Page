import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductsList";
import ProductViewPage from "./pages/ProductView";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
