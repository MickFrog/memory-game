import React from 'react';
import './App.css';
import Header from './components/Header';
import HowTo from './components/HowTo';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <HowTo />
      <CardContainer />
    </div>
  );
}

export default App;
