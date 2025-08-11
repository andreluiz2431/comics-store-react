import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComicsListPage from './pages/ComicsListPage';
import CartPage from './pages/CartPage';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comics" element={<ComicsListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
