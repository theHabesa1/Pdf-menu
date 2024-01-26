import React from 'react'
import { Routes, Route } from "react-router-dom";
import Resturaone from './page/resturaone';
import Yod from './page/yod';
import YodLun from './page/yodlunch';
import YodDin from './page/yoddin';
import Kaiser from './page/kaiser';
import Bon from './page/bona';
import Adiz from './page/adiz';

const App = () => {
  return (
    <Routes>
      <Route path="/vadmas" element={<Resturaone />} />
      <Route path="/yod" element={<Yod />} />
      <Route path="/yodlun" element={<YodLun />} />
      <Route path="/yoddin" element={<YodDin />} />
      <Route path="/kaiser" element={<Kaiser />} />
      <Route path="/Bon" element={<Bon />} />
      <Route path="/adiz" element={<Adiz />} />
      
    </Routes>
  );
};

export default App;