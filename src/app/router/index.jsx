import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Restaurants from '../../pages/Restaurants/Restaurants';
import Foods from '../../pages/Foods/Foods';
import Clothes from '../../pages/clothes/clothes'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
    </BrowserRouter>
  );
}
