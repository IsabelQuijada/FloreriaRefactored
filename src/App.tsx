import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="appContent">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
