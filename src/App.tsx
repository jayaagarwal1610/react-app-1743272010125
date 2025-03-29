import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AskoidTools from './components/AskoidTools';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <AskoidTools />
      </main>
      <Footer />
    </div>
  );
};

export default App;