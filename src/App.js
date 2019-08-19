import React from 'react';

function Food({name, picture}){
  return <div>
    <h2>I like {name}!</h2>
    <img src={picture}  />
    </div>
}

const foodILike =[
  {
    name: "Tomato",
    image: "https://images.app.goo.gl/TXV2ijnxALmVVwap8"
  },
  {
    name: "pizza",
    image: "https://images.app.goo.gl/8fTmJWvXKXLsEAPu7"
  } 
];
function App() {
  return (
    <div className="App">
      <h1>def </h1>
      {foodILike.map(dish =>(
         <Food name={dish.name} picture={dish.image} /> 
      ))}
    </div>
  );
}

export default App;
