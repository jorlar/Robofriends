import React from 'react';
import CardList from './cardList';
import { robots } from './robots';

const App = () => {
  return (
    <CardList robots = {robots}/>
  )
}

export default App