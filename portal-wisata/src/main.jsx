import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Scan from './Pages/Scan.jsx';
import Menu from './Pages/Menu.jsx';
import Landing from './Pages/Landing.jsx';
import Map from './Pages/Map.jsx';
import Article from './Pages/Article.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/App' element={<App />} ></Route>
        <Route path='/Scan' element={<Scan />} ></Route>
        <Route path='/Menu' element={<Menu />} ></Route>
        <Route path='/Welcome' element={<Landing />} ></Route>
        <Route path='/PhotoSpot' element={<Map />} ></Route>
        <Route path='/Article' element={<Article />} ></Route>
      </Routes>
    </Router>
    
  </StrictMode>,
)
