import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './index.css'; 
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './pages/contato';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col max-w-screen-sm m-auto min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route exact path="/" element={<Produtos />} />
            <Route exact path="produto/:id" element={<Produto />} />
            <Route exact path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
