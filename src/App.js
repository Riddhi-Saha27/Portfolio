import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact';
import Portfolio from './components/Layout/Portfolio';
import Work from './components/Layout/Work';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='work' element={<Work />} />
      </Route>
    </Routes>
    </>
   
  );
}

export default App;