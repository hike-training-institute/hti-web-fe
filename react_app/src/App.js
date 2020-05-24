import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer'
import MenuBar from './components/common/menubar/menubar'
import HomePage from './components/pages/home_page'


function App() {
  return (
    <>
      <Header />
      <MenuBar />
      {/* <RequestHeaderForm /> */}
      <HomePage />
      <Footer />
    </>
  );
}

export default App;