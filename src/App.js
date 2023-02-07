import React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import NotFoundPage from './pages/NotFoundPage';
import './assets/styles/globalStyles.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
