import Skills from './components/Skills';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
