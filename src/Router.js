import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginGayun from './pages/Gayun/Login/LoginGayun';
import MainGayun from './pages/Gayun/Main/MainGayun';
import LoginJongho from './pages/Jongho/Login/LoginJongho';
import MainJongho from './pages/Jongho/Main/MainJongho';
import LoginHojin from './pages/Hojin/Login/LoginHojin';
import MainHojin from './pages/Hojin/Main/MainHojin';
import LoginMinah from './pages/Minah/Login/LoginMinah';
import MainMinah from './pages/Minah/Main/MainMinah';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logingayun" element={<LoginGayun />} />
        <Route path="/maingayun" element={<MainGayun />} />
        <Route path="/loginhojin" element={<LoginHojin />} />
        <Route path="/mainhojin" element={<MainHojin />} />
        <Route path="/loginminah" element={<LoginMinah />} />
        <Route path="/mainminah" element={<MainMinah />} />
        <Route path="/loginjongho" element={<LoginJongho />} />
        <Route path="/mainjongho" element={<MainJongho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
