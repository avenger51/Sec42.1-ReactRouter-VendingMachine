
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import { Snack1, Snack2, Snack3 } from './Snack'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<VendingMachine />} />
      <Route path="/snack1" element={<Snack1 />} />
      <Route path="/snack2" element={<Snack2 />} />
      <Route path="/snack3" element={<Snack3 />} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;



