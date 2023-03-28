
import './App.css';
import Navbar from './component/navbar';

import Home from './pages/home';

import Request from './pages/Request';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './pages/Upload';

import Signup from './pages/Signup';



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Signup" element={<Signup />} />
        
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
