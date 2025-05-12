import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GuestCheckout from './pages/GuestCheckout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guest" element={<GuestCheckout />} />
    </Routes>
  );
}