import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Favoritas from './components/Favoritas/Favoritas';
import Ocasiones from './components/Ocasiones/Ocasiones';
import RibbonFooter from './components/RibbonFooter/RibbonFooter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="appContent">
        <Hero />
        <Favoritas />
        <Ocasiones />
        <RibbonFooter />
      </main>
      <Footer />
    </>
  );
}

export default App;
