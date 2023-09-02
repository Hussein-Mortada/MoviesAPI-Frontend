import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import GuestGuard from './context/GuestGuard';
import About from './pages/About';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { AuthProvider } from './context/AuthContext';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <div className='app-container'>
    <Router>
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<GuestGuard><RegisterPage /></GuestGuard>} />
          <Route path="/login" element={<GuestGuard><LoginPage /></GuestGuard>} />
          <Route path="/movie/:netflixId" element={<MovieDetailsPage/>} />
          <Route path="/search/:searchQuery" element={<SearchPage/>} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
    
    </div>
  );
}

export default App;
