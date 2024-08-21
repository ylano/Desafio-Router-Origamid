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
    <div className='max-w-screen-sm m-auto'>
      <BrowserRouter>
        <Header />
            <Routes>
              <Route exact path="/" element={<Produtos/>} />
              <Route exact path="produto/:id" element={<Produto/>} />
              <Route exact path="/contato" element={<Contato/>} />
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
