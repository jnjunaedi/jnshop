import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
