import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './MainInformation/header'

function App() {
  return (
    <Container maxWidth="lg">
      <Header/>
    </Container>
  );
}

export default App;
