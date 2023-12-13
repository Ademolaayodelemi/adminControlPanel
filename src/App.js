import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Management from './pages/management/Management';

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
        <Sidebar/>
      <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/management" element={<Management />}/>
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
