import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header'
import About from '../components/About';
import Work from '../components/Work';
export default function Page({ children }: any) {
  return (
    <div>
      <Navbar />
      <Header></Header>
      <About></About>
      <Work></Work>
      {children}
      <Footer />
    </div>
  );
}
