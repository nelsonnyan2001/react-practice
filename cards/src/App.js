import React from 'react';
import './App.css';
import Card from './Card.js';
import * as people from './people.json'

function App() {
  console.log(people)
  return (
    <div className="container">
      <Card person={people[0]}></Card>
      <Card person={people[1]}></Card>
      <Card person={people[2]}></Card>
    </div>
  );
}

export default App;
