import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductListPage } from "./pages/ProductsList";
import { ProductViewPage } from "./pages/ProductView";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/:id" element={<ProductViewPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;