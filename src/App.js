import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
        <Sidebar/>
      <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>

       
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
