import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Common({ children }) {
  return (
    <React.StrictMode>
      <NavBar />
      <div className="mx-5 mb-20 md:mb-28 xl:container xl:mx-auto">
        {children}
      </div>
      <Footer />
    </React.StrictMode>
  );
}