import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './Header/header'
import Information from "./Information/information"
import ExtraInformation from "./Information/extraInfomation"

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Information />
      <ExtraInformation/>
    </Container>
  );
}

export default App;
