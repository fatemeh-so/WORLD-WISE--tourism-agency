import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/product";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CitiesList from'./component/CitiesList'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CitiesList/>} />
            <Route path="cities" element={<CitiesList/>} />
            <Route path="countries" element={<p>countries</p>} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
