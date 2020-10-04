import React from 'react';
import './App.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.person.picture} className="image" alt="Profile"/>
      <h1>
        {props.person.name}
      </h1>

      <div>
        <p>
          Age : {props.person.age}
          <br />
               Favorite Food: {props.person.food}
          <br />
               Location : {props.person.location}
          <br />
               Favorite ML Hero : {props.person.favorite}
        </p>
      </div>

    </div>

  );
}

export default Card;