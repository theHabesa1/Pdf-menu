import React from 'react'
import { Routes, Route } from "react-router-dom";
import Resturaone from './page/resturaone';
import Yod from './page/yod';

const App = () => {
  return (
    <Routes>
      <Route path="/vadmas" element={<Resturaone />} />
      <Route path="/yod" element={<Yod />} />
    </Routes>
  );
};

export default App;