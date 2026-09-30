import './index.css';
import './components/Header.css';
import './components/Footer.css';
import './components/MainHome.css';
import IconSprite from './components/IconSprite';
import Header from './components/Header';
import MainHome from './components/MainHome';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <IconSprite />
      <Header />
      <MainHome />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
