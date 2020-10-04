import React from 'react';
import './App.css';

function FoodDesc(props) {
    console.log("start")
    console.log(props.food)
    console.log("end")
    return (
        <div className="App">
            <h1 className="title">
                Your Food Name is {props.food.name}
            </h1>
            <p>
                It has {props.food.calories} calories.
      </p>
        </div>
    );
}

export default FoodDesc;
