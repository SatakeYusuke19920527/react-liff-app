import React from 'react';
import Header from './Header';
import '../styles/Layout.css';
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="l_wrapper">{children}</div>
    </div>
  );
};

export default Layout;
