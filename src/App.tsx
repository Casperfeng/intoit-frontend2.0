import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}
