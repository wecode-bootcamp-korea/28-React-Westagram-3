import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./pages/Login/Login";
import Main from './pages/Main/Main';

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/logingayun' element={<LoginGayun />} />
        <Route path='/maingayun' element={<MainGayun />} />
        <Route path='/loginhojin' element={<LoginHojin />} />
        <Route path='/mainhojin' element={<MainHojin />} />
        <Route path='/loginminah' element={<LoginMinah />} />
        <Route path='/mainminah' element={<MainMinah />} />
        <Route path='/loginjongho' element={<LoginJongho />} />
        <Route path='/mainjongho' element={<MainJongho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;