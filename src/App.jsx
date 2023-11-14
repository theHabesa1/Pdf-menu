import React from 'react'
import { Routes, Route } from "react-router-dom";
import Resturaone from './page/resturaone';

const App = () => {
  return (
    <Routes>
      <Route path="/vadmas" element={<Resturaone />} />
    </Routes>
  );
};

export default App;