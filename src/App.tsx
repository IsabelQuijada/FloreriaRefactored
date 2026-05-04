import { Routes, Route } from 'react-router-dom';
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/productos/:categorySlug" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
