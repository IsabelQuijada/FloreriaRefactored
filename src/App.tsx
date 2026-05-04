import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Favoritas from './components/Favoritas/Favoritas';
import Ocasiones from './components/Ocasiones/Ocasiones';
import RibbonFooter from './components/RibbonFooter/RibbonFooter';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import NosotrosPage from './pages/NosotrosPage/NosotrosPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main className="appContent">
      <Hero />
      <Favoritas />
      <Ocasiones />
      <RibbonFooter />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/productos/:categorySlug" element={<ProductsPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
