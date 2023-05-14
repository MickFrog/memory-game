import React from 'react';
import './App.css';
import Header from './components/Header';
import HowTo from './components/HowTo';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HowTo />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
