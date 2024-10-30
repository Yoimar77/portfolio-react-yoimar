// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from '../Layouts/Header/Header.jsx';
import { Home } from '../Layouts/Home/Home.jsx';
import { AboutMe } from '../Layouts/AboutMe/AboutMe.jsx';
import { StackTools } from '../Layouts/StackTools/StackTools.jsx';
import { CVPage } from '../Layouts/CVPages/CVPages.jsx';
import { Contact } from '../Layouts/Contact/Contact.jsx';
import { Footer } from '../Layouts/Footer/Footer.jsx'; // Importa el Footer

export const App = () => {
  return (
    <Router>
      <Header /> {/* Renderiza el Header en todas las páginas */}
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Ruta principal */}
        <Route path="/about" element={<AboutMe />} /> {/* Solo renderiza AboutMe */}
        <Route path="/stack-tools" element={<StackTools />} /> {/* Solo renderiza StackTools */}
        <Route path="/cv" element={<CVPage />} /> {/* Aquí redirige al PDF */}
        <Route path="/contact" element={<Contact />} /> {/* Nueva ruta para el componente Contact */}
      </Routes>
      <Footer /> {/* Renderiza el Footer al final */}
    </Router>
  );
};

// Componente principal que renderiza Home, AboutMe y StackTools
const MainPage = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="stack">
        <StackTools />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
