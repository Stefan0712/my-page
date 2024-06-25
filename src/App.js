import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import MyPage from './components/MyPage';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Profile from './components/Profile';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
