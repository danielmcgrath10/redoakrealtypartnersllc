import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Main from './pages/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
