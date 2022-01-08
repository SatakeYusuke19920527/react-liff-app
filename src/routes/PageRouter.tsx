import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Main from '../pages/Main';
import User from '../pages/User';
const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
