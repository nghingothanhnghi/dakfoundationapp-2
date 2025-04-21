import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MasterLayout from './components/MasterLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
