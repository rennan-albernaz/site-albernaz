
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import CookiePopup from './components/CookiePopup';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Catalogo />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-white flex items-center justify-center text-gray-900">
                <div className="text-center">
                  <p className="font-display font-black text-8xl text-green opacity-30">404</p>
                  <p className="text-xl font-semibold mt-4 text-gray-700">Página não encontrada</p>
                  <a href="/" className="btn-primary mt-6 inline-flex">← Voltar ao início</a>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <CookiePopup />
    </>
  );
}
