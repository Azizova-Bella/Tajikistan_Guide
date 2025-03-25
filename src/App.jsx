import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/components/Restaurants';
import Foods from './pages/Foods/Foods';
import TourismSearchPage from './pages/searchPlace/searchPlace';
import Header from './shared/ui/header'
import { Toaster } from 'react-hot-toast';
import Clothes from './pages/clothes/clothes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header /> 
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/tourism-search" element={<TourismSearchPage />} />
          <Route path="/clothes" element={<Clothes />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
